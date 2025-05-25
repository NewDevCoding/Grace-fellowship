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

if (!process.env.EMAIL_FROM) {
  throw new Error("EMAIL_FROM is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
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
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        console.log('=== Email Verification Request ===');
        console.log('To:', email);
        console.log('URL:', url);
        console.log('Resend API Key present:', !!process.env.RESEND_API_KEY);
        console.log('From email:', process.env.EMAIL_FROM);
        
        try {
          const result = await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: "Sign in to Your Account",
            html: `<p>Click the magic link below to sign in:</p><p><a href="${url}">Sign In</a></p>`,
          });
          console.log('Email sent successfully:', result);
        } catch (error) {
          console.error('Failed to send email:', error);
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
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
