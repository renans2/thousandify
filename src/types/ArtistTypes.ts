export type Artist = {
  spotify_id: string;
  name: string;
  peak_position: number;
  peak_monthly_listeners: number;
};

export type ArtistDailyStat = {
  artist: Artist;
  position: number;
  monthly_listeners: number;
  position_offset: number;
  monthly_listeners_daily_offset: number;
};
