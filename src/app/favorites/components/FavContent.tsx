"use client";

import { LikeButton } from "@/components/LikeButton";
import { MediaItem } from "@/components/MediaItem";
import { useUserClient } from "@/hooks/useUserClient";
import { Track } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Track[];
}

export default function FavContent({ songs }: LikedContentProps) {
  const router = useRouter();

  const { isLoading, user } = useUserClient();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div
        className="bg-background rounded-lg w-full overflow-y-auto"
        style={{ height: "calc(100vh - 15rem)" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-white text-lg font-semibold">No liked songs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((track: Track) => (
        <div key={track.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={track} />
          </div>
          <LikeButton songId={track.id} />
        </div>
      ))}
    </div>
  );
}
