import { cookies, headers } from "next/headers";
import { Locale, DEFAULT_LOCALE, LOCALES } from "./locales.types";

export const getLocaleCookie = (): Locale => {
  const subdomain = headers().get("host")?.split('.')[0] as Locale;
  if (LOCALES.includes(subdomain)) {
    return subdomain;
  }

  const cookieStore = cookies();
  const locale = cookieStore.get("locale");

  if (locale) {
    return locale.value as Locale;
  }

  return DEFAULT_LOCALE;
};
