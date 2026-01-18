"use client";

import Link from "next/link";
import { ImCross } from "react-icons/im";

export default function Warning() {
  return (
    <div className="bg-green-surface text-white flex justify-center items-center py-1 relative">
      <p>
        ⚠️ This is not an official Spotify website, click{" "}
        <Link href="/about" className="underline">
          here
        </Link>{" "}
        to know more ⚠️
      </p>
      <button
        onClick={() => console.log("123")}
        className="absolute right-4 cursor-pointer hover:bg-green-surface-dark rounded-4xl p-1"
      >
        <ImCross />
      </button>
    </div>
  );
}
