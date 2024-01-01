export const gtmId = assertValue(
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  "Missing environment variable: NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
