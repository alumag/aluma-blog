"use client";

import "@github/relative-time-element";
import { Suspense, useEffect, useState } from "react";

function useHydration() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}

export function LocalTime({ date }: { date: Date | string | number }) {
  const hydrated = useHydration();
  return (
    <Suspense key={hydrated ? "local" : "utc"}>
      <relative-time datetime={new Date(date).toISOString()} prefix="">
        {new Date(date).toLocaleTimeString()}
        {hydrated ? "" : " (UTC)"}
      </relative-time>
    </Suspense>
  );
}
