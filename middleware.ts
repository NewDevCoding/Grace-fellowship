import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('Middleware token:', token);
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
);

// Only protect the sermons route
export const config = {
  matcher: ["/sermons/:path*"],
}; 