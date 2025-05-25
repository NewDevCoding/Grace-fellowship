import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { isEmailAllowed } from "@/app/config/allowed-emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          await resend.emails.send({
            from: process.env.EMAIL_FROM || "onboarding@resend.dev",
            to: email,
            subject: "Sign in to Your Account",
            html: `<p>Click the magic link below to sign in:</p><p><a href="${url}">Sign In</a></p>`,
          });
        } catch (error) {
          throw new Error(`Failed to send verification email: ${error}`);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      return isEmailAllowed(user.email);
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
