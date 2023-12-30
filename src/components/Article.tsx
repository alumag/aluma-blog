export function Article({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`prose max-w-none dark:prose-invert md:prose-lg lg:prose-xl
      prose-headings:underline prose-headings:decoration-app-pink prose-hr:border-app-blue
      rtl:prose-headings:font-alef
      rtl:prose-p:font-rubik rtl:prose-a:text-current
      rtl:prose-blockquote:border-0 rtl:prose-blockquote:font-rubik
      rtl:prose-strong:text-current
       ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
