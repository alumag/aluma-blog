import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אלומה | 404",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 md:px-8 lg:px-24">
      <p className="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl">
        404
      </p>
      <p className="text-md mt-4 font-bold text-gray-500 md:text-3xl lg:text-5xl">
        Page Not Found
      </p>
      <p className="mt-4 border-b-2 pb-4 text-center text-gray-500">
        אני מצטערת, לא מצאתי את מה שחיפשת
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
        <span>את תמיד יכולה לחזור אחורה</span>
      </Link>
    </div>
  );
}
