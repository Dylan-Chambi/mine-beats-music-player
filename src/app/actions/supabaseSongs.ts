import { createClient } from "@/utils/supabase/server";

export const getLikedSongs = async (): Promise<string[]> => {
  const supabase = createClient();

  const userId = (await supabase.auth.getUser()).data.user?.id;

  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from("likes")
    .select("song_id")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  if (!data) {
    return [];
  }

  return data.map((like) => like.song_id);
};
