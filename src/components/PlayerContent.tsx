"use client";

import { Track } from "@/types/types";
import { MediaItem } from "@/components/MediaItem";
import { LikeButton } from "@/components/LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "@/components/Slider";
import usePlayer from "@/hooks/usePlayer";
import { useEffect, useState } from "react";
import useSound from "use-sound";

interface PlayerContentProps {
  song: Track;
}

export default function PlayerContent({ song }: PlayerContentProps) {
  const player = usePlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = player.volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(song.preview, {
    volume: player.volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: "mp3",
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.stop();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (player.volume === 0) {
      player.setVolume(player.prevVolume);
      player.volume = player.prevVolume;
    } else {
      player.setVolume(0);
      player.volume = 0;
    }
  };

  return (
    <div
      className="
        grid
        grid-cols-[1fr,auto]
        md:grid-cols-3
        h-full
      "
    >
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} onClick={() => {}} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div
        className="
        flex
        justify-end
        items-center
        w-full
        max-w-[722px]
        pl-4
        gap-x-4
        md:justify-center
        md:gap-x-6
      "
      >
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="
            hidden
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
            md:block
          "
        />
        <div
          onClick={handlePlay}
          className={`h-10
            w-10
            flex
            items-center
            justify-center
            rounded-full
            p-1
            cursor-pointer
            ${isPlaying ? "bg-white" : "bg-primary"}
          `}
        >
          <Icon size={30} className={`${isPlaying ? "text-primary" : "text-white"}`} />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="
            hidden
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
            md:block
          "
        />
      </div>

      <div className="flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={24} />
          <Slider
            value={player.volume}
            onChange={(value) => {
              player.setVolume(value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
