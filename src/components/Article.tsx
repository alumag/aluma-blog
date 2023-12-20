export function Article({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={`prose dark:prose-invert md:prose-lg lg:prose-xl
      prose-headings:underline prose-headings:decoration-[rgb(223,209,224)]
      prose-blockquote:border-0
       ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
