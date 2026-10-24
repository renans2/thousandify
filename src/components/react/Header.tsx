import { useState, type ReactNode } from "react";
import Icon from "./Icon";

type Props = {
  links: { href: string; label: string }[];
  // static HTML passed from Astro named slots (theme switch + GitHub link);
  // optional because astro check doesn't map slots to props
  desktopActions?: ReactNode;
  mobileActions?: ReactNode;
};

export default function Header({ links, desktopActions, mobileActions }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navList = (
    <ul className="space-y-2 font-bold text-heading">
      {links.map(({ href, label }) => (
        <li key={href} className="text-center md:text-left">
          <a
            href={href}
            className="text-xl underline md:no-underline md:hover:underline"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="max-w-250 mx-auto px-4 pt-12 pb-6 md:pt-16 md:pb-12 md:px-8">
        <div className="flex items-center justify-between relative">
          <a href="/">
            <h1 className="text-4xl font-black md:text-5xl text-heading text-shadow-heading">
              Thousandify
            </h1>
          </a>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-2">
            <nav>{navList}</nav>
            <span className="text-heading text-3xl">|</span>
            <div className="flex items-center gap-1">{desktopActions}</div>
          </div>

          <button
            className="md:hidden cursor-pointer"
            aria-label={menuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuIsOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            <Icon
              name={menuIsOpen ? "close" : "menu"}
              size={32}
              className="text-heading"
            />
          </button>
        </div>
        <h3 className="hidden md:block mt-2 text-description font-medium">
          Top 1000 Spotify Artists by monthly listeners
        </h3>
      </header>

      {/* mobile nav: toggled with `hidden` instead of unmounted, so the static
      theme switch inside it stays in the DOM */}
      <div
        id="mobile-nav"
        hidden={!menuIsOpen}
        className="px-4 md:hidden py-2 mb-6 bg-background inset-x-0 border-y-2 border-border"
      >
        <nav>{navList}</nav>
        <div className="mt-4 flex items-center justify-center gap-4">
          {mobileActions}
        </div>
      </div>
    </>
  );
}
