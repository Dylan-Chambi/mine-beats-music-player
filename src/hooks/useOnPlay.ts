import { Track } from "@/types/types";
import usePlayer from "./usePlayer";

export default function useOnPlay(songs: Track[]) {
  const player = usePlayer();

  const onPlay = async (id: string) => {
    player.setId(id);
    player.setIds(songs.map((song) => song.id.toString()));
  };

  return onPlay;
}
