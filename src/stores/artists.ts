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
          name: "Kendrick Lamar",
          monthlyListeners: "30,746,065",
          thumbnail: "IPs0WF0PBo.jpg",
        },
        {
          name: "Billie Eilish",
          monthlyListeners: "49,521,344",
          thumbnail: "Be2dqGESKW.jpg",
        },
      ],
    } as State),
  getters: {},
  actions: {},
});
