"use server";

import NextBreadcrumb from "@/components/NextBreadcrumb";
import { getLocaleCookie } from "@/core/getLocaleCookie";
import { getClient } from "@/lib/sanity.client";
import { getSiteMetadata } from "@/lib/sanity.site-metadata";
import type { Metadata } from "next";

const client = getClient();

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteMetadata(client);
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
      locale: data.locale,
      siteName: data.siteName,
      images: "/images/20200321_172438.jpg",
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
        separator={<span aria-hidden="true"> / </span>}
        activeClasses="text-app-purple dark:text-app-pink"
        containerClasses="flex py-5"
        listClasses="hover:underline mx-2 font-bold"
      />
      {children}
    </>
  );
}
