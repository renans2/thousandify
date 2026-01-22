"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { HiMoon } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";

const THEME_ICON_PARAMS = {
  size: 24,
  className: "text-heading",
};

export default function ToggleTheme() {
  const {
    data: [isDarkTheme, setIsDarkTheme],
  } = useLocalStorage<boolean>("IS_DARK_THEME", false);

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <button
      className="p-1 cursor-pointer hover:bg-background-icon-hover rounded-lg"
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {isDarkTheme ? (
        <MdLightMode {...THEME_ICON_PARAMS} />
      ) : (
        <HiMoon {...THEME_ICON_PARAMS} />
      )}
    </button>
  );
}
