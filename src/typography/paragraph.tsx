import { rubikFont } from "@/fonts";

export function Paragraph({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={`text-base text-black dark:text-white ${rubikFont.className} ${className}`}
    >
      {children}
    </p>
  );
}

export function Prose({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`text-base text-black dark:text-white ${rubikFont.className} ${className}`}
    >
      {children}
    </div>
  );
}
