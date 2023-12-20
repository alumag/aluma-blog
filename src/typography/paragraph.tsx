import { Noto_Serif_Hebrew, Rubik } from "next/font/google";

const rubik = Rubik({
  // weight: "400",
  subsets: ["hebrew"],
  // style: ["normal", "italic"],
});

export function Paragraph({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`text-base text-black dark:text-white ${rubik.className} ${className}`}
    >
      {children}
    </p>
  );
}
