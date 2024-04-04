"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  className?: string;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  className,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <nav dir="ltr" className={className} aria-label="breadcrumbs">
      <ol className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {index === pathNames.length - 1 ? (
                  <Link href={href} aria-current="location">
                    {link}
                  </Link>
                ) : (
                  <Link href={href}>{link}</Link>
                )}
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default NextBreadcrumb;
