import { Inter, Alef, Rubik } from "next/font/google";

export const alefFont = Alef({
  weight: ["400", "700"],
  subsets: ["hebrew"],
  variable: "--font-alef",
});

export const rubikFont = Rubik({
  subsets: ["hebrew"],
  variable: "--font-rubik",
});

export const defaultFont = Inter({
  subsets: ["latin"],
  variable: "--font-default",
});
