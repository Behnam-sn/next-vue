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
        {
          artists: ["Ed Sheeran"],
          title: "Shape of You",
          album: "Divide",
          number: 4,
          length: "03:53",
          thumbnail: "nGRl72oCIc.png",
          fileName: "",
        },
        {
          artists: ["The Weeknd"],
          title: "After Hours",
          album: "After Hours",
          number: 13,
          length: "06:01",
          thumbnail: "5xUwktQM79.jpg",
          fileName: "",
        },
        {
          artists: ["Drake"],
          title: "God's Plan",
          album: "Scorpion",
          number: 5,
          length: "03:19",
          thumbnail: "0FLrDT3KU7.jpg",
          fileName: "",
        },
        {
          artists: ["Billie Eilish"],
          title: "GOLDWING",
          album: "Happier Than Ever",
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
