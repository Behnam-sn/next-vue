import { defineStore } from "pinia";

import { useSongsStore } from "@/stores/songs";

import type { Song } from "@/models/song.model";

interface State {
  theme: string;
  likes: Song[];
  recents: Song[];
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      theme: "dark",
      likes: [],
      recents: [],
    } as State),
  getters: {},
  actions: {
    fetchTheme() {
      const localStorageTheme = localStorage.getItem("theme");
      if (localStorageTheme) {
        if (localStorageTheme === "dark") {
          this.theme = "dark";
          document.documentElement.classList.add("dark");
        } else {
          this.theme = "light";
        }
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
    },
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        this.theme = "light";
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    },
    fetchUserData() {
      const songsStore = useSongsStore();

      const localStorageLikes = localStorage.getItem("likes");
      if (localStorageLikes) {
        const likesId: string[] = JSON.parse(localStorageLikes);
        for (const id of likesId) {
          const song = songsStore.getSongById(id);
          if (song) {
            this.likes.push(song);
          }
        }
      } else {
        localStorage.setItem("likes", "[]");
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
    addToLikes(song: Song) {
      this.likes.push(song);
      const localStorageLikes = localStorage.getItem("likes");
      if (localStorageLikes) {
        const likesIds: string[] = JSON.parse(localStorageLikes);
        likesIds.push(song.id);
        localStorage.setItem("likes", JSON.stringify(likesIds));
      }
    },
    removeFromLikes(songId: string) {
      const index = this.likes.findIndex((object) => {
        return object.id === songId;
      });
      if (index !== -1) {
        this.likes.splice(index, 1);
      }

      const localStorageLikes = localStorage.getItem("likes");
      if (localStorageLikes) {
        const likesIds: string[] = JSON.parse(localStorageLikes);
        const index = likesIds.indexOf(songId);
        if (index !== -1) {
          likesIds.splice(index, 1);
          localStorage.setItem("likes", JSON.stringify(likesIds));
        }
      }
    },
    isInLikes(id: string) {
      const found = this.likes.find((song) => song.id == id);
      if (found) {
        return true;
      }
      return false;
    },
    addToRecents(song: Song) {
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
  },
});
