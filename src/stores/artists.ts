import { defineStore } from "pinia";
import type { Artist } from "@/models/artist.model";

interface State {
  artists: Artist[];
}

export const useArtistsStore = defineStore({
  id: "artists",
  state: () =>
    ({
      artists: [
        {
          id: "HkU6XoUMT3",
          name: "Kendrick Lamar",
          popularSongs: ["JsCe4XroJR", "89rlVU1j7n", "j8gBO0OyC7"],
          monthlyListeners: "30,746,065",
          thumbnail: "IPs0WF0PBo.jpg",
        },
        {
          id: "F9ryzh3XwC",
          name: "Billie Eilish",
          monthlyListeners: "49,521,344",
          popularSongs: ["lznZ1V5Crv", "lUfBssvFSD", "MfSBPBTt8F"],
          thumbnail: "Be2dqGESKW.jpg",
        },
        {
          id: "fzgWElZcS0",
          name: "Khalid",
          monthlyListeners: "44,184,997",
          popularSongs: [],
          thumbnail: "Sc6qqFQbo5.jpg",
        },
        {
          id: "UoyxnRAsCv",
          name: "The Weeknd",
          monthlyListeners: "77,931,916",
          popularSongs: ["QLknrbUFPQ", "wkbkIU5bjB", "0xkIqujRyf"],
          thumbnail: "J51PIHglvu.jpg",
        },
        {
          id: "AniAyE0vZm",
          name: "Ed Sheeran",
          monthlyListeners: "83,514,871",
          popularSongs: ["Ueu1aVwooq", "0J6geA3yiQ"],
          thumbnail: "LfSfs9F3TY.jpg",
        },
        {
          id: "uRrM8f1FsB",
          name: "Dayan",
          monthlyListeners: "34,514,871",
          popularSongs: [],
          thumbnail: "UASWxnsPwW.jpg",
        },
      ],
    } as State),
  getters: {
    getArtistById: (state) => {
      return (ArtistId: string) =>
        state.artists.find((artist) => artist.id === ArtistId);
    },
    searchArtistsByName: (state) => {
      return (text: string) =>
        state.artists.filter((artist) =>
          artist.name.toLowerCase().includes(text.toLowerCase())
        );
    },
  },
  actions: {},
});
