import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { isEmailAllowed } from "@/app/config/allowed-emails";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not set in environment variables");
}

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    EmailProvider({
      server: {
        host: "smtp.resend.com",
        port: 587,
        auth: {
          user: "resend",
          pass: process.env.RESEND_API_KEY,
        },
      },
      from: "onboarding@resend.dev",
      sendVerificationRequest: async ({ identifier: email, url }) => {
        console.log('=== Email Verification Request ===');
        console.log('To:', email);
        console.log('URL:', url);
        console.log('Resend API Key present:', !!process.env.RESEND_API_KEY);
        
        try {
          const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Sign in to Your Account",
            html: `<p>Click the magic link below to sign in:</p><p><a href="${url}">Sign In</a></p>`,
          });
          console.log('Email sent successfully:', result);
        } catch (error) {
          console.error('Failed to send email:', error);
          if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
          }
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log('=== Sign In Attempt ===');
      console.log('User email:', user.email);
      if (!user.email) {
        console.log('No email provided');
        return false;
      }
      const isAllowed = isEmailAllowed(user.email);
      console.log('Is email allowed:', isAllowed);
      return isAllowed;
    },
    async session({ session, token }) {
      console.log('=== Session Callback ===');
      console.log('Session:', session);
      console.log('Token:', token);
      return session;
    },
    async jwt({ token, user }) {
      console.log('=== JWT Callback ===');
      console.log('Token:', token);
      console.log('User:', user);
      if (user) {
        token.email = user.email;
      }
      return token;
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
