import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import { useSongsStore } from "@/stores/songs";
import type { Song } from "@/models/song.model";

interface State {
  queue: Song[];
  currentIndex: number;
  isPaused: boolean;
}

export const usePlayerStore = defineStore({
  id: "player",
  state: () =>
    ({
      queue: [],
      currentIndex: 0,
      isPaused: true,
    } as State),
  getters: {
    currnetSong: (state) => state.queue[state.currentIndex],
  },
  actions: {
    playSong(song: Song) {
      this.queue = [song];
      this.currentIndex = 0;
      this.isPaused = false;

      const userStore = useUserStore();
      userStore.replaceQueue(this.queue);
      // userStore.addToRecents(song);
    },
    playSongs(songs: Song[], index: number) {
      this.queue = songs;
      this.currentIndex = index;
      this.isPaused = false;

      const userStore = useUserStore();
      userStore.replaceQueue(this.queue);
    },
    playAlbum(albumId: string) {
      const songsStore = useSongsStore();
      this.queue = songsStore.getSongsByAlbum(albumId);
      this.currentIndex = 0;
      this.isPaused = false;

      const userStore = useUserStore();
      userStore.replaceQueue(this.queue);
    },
    next() {
      if (this.currentIndex !== this.queue.length - 1) {
        this.currentIndex++;
        this.isPaused = false;
      }
    },
    pervious() {
      if (this.currentIndex !== 0) {
        this.currentIndex--;
        this.isPaused = false;
      }
    },
  },
});
