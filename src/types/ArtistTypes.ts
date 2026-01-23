import { Trend } from "./Trend";

export type Artist = {
  spotify_id: string;
  name: string;
};

export type ArtistDailyStat = {
  artist: Artist;
  position: number;
  monthly_listeners: number;
  trend: Trend | null;
};
