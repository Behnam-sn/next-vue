import { defineStore } from "pinia";
import type { Album } from "@/models/album.model";

export type State = {
  albums: Album[];
};

export const useAlbumsStore = defineStore({
  id: "albums",
  state: () =>
    ({
      albums: [
        {
          id: "GqiWvmgQCq",
          title: "everything i wanted Single",
          artist: "Billie Eilish",
          type: "Single",
          year: 2019,
          tracksCount: 1,
          thumbnail: "a7z491lObd.png",
        },
        {
          id: "mjO5GVC4CS",
          title: "Evolve",
          artist: "Imagine Dragons",
          type: "LP",
          year: 2017,
          tracksCount: 14,
          thumbnail: "Rnb1YYiXer.jpg",
        },
        {
          id: "j08YqSsIbK",
          title: "Divide",
          artist: "Ed Sheeran",
          type: "LP",
          year: 2017,
          tracksCount: 16,
          thumbnail: "nGRl72oCIc.png",
        },
        {
          id: "g3Ivem8wBY",
          title: "After Hours",
          artist: "The Weeknd",
          type: "LP",
          year: 2020,
          tracksCount: 14,
          thumbnail: "5xUwktQM79.jpg",
        },
        {
          id: "e8hUylGqE3",
          title: "Scorpion",
          artist: "Drake",
          type: "LP",
          year: 2018,
          tracksCount: 25,
          thumbnail: "0FLrDT3KU7.jpg",
        },
        {
          id: "dKQ4BeANiD",
          title: "Happier Than Ever",
          artist: "Billie Eilish",
          type: "LP",
          year: 2021,
          tracksCount: 16,
          thumbnail: "EVEHF7pGMO.png",
        },
      ],
    } as State),
  getters: {
    getAlbumById: (state) => {
      return (AlbumId: string) =>
        state.albums.find((album) => album.id === AlbumId);
    },
  },
  actions: {},
});
