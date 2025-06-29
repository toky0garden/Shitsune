import { NextRequest, NextResponse } from 'next/server';
import { ParseToken } from './generated/parseToken';
import { ROUTES } from './app/(constants)/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/user') && !token) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (token) {
    const parsedToken = ParseToken(token);

    if (parsedToken?.username) {
      if (pathname.startsWith('/user/') && pathname.endsWith('/settings')) {
        // Получаем username из URL
        const urlUsername = pathname.split('/')[2];

        if (parsedToken.username !== urlUsername) {
          return NextResponse.redirect(
            new URL(ROUTES.SETTINGS(parsedToken.username), request.url),
          );
        }
      }

      //с логина или регистрации редирект на профиль
      if (
        pathname.includes('/auth/login') ||
        pathname.includes('/auth/register')
      ) {
        return NextResponse.redirect(
          new URL(ROUTES.PROFILE(parsedToken.username), request.url),
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/user/:path*'],
};
