"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export default function useLocalStorage<T>(key: string, defaultData: T) {
  // undefined on the server and during hydration, string | null after
  const saved = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(key),
    () => undefined,
  );
  const hydrated = saved !== undefined;

  const data = useMemo<T>(
    () => (saved ? JSON.parse(saved) : defaultData),
    [saved, defaultData],
  );

  const setData = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      listeners.forEach((listener) => listener());
    },
    [key],
  );

  return {
    data: [data, setData] as const,
    hydrated,
  };
}
