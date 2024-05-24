"use client";

import { DeezerTracks } from "@/types/types";
import SongItem from "./SongItem";

interface PageContentProps {
  songs: DeezerTracks;
}

export default function PageContent({ songs }: PageContentProps) {
  if (!songs || !songs.data || songs.data.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        <p>No songs available</p>
      </div>
    );
  }
  return (
    <>
      <h2 className="mt-4 ml-2 text-onBackground-muted">Discover new songs</h2>
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-8
          gap-4
          mt-4
        "
      >
        {songs.data.map((song) => (
          <SongItem key={song.id} onClick={() => {}} data={song} />
        ))}
      </div>
    </>
  );
}
