"use server";

import { DeezerTracks, Track } from "@/types/types";

const DEZZER_API = "https://api.deezer.com";

export const getSongs = async (): Promise<DeezerTracks> => {
  const random = Math.floor(Math.random() * 50);
  const data = await fetch(`${DEZZER_API}/chart/0/tracks&limit=50&index=${random}`);
  return await data.json();
};

export const getSongById = async (id: string): Promise<Track> => {
  const data = await fetch(`${DEZZER_API}/track/${id}`);
  return await data.json();
};

export const getSongByTitle = async (title?: string): Promise<DeezerTracks> => {
  if (!title) {
    return getSongs();
  }
  const data = await fetch(`${DEZZER_API}/search?q=${title}`);
  return await data.json();
};
