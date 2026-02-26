"use client";

import Link from "next/link";
import ThemeSwitch from "../ui/ThemeSwitch";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { useState } from "react";
import { usePathname } from "next/navigation";

const ICON_PARAMS = {
  size: 32,
  className: "text-heading",
};

const GITHUB_BUTTON = (
  <a
    href="https://github.com/renans2/thousandify"
    target="_blank"
    className="p-1 cursor-pointer hover:bg-background-icon-hover rounded-lg"
  >
    <FaGithub size={24} className="text-heading" />
  </a>
);

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const path = usePathname();

  const navList = (
    <ul className="space-y-2 font-bold text-heading">
      {path !== "/" && (
        <li className="text-center md:text-left">
          <Link
            href="/"
            onClick={() => setMenuIsOpen(false)}
            className="text-xl underline md:no-underline md:hover:underline"
          >
            Home
          </Link>
        </li>
      )}
      {path !== "/about" && (
        <li className="text-center md:text-left">
          <Link
            href="/about"
            onClick={() => setMenuIsOpen(false)}
            className="text-xl underline md:no-underline md:hover:underline"
          >
            About
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <>
      <header className="max-w-250 mx-auto px-4 py-6 md:py-12 md:px-8">
        <div className="flex items-center justify-between relative">
          <Link href="/">
            <h1 className="text-4xl font-black md:text-5xl text-heading text-shadow-heading">
              Thousandify
            </h1>
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-2">
            <nav>{navList}</nav>
            <span className="text-heading text-3xl">|</span>
            <div className="flex items-center gap-1">
              <ThemeSwitch />
              {GITHUB_BUTTON}
            </div>
          </div>
          {/* - */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {menuIsOpen ? (
              <RxCross2 {...ICON_PARAMS} />
            ) : (
              <IoMdMenu {...ICON_PARAMS} />
            )}
          </button>
        </div>
        <h3 className="hidden md:block mt-2 text-description font-medium">
          Top 1000 Spotify Artists by monthly listeners
        </h3>
      </header>

      {/* mobile nav */}
      {menuIsOpen && (
        <div className="px-4 md:hidden py-2 mb-6 bg-background inset-x-0 border-y-2 border-border">
          <nav>{navList}</nav>
          <div className="mt-4 flex items-center justify-center gap-4">
            <ThemeSwitch />
            {GITHUB_BUTTON}
          </div>
        </div>
      )}
      {/* - */}
    </>
  );
}
