import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import { useSongsStore } from "@/stores/songs";
import type { Song } from "@/models/song.model";

interface State {
  queue: Song[];
  currentIndex: number;
  isPaused: boolean;
  isMute: boolean;
  loop: boolean;
  shuffle: boolean;
}

export const usePlayerStore = defineStore({
  id: "player",
  state: () =>
    ({
      queue: [],
      currentIndex: 0,
      isPaused: true,
      isMute: false,
      loop: false,
      shuffle: false,
    } as State),
  getters: {
    currnetSong: (state) => state.queue[state.currentIndex],
    lastIndex: (state) => state.queue.length - 1,
  },
  actions: {
    playSong(song: Song) {
      this.queue = [song];
      this.currentIndex = 0;
      this.isPaused = false;

      const userStore = useUserStore();
      userStore.replaceQueue(this.queue);
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
      if (this.currentIndex !== this.lastIndex) {
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
