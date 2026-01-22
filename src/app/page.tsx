import { DATA } from "@/constants/data";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="max-w-250 mx-auto">
      <div className="flex justify-end items-center">
        <div className="w-full md:w-fit relative flex items-center">
          <input
            className="w-full border-2 border-border placeholder-border/50 py-1 pl-10 rounded-lg focus:outline-3 outline-border"
            type="text"
            name=""
            placeholder="Filter artist"
            id="artist"
          />
          <IoSearch className="absolute left-2.25 text-border" size={24} />
        </div>
      </div>
      <table className="w-full mt-5">
        <thead className="sticky top-0 bg-background">
          <tr className="border-b-2 border-border text-table-data">
            <th className="text-left py-2 px-2 font-extrabold">#</th>
            <th className="text-left py-1 px-2 font-extrabold">Artist</th>
            <th className="text-left py-1 px-2 font-extrabold">
              Monthly Listeners
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DATA.map((artist) => (
            <tr
              key={artist.spotify_id}
              className="hover:scale-102 hover:font-bold transition-transform border-b border-border text-table-data"
            >
              <td className="text-left py-1 px-2">{artist.position}</td>
              <td className="py-1 px-2">
                <a
                  href={`https://open.spotify.com/artist/${artist.spotify_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${artist.artist_name}'s Spotify profile`}
                  className="underline md:no-underline hover:underline"
                >
                  {artist.artist_name}
                </a>
              </td>
              <td className="text-left py-1 px-2">
                {artist.monthly_listeners}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
