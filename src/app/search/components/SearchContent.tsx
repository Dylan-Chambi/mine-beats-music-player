"use client";

import { LikeButton } from "@/components/LikeButton";
import { MediaItem } from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { DeezerTracks, Track } from "@/types/types";

interface SearchContentProps {
  deezerTracks: DeezerTracks;
}

export const SearchContent = ({ deezerTracks }: SearchContentProps) => {
  const onPlay = useOnPlay(deezerTracks.data);

  if (deezerTracks.data.length === 0) {
    return (
      <div
        className="bg-background rounded-lg w-full overflow-y-auto"
        style={{ height: "calc(100vh - 15rem)" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-white text-lg font-semibold">No tracks found</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {deezerTracks.data.map((track: Track) => (
        <div key={track.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={track} />
          </div>
          <LikeButton songId={track.id} />
        </div>
      ))}
    </div>
  );
};
