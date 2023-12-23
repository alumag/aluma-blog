export function Article({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`prose dark:prose-invert md:prose-lg lg:prose-xl max-w-none
      rtl:prose-headings:font-alef prose-headings:underline prose-headings:decoration-app-pink
      rtl:prose-p:font-rubik
      rtl:prose-strong:text-current rtl:prose-a:text-current
      rtl:prose-blockquote:font-rubik rtl:prose-blockquote:border-0
      prose-hr:border-app-blue
       ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
