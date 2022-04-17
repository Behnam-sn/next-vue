import { defineStore } from "pinia";
import type { Song } from "@/models/song.model";
import type { Artist } from "@/models/artist.model";
import type { Album } from "@/models/album.model";

interface State {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
}

export const useSearchStore = defineStore({
  id: "search",
  state: () =>
    ({
      songs: [],
      artists: [],
      albums: [],
    } as State),
  getters: {},
  actions: {},
});
