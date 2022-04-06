import { defineStore } from "pinia";
import type { Song } from "@/models/song.model";

export type State = {
  songs: Song[];
};

export const useSongsStore = defineStore({
  id: "songs",
  state: () =>
    ({
      songs: [
        {
          id: "lUfBssvFSD",
          artists: ["Billie Eilish", "saeed asayesh"],
          title: "everything i wanted",
          albumId: "everything i wanted Single",
          number: 0,
          length: "04:05",
          thumbnail: "a7z491lObd.png",
          fileName: "",
        },
        {
          id: "08ZBlEuJbt",
          artists: ["Imagine Dragons"],
          title: "Believer",
          albumId: "Evolve",
          number: 3,
          length: "03:24",
          thumbnail: "Rnb1YYiXer.jpg",
          fileName: "",
        },
        {
          id: "Ueu1aVwooq",
          artists: ["Ed Sheeran"],
          title: "Shape of You",
          albumId: "Divide",
          number: 4,
          length: "03:53",
          thumbnail: "nGRl72oCIc.png",
          fileName: "",
        },
        {
          id: "QLknrbUFPQ",
          artists: ["The Weeknd"],
          title: "After Hours",
          albumId: "After Hours",
          number: 13,
          length: "06:01",
          thumbnail: "5xUwktQM79.jpg",
          fileName: "",
        },
        {
          id: "fgyUTxJdYv",
          artists: ["Drake"],
          title: "God's Plan",
          albumId: "Scorpion",
          number: 5,
          length: "03:19",
          thumbnail: "0FLrDT3KU7.jpg",
          fileName: "",
        },
        {
          id: "wIqu7NVPnB",
          artists: ["Billie Eilish"],
          title: "GOLDWING",
          albumId: "Happier Than Ever",
          number: 6,
          thumbnail: "EVEHF7pGMO.png",
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
