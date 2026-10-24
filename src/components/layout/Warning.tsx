"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import { ImCross } from "react-icons/im";

export default function Warning() {
  const {
    data: [showWarning, setShowWarning],
    hydrated,
  } = useLocalStorage<boolean>("SHOW_WARNING", true);

  if (!showWarning || !hydrated) return;

  return (
    <div className="absolute w-full pr-6 text-xs md:text-base bg-warning-bg text-warning-text flex justify-center items-center py-1">
      <p className="text-center">
        ⚠️ This is not an official Spotify website, click{" "}
        <Link href="/about" className="underline">
          here
        </Link>{" "}
        to know more ⚠️
      </p>
      <button
        onClick={() => setShowWarning(false)}
        aria-label="Dismiss warning"
        className="absolute right-1 cursor-pointer rounded-4xl p-1"
      >
        <ImCross />
      </button>
    </div>
  );
}
