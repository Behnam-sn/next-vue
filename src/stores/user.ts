import { defineStore } from "pinia";
import { useSongsStore } from "@/stores/songs";
import type { Song } from "@/models/song.model";

interface State {
  currentTab: string;
  likedSongs: Song[];
  recents: Song[];
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      currentTab: "home",
      likedSongs: [],
      recents: [],
    } as State),
  getters: {},
  actions: {
    changeTab(newTab: string): void {
      this.currentTab = newTab;
    },
    addToLikedSongs(song: Song): void {
      this.likedSongs.push(song);
      const localStorageLikedSongs = localStorage.getItem("likedSongs");
      if (localStorageLikedSongs) {
        const likedSongsId: string[] = JSON.parse(localStorageLikedSongs);
        likedSongsId.push(song.id);
        localStorage.setItem("likedSongs", JSON.stringify(likedSongsId));
      }
    },
    removeFromLikedSongs(song: Song): void {
      const index = this.likedSongs.indexOf(song);
      if (index > -1) {
        this.likedSongs.splice(index, 1);
      }

      const localStorageLikedSongs = localStorage.getItem("likedSongs");
      if (localStorageLikedSongs) {
        const likedSongsId: string[] = JSON.parse(localStorageLikedSongs);
        const index = likedSongsId.indexOf(song.id);
        if (index > -1) {
          likedSongsId.splice(index, 1);
        }
        localStorage.setItem("likedSongs", JSON.stringify(likedSongsId));
      }
    },
    isInLikedSong(id: string): boolean {
      const found = this.likedSongs.find((song) => song.id == id);
      if (found) {
        return true;
      }
      return false;
    },
    addToRecents(song: Song): void {
      this.recents.push(song);

      const localStorageRecents = localStorage.getItem("recents");
      if (localStorageRecents) {
        const recentsId: string[] = JSON.parse(localStorageRecents);
        if (recentsId.length === 20) {
          recentsId.shift();
        }
        recentsId.push(song.id);
        localStorage.setItem("recents", JSON.stringify(recentsId));
      }
    },
    fetchLocalStorageData(): void {
      const songsStore = useSongsStore();

      const localStorageLikedSongs = localStorage.getItem("likedSongs");
      if (localStorageLikedSongs) {
        const likedSongsId: string[] = JSON.parse(localStorageLikedSongs);
        for (const id of likedSongsId) {
          const song = songsStore.getSongById(id);
          if (song) {
            this.likedSongs.push(song);
          }
        }
      } else {
        localStorage.setItem("likedSongs", "[]");
      }

      const localStorageRecents = localStorage.getItem("recents");
      if (localStorageRecents) {
        const recentsId: string[] = JSON.parse(localStorageRecents);
        for (const id of recentsId) {
          const song = songsStore.getSongById(id);
          if (song) {
            this.recents.push(song);
          }
        }
      } else {
        localStorage.setItem("recents", "[]");
      }
    },
  },
});
