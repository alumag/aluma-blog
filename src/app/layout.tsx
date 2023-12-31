import { type Metadata } from "next";
import { alefFont, defaultFont, rubikFont } from "@/fonts";
import { getSiteMetadata } from "@/lib/sanity.site-metadata";
import { getClient } from "@/lib/sanity.client";
import "./globals.css";

const client = getClient();

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteMetadata(client);

  return {
    title: {
      template: `%s / ${data.siteName}`,
      default: data.siteName, // a default is required when creating a template
    },
    description: data.description,
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
    </html>
  );
}
