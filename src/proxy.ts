import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME as ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/admin-auth";
import { COOKIE_NAME as STUDENT_COOKIE_NAME, verifyStudentSessionToken } from "@/lib/student-auth";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

function isAdminPath(pathname: string) {
  return locales.some((locale) => pathname.startsWith(`/${locale}/admin`));
}

function isAdminLoginPath(pathname: string) {
  return locales.some((locale) => pathname.startsWith(`/${locale}/admin/login`));
}

function isAccountPath(pathname: string) {
  return locales.some((locale) => pathname.startsWith(`/${locale}/compte`));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale && isAdminPath(pathname) && !isAdminLoginPath(pathname)) {
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      const locale = pathname.split("/")[1];
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/admin/login`;
      return NextResponse.redirect(url);
    }
  }

  if (hasLocale && isAccountPath(pathname)) {
    const token = request.cookies.get(STUDENT_COOKIE_NAME)?.value;
    const studentId = await verifyStudentSessionToken(token);
    if (!studentId) {
      const locale = pathname.split("/")[1];
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/connexion`;
      return NextResponse.redirect(url);
    }
  }

  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip _next, API routes, and files with an extension (images, favicon, etc.)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
