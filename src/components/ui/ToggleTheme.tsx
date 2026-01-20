"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";

export default function ToggleTheme() {
  const {
    data: [isDarkTheme, setIsDarkTheme],
    hydrated,
  } = useLocalStorage<boolean>("IS_DARK_THEME", false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    console.log("isDarkTheme");
  }, [isDarkTheme]);

  return (
    <button
      className="p-3 bg-red-300"
      onClick={() => {
        console.log("hi");
        setIsDarkTheme((prev) => !prev);
      }}
    >
      Toggle theme
    </button>
  );
}
