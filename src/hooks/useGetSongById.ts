import { Track } from "@/types/types";
import { useEffect, useMemo, useState } from "react";
import { getSongById } from "@/app/actions/deezerSongs";

export default function useGetSongById(id?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Track | null>(null);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    const fetchSong = async () => {
      const track = await getSongById(id);

      if (track) {
        setSong(track);
      }

      setIsLoading(false);
    };

    fetchSong();
  }, [id]);

  return useMemo(() => ({ isLoading, song }), [isLoading, song]);
}
