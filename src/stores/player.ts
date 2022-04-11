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
          id: "Ueu1aVwooq",
          artists: [
            {
              id: "",
              name: "Ed Sheeran",
            },
          ],
          title: "Shape of You",
          albumId: "j08YqSsIbK",
          number: 4,
          length: "03:53",
          thumbnail: "nGRl72oCIc.png",
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
