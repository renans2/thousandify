import { useState, type ReactNode } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ICON_PARAMS = {
  size: 28,
  className: "text-heading",
};

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
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 font-bold text-heading">
      {links.map(({ href, label }) => (
        <li key={href} className="text-center">
          <a
            href={href}
            className="text-lg underline decoration-transparent underline-offset-4 hover:decoration-accent transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="max-w-250 w-full mx-auto px-4 py-6 md:py-12 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-4xl font-black md:text-5xl text-heading text-shadow-heading">
              Thousandify
            </h1>
          </a>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-5">
            <nav>{navList}</nav>
            <div className="flex items-center gap-1">{desktopActions}</div>
          </div>

          <button
            className="md:hidden cursor-pointer p-1 -mr-1 rounded-lg hover:bg-background-icon-hover"
            aria-label={menuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuIsOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {menuIsOpen ? (
              <RxCross2 {...ICON_PARAMS} />
            ) : (
              <IoMdMenu {...ICON_PARAMS} />
            )}
          </button>
        </div>
        <p className="mt-2 text-sm md:text-base text-description font-medium">
          Top 1000 Spotify Artists by monthly listeners
        </p>
      </header>

      {/* mobile nav: toggled with `hidden` instead of unmounted, so the static
      theme switch inside it stays in the DOM */}
      <div
        id="mobile-nav"
        hidden={!menuIsOpen}
        className="md:hidden px-4 py-4 mb-6 border-y border-divider"
      >
        <nav>{navList}</nav>
        <div className="mt-3 flex items-center justify-center gap-3">
          {mobileActions}
        </div>
      </div>
    </>
  );
}
