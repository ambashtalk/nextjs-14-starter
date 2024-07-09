import { NextMiddleware, NextResponse } from "next/server";

// Redirect to home page when user directly visits server root
export const handleHomePageRedirect: NextMiddleware = (request) => {
    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
    }
};
