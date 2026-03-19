import { NextResponse, type NextRequest } from 'next/server';

const BLOCKED_PATHS = [
  '/.env',
  '/.env.local',
  '/.env.production',
  '/.git',
  '/wp-admin',
  '/wp-login.php',
  '/xmlrpc.php',
  '/admin',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block sensitive paths
  if (BLOCKED_PATHS.some((p) => pathname.startsWith(p))) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml).*)',
  ],
};
