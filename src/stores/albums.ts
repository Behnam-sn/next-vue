import { defineStore } from "pinia";
import type { Album } from "@/models/album.model";

interface State {
  albums: Album[];
}

export const useAlbumsStore = defineStore({
  id: "albums",
  state: () =>
    ({
      albums: [
        {
          id: "GqiWvmgQCq",
          title: "everything i wanted",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          type: "Single",
          year: 2019,
          tracksCount: 1,
          thumbnail: "a7z491lObd.png",
        },
        {
          id: "cy9ePORsIT",
          title: "lovely",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
            {
              id: "fzgWElZcS0",
              name: "Khalid",
            },
          ],
          type: "Single",
          year: 2018,
          tracksCount: 1,
          thumbnail: "TcXdvyfhop.jpg",
        },
        {
          id: "unRyI4kTA1",
          title: "No Time To Die",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          type: "Single",
          year: 2020,
          tracksCount: 1,
          thumbnail: "Lppz920huj.png",
        },
        {
          id: "dKQ4BeANiD",
          title: "Happier Than Ever",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          type: "LP",
          year: 2021,
          tracksCount: 16,
          thumbnail: "EVEHF7pGMO.png",
        },
        {
          id: "iU3dHGj55w",
          title: "After Hours",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          type: "LP",
          year: 2020,
          tracksCount: 14,
          thumbnail: "5xUwktQM79.jpg",
        },
        {
          id: "GKllunkgyA",
          title: "Moth to a Flame",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          type: "Single",
          year: 2021,
          tracksCount: 1,
          thumbnail: "RLuBZBGzxO.png",
        },
        {
          id: "6h6pfhg9Bw",
          title: "Dawn FM",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          type: "LP",
          year: 2022,
          tracksCount: 16,
          thumbnail: "5YhJzjKwYN.png",
        },
        {
          id: "A1QVDv1dME",
          title: "Divide",
          artists: [
            {
              id: "AniAyE0vZm",
              name: "Ed Sheeran",
            },
          ],
          type: "LP",
          year: 2017,
          tracksCount: 16,
          thumbnail: "nGRl72oCIc.png",
        },
        {
          id: "vyYrf2NfLL",
          title: "DAMN.",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          type: "LP",
          year: 2017,
          tracksCount: 14,
          thumbnail: "vPWHbUbUN1.png",
        },
        {
          id: "mTw3nm3WYU",
          title: "good kid, m.A.A.d city",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          type: "LP",
          year: 2012,
          tracksCount: 18,
          thumbnail: "wW2oKHM4mv.jpg",
        },
        {
          id: "unzrsRAvwP",
          title: "Mehmoone Man",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          type: "Single",
          year: 2021,
          tracksCount: 1,
          thumbnail: "BrfNADch5N.jpg",
        },
        {
          id: "Z9kSscsA02",
          title: "Khasteh Shodam",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          type: "Single",
          year: 2020,
          tracksCount: 1,
          thumbnail: "MApeAYURA6.jpg",
        },
        {
          id: "l92oNYU0xP",
          title: "Miram Kooh",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          type: "Single",
          year: 2020,
          tracksCount: 1,
          thumbnail: "9Brc3rUvrC.jpg",
        },
      ],
    } as State),
  getters: {
    getAlbumById: (state) => {
      return (AlbumId: string) =>
        state.albums.find((album) => album.id === AlbumId);
    },
    getAlbumsByArtist: (state) => {
      return (artistId: string) =>
        state.albums.filter((album) =>
          album.artists.find(
            (artist) => artist.id === artistId && album.type !== "Single"
          )
        );
    },
    getSinglesByArtist: (state) => {
      return (artistId: string) =>
        state.albums.filter((album) =>
          album.artists.find(
            (artist) => artist.id === artistId && album.type === "Single"
          )
        );
    },
    searchAlbumsByTitle: (state) => {
      return (text: string) =>
        state.albums.filter((album) =>
          album.title.toLowerCase().includes(text.toLowerCase())
        );
    },
  },
  actions: {},
});
