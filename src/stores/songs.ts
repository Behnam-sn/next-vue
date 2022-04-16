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
          ],
          title: "everything i wanted",
          albumId: "GqiWvmgQCq",
          number: 1,
          length: "04:05",
          thumbnail: "a7z491lObd.png",
          fileName: "",
        },
        {
          id: "MfSBPBTt8F",
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
          title: "lovely",
          albumId: "cy9ePORsIT",
          number: 1,
          length: "03:21",
          thumbnail: "TcXdvyfhop.jpg",
          fileName: "",
        },
        {
          id: "PsKd45Idbv",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          title: "No Time To Die",
          albumId: "unRyI4kTA1",
          number: 1,
          length: "04:03",
          thumbnail: "Lppz920huj.png",
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
        {
          id: "wkbkIU5bjB",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          title: "Blinding Lights",
          albumId: "iU3dHGj55w",
          number: 9,
          length: "03:21",
          thumbnail: "vmabIaGSyw.jpg",
          fileName: "",
        },
        {
          id: "QLknrbUFPQ",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          title: "After Hours",
          albumId: "iU3dHGj55w",
          number: 13,
          length: "06:01",
          thumbnail: "5xUwktQM79.jpg",
          fileName: "",
        },
        {
          id: "icg7BLOr6g",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          title: "Moth to a Flame",
          albumId: "GKllunkgyA",
          number: 1,
          length: "03:54",
          thumbnail: "RLuBZBGzxO.png",
          fileName: "",
        },
        {
          id: "0xkIqujRyf",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          title: "Take My Breath",
          albumId: "6h6pfhg9Bw",
          number: 4,
          length: "03:41",
          thumbnail: "iHzGJrkWxt.png",
          fileName: "",
        },
        {
          id: "Ueu1aVwooq",
          artists: [
            {
              id: "AniAyE0vZm",
              name: "Ed Sheeran",
            },
          ],
          title: "Shape of You",
          albumId: "A1QVDv1dME",
          number: 4,
          length: "03:53",
          thumbnail: "nGRl72oCIc.png",
          fileName: "",
        },
        {
          id: "0J6geA3yiQ",
          artists: [
            {
              id: "AniAyE0vZm",
              name: "Ed Sheeran",
            },
          ],
          title: "Castle on the Hill",
          albumId: "A1QVDv1dME",
          number: 2,
          length: "04:22",
          thumbnail: "YfnPmLuQfW.jpg",
          fileName: "",
        },
        {
          id: "JsCe4XroJR",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          title: "HUMBLE.",
          albumId: "vyYrf2NfLL",
          number: 8,
          length: "02:57",
          thumbnail: "XnkQozD6Xh.png",
          fileName: "",
        },
        {
          id: "89rlVU1j7n",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          title: "DNA.",
          albumId: "vyYrf2NfLL",
          number: 2,
          length: "03:06",
          thumbnail: "vPWHbUbUN1.png",
          fileName: "",
        },
        {
          id: "j8gBO0OyC7",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          title: "Money Trees",
          albumId: "mTw3nm3WYU",
          number: 5,
          length: "06:27",
          thumbnail: "wW2oKHM4mv.jpg",
          fileName: "",
        },
        {
          id: "MBDWNciZJa",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          title: "Mehmoone Man",
          albumId: "unzrsRAvwP",
          number: 1,
          length: "03:08",
          thumbnail: "BrfNADch5N.jpg",
          fileName: "",
        },
        {
          id: "G8lDUw5bws",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          title: "Khasteh Shodam",
          albumId: "Z9kSscsA02",
          number: 1,
          length: "03:26",
          thumbnail: "MApeAYURA6.jpg",
          fileName: "",
        },
        {
          id: "xmqYwfsExU",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          title: "Miram Kooh",
          albumId: "l92oNYU0xP",
          number: 1,
          length: "03:03",
          thumbnail: "9Brc3rUvrC.jpg",
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
