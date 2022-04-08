import { defineStore } from "pinia";
import type { Artist } from "@/models/artist.model";

export type State = {
  artists: Artist[];
};

export const useArtistsStore = defineStore({
  id: "artists",
  state: () =>
    ({
      artists: [
        {
          id: "HkU6XoUMT3",
          name: "Kendrick Lamar",
          monthlyListeners: "30,746,065",
          thumbnail: "IPs0WF0PBo.jpg",
        },
        {
          id: "F9ryzh3XwC",
          name: "Billie Eilish",
          monthlyListeners: "49,521,344",
          popularSongs: ["lznZ1V5Crv", "lUfBssvFSD"],
          thumbnail: "Be2dqGESKW.jpg",
        },
      ],
    } as State),
  getters: {
    getArtistById: (state) => {
      return (ArtistId: string) =>
        state.artists.find((artist) => artist.id === ArtistId);
    },
  },
  actions: {},
});
