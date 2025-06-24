import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./constants";
import { getParsedToken } from "./generated/parseToken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/profile") && !token) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (token) {
    const parsedToken = getParsedToken(token);

    // если на чужой профиль, редирект на свой профиль
    if (parsedToken?.username) {
      if (pathname.startsWith("/profile/")) {
        const profileUsername = pathname.split("/profile/")[1];

        if (parsedToken.username !== profileUsername) {
          return NextResponse.redirect(
            new URL(ROUTES.PROFILE(parsedToken.username), request.url),
          );
        }
      }

      //с логина или регистрации редирект на профиль
      if (
        pathname.includes("/auth/login") ||
        pathname.includes("/auth/register")
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
  matcher: ["/auth/:path*", "/profile/:path*"],
};
