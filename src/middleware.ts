import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { Locale, LOCALES, DEFAULT_LOCALE } from "@/core/locales.types";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): Locale {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE) as Locale;
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.cookies.has("locale")) {
    return NextResponse.next();
  }

  // Set cookie if there is no locale cookie
  const locale = getLocale(request);
  const response = NextResponse.next();
  response.cookies.set("locale", locale);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
