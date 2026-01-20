import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-250 mx-auto py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-black text-5xl text-heading text-shadow-heading">
          Thousandify
        </h1>
        <nav>
          <ul className="flex items-center gap-6 font-bold text-heading">
            <li>
              <Link
                href="/about"
                className="text-shadow-regular text-xl hover:underline"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h3 className="mt-2 text-description font-medium">
        Spotify Artists Ranking by monthly listeners (updated daily)
      </h3>
    </header>
  );
}
