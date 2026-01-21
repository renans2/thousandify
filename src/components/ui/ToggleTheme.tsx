"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { IoIosMoon } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

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
      className="p-1 cursor-pointer hover:bg-gray-300 rounded-lg"
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {isDarkTheme ? (
        <MdLightMode size={24} color="#353535" />
      ) : (
        <IoIosMoon size={24} color="#353535" />
      )}
    </button>
  );
}
