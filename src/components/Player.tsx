"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "@/components/PlayerContent";

export default function Player() {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  if (!song) {
    return null;
  }

  return (
    <>
      <div className="player-container">
        <PlayerContent song={song} />
      </div>
      <style jsx>{`
        .player-container {
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 0.5rem;
          height: 80px;
          padding-left: 1rem;
          padding-right: 1rem;
          background: linear-gradient(to right, #170241, #28172e, #170241);
          background-size: 200% 200%;
          animation: gradient-shift 20s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
