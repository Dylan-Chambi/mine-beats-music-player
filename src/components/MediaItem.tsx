import { Track } from "@/types/types";
import Image from "next/image";

interface MediaItemProps {
  data: Track;
  onClick: (id: string) => void;
}

export const MediaItem = ({ data, onClick }: MediaItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id.toString());
    }

    //TODO: Default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-backgroundSidebar
        w-full
        p-2
        rounded-md
      "
    >
      <div
        className="
          relative
          rounded-md
          min-h-[48px]
          min-w-[48px]
          overflow-hidden
        "
      >
        <Image src={data.album.cover_medium} alt={data.title} sizes="48px" fill />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="font-semibold text-[0.7rem] line-clamp-1 w-full">{data.title}</p>
        <p className="text-neutral-400 pb-4 w-full line-clamp-1 text-[0.6rem]">
          {data.artist.name}
        </p>
      </div>
    </div>
  );
};
