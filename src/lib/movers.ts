import type { ArtistDailyStat } from "../types/ArtistTypes";

const daily = (s: ArtistDailyStat) => s.monthly_listeners_daily_offset ?? 0;
// a negative offset means the artist went up
const offset = (s: ArtistDailyStat) => s.position_offset ?? 0;

// the artists who changed the most since the previous update, `limit` of each
export function topMovers(stats: ArtistDailyStat[], limit: number) {
  return {
    gainers: stats
      .filter((s) => daily(s) > 0)
      .sort((a, b) => daily(b) - daily(a))
      .slice(0, limit),
    losers: stats
      .filter((s) => daily(s) < 0)
      .sort((a, b) => daily(a) - daily(b))
      .slice(0, limit),
    climbers: stats
      .filter((s) => offset(s) < 0)
      .sort((a, b) => offset(a) - offset(b))
      .slice(0, limit),
    fallers: stats
      .filter((s) => offset(s) > 0)
      .sort((a, b) => offset(b) - offset(a))
      .slice(0, limit),
  };
}
