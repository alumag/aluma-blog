import { Alef } from "next/font/google";

const alef = Alef({ weight: ["400", "700"], subsets: ["hebrew"] });

export function Header1({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h1
      className={`text-5xl font-extrabold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h1>
  );
}

export function Header2({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={`text-4xl font-bold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Header3({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h3
      className={`text-3xl font-bold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h3>
  );
}

export function Header4({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h4
      className={`text-2xl font-bold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h4>
  );
}

export function Header5({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h5
      className={`text-xl font-bold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h5>
  );
}

export function Header6({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h6
      className={`text-lg font-bold text-black dark:text-white ${alef.className} ${className}`}
    >
      {children}
    </h6>
  );
}
