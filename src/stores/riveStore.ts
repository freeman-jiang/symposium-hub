import { create } from "zustand";

interface RiveState {
  isRiveLoaded: boolean;
  setRiveLoaded: (loaded: boolean) => void;
}

export const useRiveStore = create<RiveState>((set) => ({
  isRiveLoaded: false,
  setRiveLoaded: (loaded) => set({ isRiveLoaded: loaded }),
}));
