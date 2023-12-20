import { Inter, Alef, Rubik } from "next/font/google";

export const alefFont = Alef({ weight: ["400", "700"], subsets: ["hebrew"] });

export const rubikFont = Rubik({ subsets: ["hebrew"] });

export const defaultFont = Inter({ subsets: ["latin"] });
