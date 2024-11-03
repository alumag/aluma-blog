import { type Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { alefFont, defaultFont, rubikFont } from "@/fonts";
import { gtmId } from "@/lib/gtm";
import "./globals.css";
import { client } from "@/sanity/lib/client";
import { getSiteMetadataQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getLocale } from "@/core/getLocale";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(getSiteMetadataQuery, {
    language: getLocale(),
  });
  if (data === null) {
    notFound();
  }

  return {
    metadataBase:
      data.language === "he"
        ? new URL("https://he.alumagelbard.com")
        : new URL("https://alumagelbard.com"),
    title: {
      template: `${data.title} / %s`,
      default: data.title, // a default is required when creating a template
    },
    description: data.description,
    openGraph: {
      type: "website",
      locale: data.locale,
      countryName: "Israel",
      siteName: data.siteName,
      title: data.siteName,
      description: data.description,
      images: "/images/20230521_110544.jpg",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await client.fetch(getSiteMetadataQuery, {
    language: getLocale(),
  });
  if (data === null) {
    notFound();
  }

  return (
    <html
      lang={data.language}
      dir={data.dir}
      className={`antialiased ${defaultFont.variable} ${rubikFont.variable} ${alefFont.variable}`}
    >
      <body className="min-w-screen min-h-screen bg-white dark:bg-black">
        {children}
        <SpeedInsights />
      </body>
      <GoogleTagManager gtmId={gtmId} />
    </html>
  );
}
