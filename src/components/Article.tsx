export function Article({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`prose dark:prose-invert md:prose-lg lg:prose-xl
      prose-headings:font-alef prose-headings:underline prose-headings:decoration-app-pink
      prose-p:font-rubik
      prose-blockquote:font-rubik prose-blockquote:border-0
       ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
