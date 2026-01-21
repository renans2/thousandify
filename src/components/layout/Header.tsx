"use client";

import Link from "next/link";
import ToggleTheme from "../ui/ToggleTheme";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className="max-w-250 mx-auto py-6 md:py-12">
        <div className="flex items-center justify-between relative">
          <h1 className="text-4xl font-black md:text-5xl text-heading text-shadow-heading">
            Thousandify
          </h1>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-6 font-bold text-heading">
                <li>
                  <Link href="/about" className="text-xl hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-xl hover:underline">
                    History
                  </Link>
                </li>
              </ul>
            </nav>
            <ToggleTheme />
          </div>
          {/* - */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {menuIsOpen ? <RxCross2 size={32} /> : <IoMdMenu size={32} />}
          </button>
        </div>
        <h3 className="hidden md:block mt-2 text-description font-medium">
          Spotify Artists Ranking by monthly listeners (updated daily)
        </h3>
      </header>
      {/* mobile nav */}
      {menuIsOpen && (
        <div className="md:hidden py-2 bg-background inset-x-0 border-y-2">
          <nav>
            <ul className="flex flex-col gap-2 font-bold text-heading">
              <li>
                <Link href="/about" className="text-xl hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xl hover:underline">
                  History
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* - */}
    </>
  );
}
