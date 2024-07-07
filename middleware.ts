import { middlewares } from "@/middlewares";
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, event: NextFetchEvent) {
  for (const mw of middlewares) {
    const response = mw(request, event);

    if (response) {
      return response;
    }
  }

  return NextResponse.next()
}

// Apply middleware to these paths
export const config = {
  matcher: "/:path*",
};
