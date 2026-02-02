"use client";

import { cn } from "@/lib/utils";
import { Carousel } from "flowbite-react";

export function ImageGallery({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      slide={false}
      className="h-56 max-w-lg sm:h-64 xl:h-80 2xl:h-96"
      theme={{
        item: {
          base: "relative left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
          wrapper: {
            off: "w-full shrink-0 transform cursor-default snap-center",
            on: "w-full shrink-0 transform cursor-grab snap-center",
          },
        },
        scrollContainer: {
          base: cn(
            "rounded-t-lg sm:ltr:rounded-r-none sm:ltr:rounded-l-lg sm:rtl:rounded-l-none sm:rtl:rounded-r-lg",
            "flex h-full",
            "snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
          ),
          snap: "snap-x",
        },
      }}
    >
      {children}
    </Carousel>
  );
}
