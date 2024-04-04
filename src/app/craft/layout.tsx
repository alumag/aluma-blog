"use server";

import NextBreadcrumb from "@/components/NextBreadcrumb";
import { getLocaleCookie } from "@/core/getLocaleCookie";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleCookie();
  return {
    title: locale === "he" ? "יצירה" : "craft",
    description:
      locale === "he"
        ? "בלוג יצירה ואמנות מאת אלומה גלברד, על סריגה, רקמה, התנסויות בתחומים חדשים והמחשבות שעולות בעקבות המלאכה"
        : "Craft blog of knitting, crocheting and other needle work by Aluma Gelbard",
    authors:
      locale === "he" ? { name: "אלומה גלברד" } : { name: "Aluma Gelbard" },
    openGraph: {
      title:
        locale === "he"
          ? "אלומה גלברד - בלוג יצירה"
          : "Aluma Gelbard - Craft Blog",
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      siteName: locale === "he" ? "אלומה גלברד" : "Aluma Gelbard",
      images: "/images/20230521_110544.jpg",
    },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextBreadcrumb
        homeElement={<span>❤️</span>}
        separator={<span> / </span>}
        activeClasses="text-app-purple dark:text-app-pink"
        containerClasses="flex py-5"
        listClasses="hover:underline mx-2 font-bold"
      />
      {children}
    </>
  );
}
