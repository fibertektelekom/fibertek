import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * İleride /admin ve /personel için kimlik doğrulama buraya eklenecek.
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/personel/:path*"],
};
