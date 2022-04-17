import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import type { Song } from "@/models/song.model";

interface State {
  queue: Song[];
  currentIndex: number;
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
          length: "03:41",
          thumbnail: "iHzGJrkWxt.png",
          fileName: "",
        },
      ],
      currentIndex: 0,
    } as State),
  getters: {
    currnetSong: (state) => state.queue[state.currentIndex],
  },
  actions: {
    playSong(song: Song): void {
      this.queue = [song];
      this.currentIndex = 0;

      const userStore = useUserStore();
      userStore.addToRecents(song);
    },
  },
});
