import { getLocale } from "@/core/getLocale";
import type { Metadata } from "next";
import Link from "next/link";

const heContent = {
  title: "בלוג",
  soon: "בקרוב!",
  message: "העמוד הזה כרגע בבניה, יום אחד הוא יהיה כאן...",
  back: "בינתיים אפשר לחזור אחורה",
};

const enContent = {
  title: "Blog",
  soon: "Coming Soon!",
  message:
    "This page is currently under construction, one day it will be here...",
  back: "You can always go back",
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const content = locale === "he" ? heContent : enContent;

  return {
    title: content.title,
  };
}

export default function Blog() {
  const locale = getLocale();
  const content = locale === "he" ? heContent : enContent;

  return (
    <main className="container px-8 py-6 md:px-24">
      <div className="flex flex-col items-center justify-center px-4 py-8 md:px-8 lg:px-24">
        <svg
          className="h-20 w-20 fill-app-purple sm:h-32 sm:w-32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <g>
            <path
              d="M487.43,70.684H12.57C5.628,70.684,0,76.312,0,83.255V256.19c0,6.942,5.628,12.57,12.57,12.57h84.374v118.273H34.665
		c-6.942,0-12.571,5.629-12.571,12.571v17.142c0,6.941,5.629,12.569,12.571,12.569h149.7c6.942,0,12.569-5.628,12.569-12.569
		v-17.142c0-6.941-5.627-12.571-12.569-12.571h-62.28V268.76h261.118v118.273h-62.28c-6.941,0-12.569,5.629-12.569,12.571v17.142
		c0,6.941,5.628,12.569,12.569,12.569h149.701c6.942,0,12.569-5.628,12.569-12.569v-17.142c0-6.941-5.627-12.571-12.569-12.571
		h-62.28V268.76h79.086c6.942,0,12.57-5.628,12.57-12.57V83.255C500,76.312,494.372,70.684,487.43,70.684z M42.372,243.62h-17.23
		v-53.036l107.727-94.76h69.491L42.372,243.62z M135.373,243.62L295.951,95.825h68.677L204.05,243.62H135.373z M474.859,148.86
		l-107.729,94.76h-69.49L457.629,95.825h17.23V148.86L474.859,148.86z"
            />
          </g>
        </svg>
        <p className="mt-4 text-3xl font-bold text-gray-500 md:text-4xl lg:text-5xl rtl:font-alef">
          {content.soon}
        </p>
        <p className="mt-4 border-b-2 pb-4 text-center text-gray-500 rtl:font-rubik">
          {content.message}
        </p>
        <Link
          href=".."
          className="mt-6 flex items-center space-x-2 rounded bg-app-pink px-4 py-2 text-gray-100 transition duration-150 hover:bg-app-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"></path>
          </svg>
          <span className="rtl:font-rubik">{content.back}</span>
        </Link>
      </div>
    </main>
  );
}
