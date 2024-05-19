"use client";

import { FaRegSquarePlus } from "react-icons/fa6";
import { RiPlayList2Line } from "react-icons/ri";

interface PlayListProps {}

export default function PlayList({}: PlayListProps) {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
        <RiPlayList2Line className="text-onBackgroundSidebar-muted" size={20} />
          <p className="text-onBackgroundSidebar-muted font-medium text-xs">Playlist</p>
        </div>
        <FaRegSquarePlus
          onClick={onClick}
          size={22}
          className="text-primary cursor-pointer hover:text-secondary transition"
        />
      </div>
    </div>
  );
}
