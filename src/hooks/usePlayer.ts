import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  volume: number;
  prevVolume: number;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  setVolume: (volume: number) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: "",
  volume: 0.5,
  prevVolume: 0.5,
  setId: (id) => set((state) => ({ ...state, activeId: id })),
  setIds: (ids) => set((state) => ({ ...state, ids: ids })),
  reset: () => set({ ids: [], activeId: undefined }),
  setVolume: (volume) => {
    set((state) => {
      state.prevVolume = state.volume;
      return { ...state, volume };
    });
  },
}));

export default usePlayer;
