"use server";

import { DeezerTracks } from "@/types/types";

const DEZZER_API = "https://api.deezer.com";

export const getSongs = async (): Promise<DeezerTracks> => {
  const random = Math.floor(Math.random() * 50);
  const data = await fetch(`${DEZZER_API}/chart/0/tracks&limit=50&index=${random}`);
  return await data.json();
};
