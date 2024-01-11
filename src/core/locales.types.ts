export const LOCALES = ["he", "en"] as const;
export const DEFAULT_LOCALE = "en" as const;
export type Locale = (typeof LOCALES)[number];
