"use server";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "craft",
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextBreadcrumb
        homeElement={<span>❤️</span>}
        separator={<span> / </span>}
        activeClasses="text-app-purple dark:text-app-pink"
        containerClasses="flex py-5"
        listClasses="hover:underline mx-2 font-bold"
      />
      {children}
    </>
  );
}
