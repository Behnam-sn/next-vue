import { defineStore } from "pinia";
import { useSongsStore } from "@/stores/songs";
import type { Song } from "@/models/song.model";

interface State {
  queue: Song[];
  currentIndex: number;
  isMute: boolean;
  loop: boolean;
  shuffle: boolean;
  volume: number;
}

export const usePlayerStore = defineStore({
  id: "player",
  state: () =>
    ({
      queue: [
        {
          id: "0xkIqujRyf",
          title: "Take My Breath",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          albumId: "6h6pfhg9Bw",
          number: 4,
          duration: 339,
          thumbnail: "iHzGJrkWxt.png",
          src: "xpYugmcWiK.mp3",
        },
      ],
      currentIndex: 0,
      isMute: false,
      loop: false,
      shuffle: false,
      volume: 100,
    } as State),
  getters: {
    currnetSong: (state) => state.queue[state.currentIndex],
    lastIndex: (state) => state.queue.length - 1,
  },
  actions: {
    fetchPlayerSettings() {
      const localStoragePlayerSettings = localStorage.getItem("playerSettings");
      if (localStoragePlayerSettings) {
        this.$state = JSON.parse(localStoragePlayerSettings);
      } else {
        localStorage.setItem("playerSettings", JSON.stringify(this.$state));
      }
    },
    updatePlayerSettings() {
      localStorage.setItem("playerSettings", JSON.stringify(this.$state));
    },
    playSong(song: Song) {
      this.queue = [song];
      this.currentIndex = 0;
    },
    playSongs(songs: Song[], index: number) {
      this.queue = songs;
      this.currentIndex = index;
    },
    playAlbum(albumId: string) {
      const songsStore = useSongsStore();
      this.queue = songsStore.getSongsByAlbum(albumId);
      this.currentIndex = 0;
    },
    playArtist(artistId: string) {
      const songsStore = useSongsStore();
      this.queue = songsStore.getSongsByArtist(artistId);
      this.currentIndex = 0;
    },
    next() {
      if (this.currentIndex !== this.lastIndex) {
        this.currentIndex++;
      }
    },
    pervious() {
      if (this.currentIndex !== 0) {
        this.currentIndex--;
      }
    },
  },
});
