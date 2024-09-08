import { Track } from "@/types/types";
import { getLikedSongs } from "../actions/supabaseSongs";
import { getSongById } from "../actions/deezerSongs";
import Header from "@/components/Header";
import Image from "next/image";
import FavContent from "./components/FavContent";
import { redirect } from "next/navigation";
import { useUserServer } from "@/hooks/useUserServer";

export const revalidate = 0;

export default async function Favorites() {
  const songsIds = await getLikedSongs();

  const { user } = await useUserServer();

  if (!user) {
    redirect("/");
  }

  const songs: Track[] = (
    await Promise.all(
      songsIds.map(async (id) => {
        const song = await getSongById(id);
        return song;
      }),
    )
  ).filter((song) => song !== null);

  return (
    <main className="h-full flex-1 overflow-y-auto">
      <div className="bg-background h-full overflow-hidden overflow-y-auto">
        <Header className="from-bg-neutral-900">
          <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="text-white text-[1.2em] font-bold">Favorite Tracks</h1>
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative aspect-square h-24 w-24 lg:h-40 lg:w-40">
                <Image
                  fill
                  priority
                  sizes="100%"
                  alt="Playlist"
                  className="object-cover"
                  src={songs[0]?.album.cover_xl || "/images/song_placeholder.png"}
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-[0.8em]">PLAYLIST</p>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Liked Songs
                </h1>
                <p className="text-[1.0em] font-light text-neutral-400">{songs.length} songs</p>
              </div>
            </div>
          </div>
        </Header>
        <FavContent songs={songs} />
      </div>
    </main>
  );
}
