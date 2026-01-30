import {
  TrendDown,
  TrendNew,
  TrendStable,
  TrendUp,
} from "@/components/ui/Trends";
import { createClient } from "@/lib/supabase/server";
import { ArtistDailyStat } from "@/types/ArtistTypes";
import { IoSearch } from "react-icons/io5";

export default async function Home() {
  const supabase = await createClient();
  // const today = new Date().toISOString().split("T")[0];
  const { data: _data, error } = await supabase
    .from("artist_daily_stat")
    .select(
      `
      *,
      artist(*)
    `,
    )
    .eq("date", "2026-01-30")
    .order("position", { ascending: true });
  const data = [..._data!] as ArtistDailyStat[];
  // console.log(data);
  // console.log(error);

  return (
    <div className="max-w-250 mx-auto">
      <div className="flex justify-end items-center">
        {/* <div className="w-full md:w-fit relative flex items-center">
          <input
            className="w-full border-2 border-border placeholder-border/50 py-1 pl-10 rounded-lg focus:outline-3 outline-border"
            type="text"
            name=""
            placeholder="Filter artist"
            id="artist"
          />
          <IoSearch className="absolute left-2.25 text-border" size={24} />
        </div> */}
      </div>
      <table className="w-full mt-5">
        <thead className="sticky top-0 bg-background z-1">
          <tr className="border-b-2 border-border text-table-data">
            <th className="text-left py-2 px-2 font-extrabold">#</th>
            <th className="text-left py-1 px-2 font-extrabold">Artist</th>
            <th className="text-left py-1 px-2 font-extrabold">
              Monthly Listeners
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map(
            ({
              artist,
              position,
              monthly_listeners,
              position_offset,
              monthly_listeners_daily_offset,
            }) => (
              <tr
                key={artist.spotify_id}
                className="hover:scale-102 hover:font-bold transition-transform border-b border-border text-table-data"
              >
                <td className="flex gap-2 items-center text-left py-1 px-2">
                  {position_offset < 0 ? (
                    <TrendUp />
                  ) : position_offset > 0 ? (
                    <TrendDown />
                  ) : position_offset === 0 ? (
                    <TrendStable />
                  ) : (
                    <TrendNew />
                  )}
                  {position}
                </td>
                <td className="py-1 px-2">
                  <a
                    href={`https://open.spotify.com/artist/${artist.spotify_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${artist.name}'s Spotify profile`}
                    className="underline md:no-underline hover:underline"
                  >
                    {artist.name}
                  </a>
                </td>
                <td className="text-left py-1 px-2">
                  {monthly_listeners.toLocaleString("en-US")}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
