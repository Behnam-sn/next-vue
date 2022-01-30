import { defineStore } from "pinia";
import { Song } from "@/models/song.model";

export type State = {
  songs: Song[];
};

export const useSongsStore = defineStore({
  id: "songs",
  state: () =>
    ({
      songs: [
        {
          artists: ["Billie Eilish"],
          title: "everything i wanted",
          album: "everything i wanted Single",
          number: 0,
          length: "04:05",
          thumbnail: "a7z491lObd.png",
          fileName: "",
        },
        {
          artists: ["Imagine Dragons"],
          title: "Believer",
          album: "Evolve",
          number: 3,
          length: "03:24",
          thumbnail: "Rnb1YYiXer.jpg",
          fileName: "",
        },
      ],
    } as State),
  getters: {
    randomSongs: (state: State) => {
      state.songs.sort(() => 0.5 - Math.random()).slice(0, 2);
    },
  },
  actions: {},
});
