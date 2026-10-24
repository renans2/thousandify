"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HiMoon } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";

const THEME_ICON_PARAMS = {
  size: 24,
  className: "text-heading",
};

const subscribe = () => () => {};

export default function ThemeSwitch() {
  // false on the server and during hydration, true after
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return;

  return (
    <button
      className="p-1 cursor-pointer hover:bg-background-icon-hover rounded-lg"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdLightMode {...THEME_ICON_PARAMS} />
      ) : (
        <HiMoon {...THEME_ICON_PARAMS} />
      )}
    </button>
  );
}
