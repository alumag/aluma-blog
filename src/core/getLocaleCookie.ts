import { cookies } from "next/headers";
import { Locale, DEFAULT_LOCALE } from "./locales.types";

export const getLocaleCookie = (): Locale => {
  const cookieStore = cookies();
  const locale = cookieStore.get("locale");

  if (locale) {
    return locale.value as Locale;
  }

  return DEFAULT_LOCALE;
};
