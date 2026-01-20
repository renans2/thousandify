import { DATA } from "@/constants/data";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="max-w-250 mx-auto">
      <div className="flex justify-end items-center">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <input
              className="border-2 border-input-border placeholder-[rgba(0,0,0,0.4)] py-1 pl-10 rounded-lg focus:outline-3 outline-gray-400"
              type="text"
              name=""
              placeholder="Filter artist"
              id="artist"
            />
            <IoSearch
              className="absolute left-2.25"
              size={24}
              color="#666666"
            />
          </div>
        </div>
      </div>
      <table className="w-full mt-5">
        <thead className="sticky top-0 bg-background-light">
          <tr className="border-b-2 border-table-border">
            <th className="text-left py-2 px-2 font-extrabold">#</th>
            <th className="text-left py-1 px-2 font-extrabold">Artist Name</th>
            <th className="text-left py-1 px-2 font-extrabold">
              Monthly Listeners
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DATA.map((artist) => (
            <tr
              key={artist.spotify_id}
              className="hover:scale-102 transition-transform border-b border-table-border text-table-data"
            >
              <td className="text-left py-1 px-2">{artist.position}</td>
              <td className=" py-1 px-2">
                <a
                  href={`https://open.spotify.com/artist/${artist.spotify_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${artist.artist_name}'s Spotify profile`}
                  className="hover:underline"
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
