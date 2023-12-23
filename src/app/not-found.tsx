import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אלומה | 404",
};

export default function NotFound() {
  return (
    <div className="w-full sm:px-16 md:px-0 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-md md:text-3xl lg:text-5xl font-bold text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          אני מצטערת, לא מצאתי את מה שחיפשת
        </p>
        <Link
          href=".."
          className="flex items-center space-x-2 bg-app-pink hover:bg-app-blue text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>את תמיד יכולה לחזור אחורה</span>
        </Link>
      </div>
    </div>
  );
}
