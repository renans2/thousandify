import { useState, type ReactNode } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ICON_PARAMS = {
  size: 22,
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
    <ul className="flex flex-col md:flex-row gap-1">
      {links.map(({ href, label }) => (
        <li key={href} className="text-center">
          <a
            href={href}
            className="block px-3.5 py-1.5 rounded-full text-base md:text-sm font-semibold text-description hover:text-heading hover:bg-background-icon-hover transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="max-w-250 w-full mx-auto px-4 pt-4 pb-3.5 md:pt-8 md:pb-5 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="font-display font-extrabold tracking-tight text-[1.75rem] leading-tight md:text-5xl title-gradient">
              Thousandify
            </h1>
          </a>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-divider bg-background/60 backdrop-blur-md shadow-[0_1px_2px_rgb(0_0_0/0.06)]">
            <nav>{navList}</nav>
            <span className="w-px h-5 mx-1 bg-divider" aria-hidden="true" />
            <div className="flex items-center">{desktopActions}</div>
          </div>

          <button
            className="md:hidden cursor-pointer p-2 rounded-full border border-divider bg-background/60 backdrop-blur-md hover:bg-background-icon-hover transition-colors"
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
          <span className="text-gradient font-bold">Top 1000</span>{" "}
          <span className="text-heading">Spotify artists</span> by monthly
          listeners
        </p>
      </header>

      {/* mobile nav: toggled with `hidden` instead of unmounted, so the static
      theme switch inside it stays in the DOM */}
      <div
        id="mobile-nav"
        hidden={!menuIsOpen}
        className="md:hidden px-4 py-4 mb-4 border-y border-divider"
      >
        <nav>{navList}</nav>
        <div className="mt-3 flex items-center justify-center gap-2">
          {mobileActions}
        </div>
      </div>
    </>
  );
}
