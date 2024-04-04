import { type Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { alefFont, defaultFont, rubikFont } from "@/fonts";
import { getSiteMetadata } from "@/lib/sanity.site-metadata";
import { getClient } from "@/lib/sanity.client";
import { gtmId } from "@/lib/gtm";
import "./globals.css";

const client = getClient();

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteMetadata(client);

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
  const data = await getSiteMetadata(client);

  return (
    <html
      lang={data.language}
      dir={data.dir}
      className={`antialiased ${defaultFont.variable} ${rubikFont.variable} ${alefFont.variable}`}
    >
      <body className="min-h-screen w-screen bg-white dark:bg-black">
        <main className="px-8 py-6 md:px-24">{children}</main>
        <footer className="fixed bottom-0 w-full">
          <div className="h-12 w-full bg-gradient-to-t from-app-purple/60 to-transparent dark:from-app-purple/20" />
        </footer>
      </body>
      <GoogleTagManager gtmId={gtmId} />
      <SpeedInsights />
    </html>
  );
}
