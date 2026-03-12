import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function isStaticAsset(pathname: string): boolean {
  const staticPrefixes = ['/_next/', '/favicon.ico', '/favicon.svg'];
  const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(pathname);

  return staticPrefixes.some((prefix) => pathname.startsWith(prefix)) || hasFileExtension;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  if (!isStaticAsset(pathname)) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
