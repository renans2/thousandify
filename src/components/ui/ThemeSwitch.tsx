"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";

const THEME_ICON_PARAMS = {
  size: 24,
  className: "text-heading",
};

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <button
      className="p-1 cursor-pointer hover:bg-background-icon-hover rounded-lg"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      {resolvedTheme === "dark" ? (
        <MdLightMode {...THEME_ICON_PARAMS} />
      ) : (
        <HiMoon {...THEME_ICON_PARAMS} />
      )}
    </button>
  );
}
