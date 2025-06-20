import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value;
	const { pathname } = request.nextUrl;

	if (
		pathname.startsWith('/auth') &&
		!pathname.includes('/auth/login') &&
		!pathname.includes('/auth/register') &&
		!token
	) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	if (token && pathname.includes('/auth/login') && pathname.includes('/auth/register')) {
		return NextResponse.redirect(new URL('доделать логику с профилем', request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/auth/:path*']
};
