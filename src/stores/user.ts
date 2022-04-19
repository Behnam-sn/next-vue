import { defineStore } from "pinia";

import { useSongsStore } from "@/stores/songs";
import { usePlayerStore } from "@/stores/player";

import type { Song } from "@/models/song.model";

interface State {
  likedSongs: Song[];
  recents: Song[];
}

export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      likedSongs: [],
      recents: [],
    } as State),
  getters: {},
  actions: {
    addToLikedSongs(song: Song) {
      this.likedSongs.push(song);
      const localStorageLikedSongs = localStorage.getItem("likedSongs");
      if (localStorageLikedSongs) {
        const likedSongsId: string[] = JSON.parse(localStorageLikedSongs);
        likedSongsId.push(song.id);
        localStorage.setItem("likedSongs", JSON.stringify(likedSongsId));
      }
    },
    removeFromLikedSongs(song: Song) {
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
    replaceQueue(songs: Song[]) {
      localStorage.setItem("queue", JSON.stringify(songs));
    },
    fetchLocalStorageData() {
      const songsStore = useSongsStore();
      const playerStore = usePlayerStore();

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

      const localStorageQueue = localStorage.getItem("queue");
      if (localStorageQueue) {
        playerStore.queue = JSON.parse(localStorageQueue);
      } else {
        playerStore.queue = [
          {
            id: "0xkIqujRyf",
            title: "Take My Breath",
            artists: [
              {
                id: "UoyxnRAsCv",
                name: "The Weeknd",
              },
            ],
            albumId: "6h6pfhg9Bw",
            number: 4,
            length: "03:41",
            thumbnail: "iHzGJrkWxt.png",
            src: "xpYugmcWiK.mp3",
          },
        ];
        localStorage.setItem(
          "queue",
          JSON.stringify([
            {
              id: "0xkIqujRyf",
              title: "Take My Breath",
              artists: [
                {
                  id: "UoyxnRAsCv",
                  name: "The Weeknd",
                },
              ],
              albumId: "6h6pfhg9Bw",
              number: 4,
              length: "03:41",
              thumbnail: "iHzGJrkWxt.png",
              src: "xpYugmcWiK.mp3",
            },
          ])
        );
      }
    },
  },
});
