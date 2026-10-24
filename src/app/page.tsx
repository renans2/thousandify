export const revalidate = 3600;

import TableScripts from "@/components/table-scripts";
import Trend from "@/components/ui/Trends";
import { createClient } from "@/lib/supabase/server";
import { ArtistDailyStat } from "@/types/ArtistTypes";
import { IoSearch } from "react-icons/io5";

export default async function Home() {
  const supabase = await createClient();

  // the daily job doesn't run at midnight UTC, so "today" may have no data yet:
  // always show the most recent update instead
  const { data: lastUpdate, error: updateError } = await supabase
    .from("update_logs")
    .select("date, time")
    .order("date", { ascending: false })
    .order("time", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (updateError) throw updateError;

  if (!lastUpdate)
    return (
      <p className="text-center text-heading font-medium pb-20">
        No data available yet, check back later.
      </p>
    );

  const { data: _data, error } = await supabase
    .from("artists_daily_stats")
    .select("*, artist(*)")
    .eq("date", lastUpdate.date)
    .order("position", { ascending: true });
  if (error) throw error;

  const data: ArtistDailyStat[] = _data ?? [];

  return (
    <>
      <TableScripts />
      <div id="data" className="max-w-250 mx-auto text-xs md:text-base">
        <div className="px-2 md:px-8 flex gap-2 md:gap-0 flex-col items-center md:flex-row md:justify-between">
          <p className="font-medium text-base text-heading">
            Last update: {lastUpdate.date}, {lastUpdate.time.slice(0, 5)} UTC
          </p>
          <div className="text-base w-full md:w-fit relative flex items-center">
            <input
              className="search w-full border-2 border-input text-input placeholder-input/50 py-1 pl-10 rounded-lg md:rounded-full focus:outline-3 outline-border"
              type="text"
              placeholder="Filter artist"
              aria-label="Filter artist"
            />
            <IoSearch className="text-input absolute left-2.25" size={24} />
          </div>
        </div>
        <div className="overflow-x-auto pb-20 md:px-8">
          <table id="ranking" className="w-full mt-5">
            <thead className="bg-background z-1 cursor-pointer">
              <tr className="border-b-2 border-border text-table-data">
                <th className="hover:bg-heading/10 text-center py-2 px-2 font-extrabold">
                  #
                </th>
                <th className="hover:bg-heading/10 text-center py-2 px-0 font-extrabold">
                  Trend
                </th>
                <th className="hover:bg-heading/10 text-left py-1 pl-2 font-extrabold">
                  Artist
                </th>
                <th className="hover:bg-heading/10 text-right py-1 px-2 font-extrabold">
                  Listeners
                </th>
                <th className="hover:bg-heading/10 text-left py-1 px-2 font-extrabold">
                  Daily
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
                    <td className="artist py-1 pl-2">
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
                      {monthly_listeners_daily_offset !== null && (
                        <span
                          className={`py-1 px-2 text-xs rounded-4xl ${
                            monthly_listeners_daily_offset > 0
                              ? "bg-tag-bg-green text-tag-text-green"
                              : monthly_listeners_daily_offset < 0
                                ? "bg-tag-bg-red text-tag-text-red"
                                : "bg-tag-bg-blue text-tag-text-blue"
                          }`}
                        >
                          {monthly_listeners_daily_offset > 0 && <>+</>}
                          {monthly_listeners_daily_offset.toLocaleString(
                            "en-US",
                          )}
                        </span>
                      )}
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
