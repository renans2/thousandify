export const revalidate = 86400;

import ListScript from "@/components/list-script";
import Trend from "@/components/ui/Trends";
import { createClient } from "@/lib/supabase/server";
import { ArtistDailyStat } from "@/types/ArtistTypes";
import Script from "next/script";
import { IoSearch } from "react-icons/io5";

export default async function Home() {
  const supabase = await createClient();
  const today = new Date().toISOString().split("T")[0];
  const { data: _data } = await supabase
    .from("artist_daily_stat")
    .select("*, artist(*)")
    .eq("date", today)
    .order("position", { ascending: true });

  const { data: _data2, error } = await supabase
    .from("update_log")
    .select("*")
    .eq("date", today)
    .single();

  const data: ArtistDailyStat[] = _data ?? [];

  return (
    <>
      <ListScript />
      <Script src="/sort-table.js" strategy="afterInteractive" />
      <div id="data" className="max-w-250 mx-auto text-xs md:text-base">
        <div className="px-4 md:px-8 flex gap-2 md:gap-0 flex-col items-center md:flex-row md:justify-between">
          <p className="font-medium text-base text-heading">
            Last update: {today}, {_data2.time.slice(0, 5)} UTC
          </p>
          <div className="text-base w-full md:w-fit relative flex items-center">
            <input
              className="search w-full border-2 border-input text-input placeholder-input/50 py-1 pl-10 rounded-full focus:outline-3 outline-border"
              type="text"
              name=""
              placeholder="Filter artist"
              id="teste"
            />
            <IoSearch className="text-input absolute left-2.25" size={24} />
          </div>
        </div>
        <div className="overflow-x-auto px-1 md:px-8">
          <table className="sortable w-full mt-5">
            <thead className="bg-background z-1 cursor-pointer">
              <tr className="border-b-2 border-border text-table-data">
                <th className="hover:bg-heading/10 text-center py-2 px-2 font-extrabold">
                  #
                </th>
                <th className="hover:bg-heading/10 text-center py-2 px-2 font-extrabold">
                  Trend
                </th>
                <th className="hover:bg-heading/10 text-left py-1 px-2 font-extrabold">
                  Artist
                </th>
                <th className="hover:bg-heading/10 text-right py-1 px-2 font-extrabold">
                  Listeners
                </th>
                <th className="hover:bg-heading/10 text-left py-1 px-2 font-extrabold">
                  Offset
                </th>
              </tr>
            </thead>
            <tbody className="list">
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
                    className="hover:font-extrabold transition-transform border-b border-border text-table-data"
                  >
                    <td className="text-center py-1">{position}</td>
                    <td className="w-full block mx-auto py-1">
                      <Trend positionOffset={position_offset} />
                    </td>
                    <td className="artist py-1 px-2">
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
                    <td className="text-right py-1 px-2">
                      {monthly_listeners.toLocaleString("en-US")}
                    </td>
                    <td className="py-1 px-2">
                      <span
                        className={`py-1 px-2 text-xs rounded-4xl ${monthly_listeners_daily_offset > 0 ? "bg-tag-bg-green text-tag-text-green" : "bg-tag-bg-red text-tag-text-red"}`}
                      >
                        {monthly_listeners_daily_offset > 0 && <>+</>}
                        {monthly_listeners_daily_offset.toLocaleString("en-US")}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
