export const LOCALES = ["he", "en"] as const;
export const DEFAULT_LOCALE = "he" as const;
export type Locale = typeof LOCALES[number];
