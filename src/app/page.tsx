import ListScript from "@/components/list-script";
import Trend from "@/components/ui/Trends";
import { createClient } from "@/lib/supabase/server";
import { ArtistDailyStat } from "@/types/ArtistTypes";
import Script from "next/script";
import { IoSearch } from "react-icons/io5";

export default async function Home() {
  const supabase = await createClient();
  // const today = new Date().toISOString().split("T")[0];
  const { data: _data, error } = await supabase
    .from("artist_daily_stat")
    .select("*, artist(*)")
    .eq("date", "2026-01-31")
    .order("position", { ascending: true });
  const data: ArtistDailyStat[] = _data ?? [];
  // console.log(data);

  return (
    <>
      <ListScript />
      <Script src="/sort-table.js" strategy="afterInteractive" />
      <div
        id="data"
        className="max-w-250 mx-auto overflow-x-auto text-xs md:text-base"
      >
        <div className="flex justify-end items-center">
          <div className="w-full md:w-fit relative flex items-center">
            <input
              className="search w-full border-2 border-border placeholder-border/50 py-1 pl-10 rounded-lg focus:outline-3 outline-border"
              type="text"
              name=""
              placeholder="Filter artist"
              id="teste"
            />
            <IoSearch className="absolute left-2.25 text-border" size={24} />
          </div>
        </div>
        <table className="sortable w-full mt-5">
          <thead className="sticky top-0 bg-background z-1 cursor-pointer">
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
                Monthly Listeners
              </th>
              <th className="hover:bg-heading/10 text-left py-1 px-2 font-extrabold">
                Daily Offset
              </th>
              {/* <th className="text-right py-1 px-2 font-extrabold">
                Peak Position
              </th>
              <th className="text-right py-1 px-2 font-extrabold">
                Peak Listeners
              </th> */}
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
                  {/* <td className="text-right py-1 px-2">
                    {artist.peak_position}
                  </td>
                  <td className="text-right py-1 px-2">
                    {artist.peak_monthly_listeners.toLocaleString("en-US")}
                  </td> */}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
