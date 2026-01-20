import { DATA } from "@/constants/data";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-250 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2">Sort</span>
          <div className="flex items-center gap-1">
            <button
              title="Ascending"
              className="bg-green-surface-dark border-2 border-green-surface p-1 rounded-lg cursor-pointer"
            >
              <FiArrowUpRight size={24} />
            </button>
            <button
              title="Descending"
              className="bg-green-surface p-1 rounded-lg cursor-pointer"
            >
              <FiArrowDownRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="artist" className="mr-2">
            Search artist
          </label>
          <div className="relative flex items-center">
            <input
              className="border-2 border-green-surface py-1 pl-10 rounded-lg focus:outline-3 outline-green-400 text-text-secondary"
              type="text"
              name=""
              id="artist"
            />
            <IoSearch
              className="absolute left-2.25"
              size={24}
              color="#12873D"
            />
          </div>
        </div>
      </div>

      {/* <ul className="flex flex-col gap-2 mt-5">
        {DATA.map((artist) => (
          <li
            key={artist.spotify_id}
            className="duration-300 hover:shadow-[0px_5px_7px_rgba(0,0,0,0.2),0px_0px_20px_1px_rgba(18,135,61,1)] hover:scale-102 items-center gap-4 rounded-xl bg-green-surface px-4 py-2 grid grid-cols-[50px_400px_1fr_50px]"
          >
            <div className="flex items-center justify-center w-full h-full rounded-4xl bg-green-surface-dark aspect-square font-bold">
              {artist.position}
            </div>
            <p className="font-bold">{artist.artist_name}</p>
            <p className="">{artist.monthly_listeners} monthly listeners</p>
            <a
              href={`https://open.spotify.com/artist/${artist.spotify_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-120 transition-transform"
              title={`${artist.artist_name}'s Spotify profile`}
            >
              <FaSpotify size={30} />
            </a>
          </li>
        ))}
      </ul> */}
      <table className="w-full mt-5 rounded-lg">
        <thead className="sticky top-0 bg-green-surface">
          <tr>
            <th className="text-left py-2 px-2">#</th>
            <th className="text-left py-1 px-2">Artist Name</th>
            <th className="text-left py-1 px-2">Monthly Listeners</th>
          </tr>
        </thead>
        <tbody className="">
          {DATA.map((artist) => (
            <tr
              key={artist.spotify_id}
              className="hover:scale-102 transition-transform border-y border-green-500"
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
