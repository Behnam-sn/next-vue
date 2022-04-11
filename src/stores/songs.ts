import { defineStore } from "pinia";
import type { Song } from "@/models/song.model";

interface State {
  songs: Song[];
}

export const useSongsStore = defineStore({
  id: "songs",
  state: () =>
    ({
      songs: [
        {
          id: "lUfBssvFSD",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          title: "everything i wanted",
          albumId: "GqiWvmgQCq",
          number: 1,
          length: "04:05",
          thumbnail: "a7z491lObd.png",
          fileName: "",
        },
        {
          id: "08ZBlEuJbt",
          artists: [
            {
              id: "",
              name: "Imagine Dragons",
            },
          ],
          title: "Believer",
          albumId: "mjO5GVC4CS",
          number: 3,
          length: "03:24",
          thumbnail: "Rnb1YYiXer.jpg",
          fileName: "",
        },
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
        {
          id: "QLknrbUFPQ",
          artists: [
            {
              id: "",
              name: "The Weeknd",
            },
          ],
          title: "After Hours",
          albumId: "g3Ivem8wBY",
          number: 13,
          length: "06:01",
          thumbnail: "5xUwktQM79.jpg",
          fileName: "",
        },
        {
          id: "fgyUTxJdYv",
          artists: [
            {
              id: "",
              name: "Drake",
            },
          ],
          title: "God's Plan",
          albumId: "e8hUylGqE3",
          number: 5,
          length: "03:19",
          thumbnail: "0FLrDT3KU7.jpg",
          fileName: "",
        },
        {
          id: "wIqu7NVPnB",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          title: "GOLDWING",
          albumId: "dKQ4BeANiD",
          number: 6,
          length: "02:31",
          thumbnail: "EVEHF7pGMO.png",
          fileName: "",
        },
        {
          id: "lznZ1V5Crv",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          title: "Happier Than Ever",
          albumId: "dKQ4BeANiD",
          number: 15,
          length: "04:58",
          thumbnail: "EVEHF7pGMO.png",
          fileName: "",
        },
      ],
    } as State),
  getters: {
    randomSongs: (state: State) => {
      state.songs.sort(() => 0.5 - Math.random()).slice(0, 2);
    },
    getSongById: (state) => {
      return (SongId: string) => state.songs.find((song) => song.id === SongId);
    },
    getSongsByAlbum: (state) => {
      return (AlbumId: string) =>
        state.songs.filter((song) => song.albumId === AlbumId);
    },
  },
  actions: {},
});
