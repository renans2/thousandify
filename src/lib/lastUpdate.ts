import { supabase } from "./supabase";

// the daily job doesn't run at midnight UTC, so "today" may have no data yet:
// always use the most recent update instead
export async function getLastUpdate() {
  const { data, error } = await supabase
    .from("update_logs")
    .select("date")
    .order("date", { ascending: false })
    .order("time", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data as { date: string } | null;
}

// the update before the given date, to compare against (null on the first day)
export async function getPreviousUpdate(date: string) {
  const { data, error } = await supabase
    .from("update_logs")
    .select("date")
    .lt("date", date)
    .order("date", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data as { date: string } | null;
}
