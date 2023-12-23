import type { Metadata } from "next";
import { alefFont, defaultFont, rubikFont } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "אלומה",
  description: "פורטפוליו ובלוג של אלומה גלברד",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`antialiased ${defaultFont.variable} ${rubikFont.variable} ${alefFont.variable}`}
    >
      <body className="min-h-screen w-screen bg-white dark:bg-black">
        <main className="px-8 md:px-24 py-6">{children}</main>
        <footer className="fixed bottom-0 w-full">
          <div className="h-12 w-full bg-gradient-to-t to-transparent from-app-blue/60 dark:from-app-blue/20" />
        </footer>
      </body>
    </html>
  );
}
