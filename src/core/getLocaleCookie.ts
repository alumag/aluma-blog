import { headers } from "next/headers";
import { Locale, DEFAULT_LOCALE, LOCALES } from "./locales.types";

export const getLocaleCookie = (): Locale => {
  const subdomain = headers().get("host")?.split(".")[0] as Locale;
  if (LOCALES.includes(subdomain)) {
    return subdomain;
  }

  return DEFAULT_LOCALE;
};
