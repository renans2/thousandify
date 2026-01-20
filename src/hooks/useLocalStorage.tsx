"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setData(JSON.parse(saved));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, hydrated]);

  return {
    data: [data, setData] as const,
    hydrated,
  };
}
