import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-250 mx-auto py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-5xl text-shadow-h1">Thousandify</h1>
        <nav>
          <ul className="flex items-center gap-6 font-bold">
            <li>
              <Link href="/about" className="text-shadow-regular text-xl">
                About
              </Link>
            </li>
            <li className="text-shadow-regular text-xl">History</li>
          </ul>
        </nav>
      </div>
      <h3 className="font-light mt-2">
        Spotify Artists Ranking by monthly listeners (updated daily)
      </h3>
    </header>
  );
}
