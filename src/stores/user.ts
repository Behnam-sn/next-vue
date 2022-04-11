import { defineStore } from "pinia";
import type { Song } from "@/models/song.model";

interface State {
  likedSongs: Song[];
  recents: string[];
  queue: Song[];
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      likedSongs: [],
      recents: [],
      queue: [],
    } as State),
  getters: {},
  actions: {
    addToLikedSongs(song: Song): void {
      this.likedSongs.push(song);
    },
    removeFromLikedSongs(song: Song): void {
      const index = this.likedSongs.indexOf(song);
      if (index > -1) {
        this.likedSongs.splice(index, 1);
      }
    },
    isInLikedSong(id: string): boolean {
      const found = this.likedSongs.find((song) => song.id == id);
      if (found) {
        return true;
      }
      return false;
    },
  },
});
