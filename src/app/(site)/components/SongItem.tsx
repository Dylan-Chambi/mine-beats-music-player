"use client";

import PlayButton from "@/components/PlayButton";
import { Track } from "@/types/types";
import Image from "next/image";

interface SongItemProps {
  data: Track;
  onClick: (id: string) => void;
}

export default function SongItem({ data, onClick }: SongItemProps) {
  return (
    <div className="p-0.5 rounded-lg from-secondary to-primary bg-gradient-to-r">
      <div
        onClick={() => onClick(data.id.toString())}
        className="
          relative
          group
          flex 
          flex-col
          items-center
          justify-center
          rounded-lg
          overflow-hidden
          gap-x-4
          bg-backgroundSidebar
          transition p-3
        "
      >
        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
          <Image
            className="object-cover"
            src={data.album.cover_medium}
            alt={data.title}
            fill
            priority
            sizes="200px"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton />
          </div>
          0
        </div>
        <div className="flex flex-col items-start w-full pt-4 gap-y-2">
          <p className="font-semibold text-[0.6rem] truncate w-full">{data.title}</p>
          <p className="text-neutral-400 pb-4 w-full truncate text-[0.6rem]">
            By {data.artist.name}
          </p>
        </div>
      </div>
    </div>
  );
}
