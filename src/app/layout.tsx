import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="he" dir="rtl" className="antialiased">
      <body
        className={`min-h-screen w-screen bg-white dark:bg-black ${inter.className}`}
      >
        <main className="px-8 md:px-24 py-6">{children}</main>
        <footer className="fixed bottom-0 w-full">
          <div className="h-12 w-full bg-gradient-to-t to-transparent from-[rgba(170,184,200,0.6)] dark:from-[rgba(170,184,200,0.2)]" />
        </footer>
      </body>
    </html>
  );
}
