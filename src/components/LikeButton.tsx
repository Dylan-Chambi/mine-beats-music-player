"use client";

import { useUserClient } from "@/hooks/useUserClient";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAuthModal } from "@/app/providers/AuthModalProvider";
import toast from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";
import { MdHeartBroken } from "react-icons/md";

interface LikeButtonProps {
  songId: number;
}

export const LikeButton = ({ songId }: LikeButtonProps) => {
  const authModal = useAuthModal();
  const { supabaseClient, user } = useUserClient();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("likes")
        .select()
        .eq("user_id", user.id)
        .eq("song_id", songId.toString())
        .maybeSingle();
      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModal.openAuthModal();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("likes")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);
      if (error) {
        toast.custom((t) => (
          <div
            className="
              bg-black
              border-2
              border-red-500
              shadow-lg
              shadow-red-500/30
              p-4
              rounded-lg
              transition-all
              duration-300
              ease-in-out
            "
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start space-x-4">
              <div
                className="
                bg-red-500
                p-2 rounded
              "
              >
                <RxCrossCircled className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-[0.9rem] text-red-500 leading-tight">
                  Oops! Something went wrong
                </h3>
                <p className="text-[0.8rem] text-gray-300 leading-snug">
                  An error occurred, please try again later
                </p>
              </div>
            </div>
          </div>
        ));
      } else {
        setIsLiked(false);
        toast.custom((t) => (
          <div
            className="
              bg-black
              border-2
              border-primary
              shadow-lg
              shadow-purple-500/30
              p-4
              rounded-lg
              transition-all
              duration-300
              ease-in-out
            "
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start space-x-4">
              <div className="p-1 rounded">
                <MdHeartBroken className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-[0.9rem] text-secondary leading-tight">You unliked a song</h3>
                <p className="text-[0.8rem] text-gray-300 leading-snug">
                  Song removed from your liked songs
                </p>
              </div>
            </div>
          </div>
        ));
      }
    } else {
      const { error } = await supabaseClient
        .from("likes")
        .insert({ user_id: user.id, song_id: songId.toString() });
      if (error) {
        toast.custom((t) => (
          <div
            className="
              bg-black
              border-2
              border-red-500
              shadow-lg
              shadow-red-500/30
              p-4
              rounded-lg
              transition-all
              duration-300
              ease-in-out
            "
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start space-x-4">
              <div
                className="
                bg-red-500
                p-2 rounded
              "
              >
                <RxCrossCircled className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-[0.9rem] text-red-500 leading-tight">
                  Oops! Something went wrong
                </h3>
                <p className="text-[0.8rem] text-gray-300 leading-snug">
                  An error occurred, please try again later
                </p>
              </div>
            </div>
          </div>
        ));
      } else {
        setIsLiked(true);
        toast.custom((t) => (
          <div
            className="
              bg-black
              border-2
              border-primary
              shadow-lg
              shadow-purple-500/30
              p-4
              rounded-lg
              transition-all
              duration-300
              ease-in-out
            "
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary p-2 rounded">
                <AiFillHeart className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-[0.9rem] text-secondary leading-tight">You liked a song</h3>
                <p className="text-[0.8rem] text-gray-300 leading-snug">
                  New song added to your liked songs
                </p>
              </div>
            </div>
          </div>
        ));
      }
    }
  };

  return (
    <button onClick={handleLike} className="hover:opacity-75 transition">
      <Icon className={isLiked ? "text-secondary" : "text-onPrimary"} size={25} />
    </button>
  );
};
