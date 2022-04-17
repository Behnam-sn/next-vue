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
          title: "everything i wanted",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          albumId: "GqiWvmgQCq",
          number: 1,
          length: "04:05",
          thumbnail: "a7z491lObd.png",
          fileName: "",
        },
        {
          id: "MfSBPBTt8F",
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
          albumId: "cy9ePORsIT",
          number: 1,
          length: "03:21",
          thumbnail: "TcXdvyfhop.jpg",
          fileName: "",
        },
        {
          id: "PsKd45Idbv",
          title: "No Time To Die",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          albumId: "unRyI4kTA1",
          number: 1,
          length: "04:03",
          thumbnail: "Lppz920huj.png",
          fileName: "",
        },
        {
          id: "wIqu7NVPnB",
          title: "GOLDWING",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          albumId: "dKQ4BeANiD",
          number: 6,
          length: "02:31",
          thumbnail: "EVEHF7pGMO.png",
          fileName: "",
        },
        {
          id: "lznZ1V5Crv",
          title: "Happier Than Ever",
          artists: [
            {
              id: "F9ryzh3XwC",
              name: "Billie Eilish",
            },
          ],
          albumId: "dKQ4BeANiD",
          number: 15,
          length: "04:58",
          thumbnail: "EVEHF7pGMO.png",
          fileName: "",
        },
        {
          id: "wkbkIU5bjB",
          title: "Blinding Lights",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          albumId: "iU3dHGj55w",
          number: 9,
          length: "03:21",
          thumbnail: "vmabIaGSyw.jpg",
          fileName: "",
        },
        {
          id: "QLknrbUFPQ",
          title: "After Hours",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          albumId: "iU3dHGj55w",
          number: 13,
          length: "06:01",
          thumbnail: "5xUwktQM79.jpg",
          fileName: "",
        },
        {
          id: "icg7BLOr6g",
          title: "Moth to a Flame",
          artists: [
            {
              id: "UoyxnRAsCv",
              name: "The Weeknd",
            },
          ],
          albumId: "GKllunkgyA",
          number: 1,
          length: "03:54",
          thumbnail: "RLuBZBGzxO.png",
          fileName: "",
        },
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
          fileName: "",
        },
        {
          id: "Ueu1aVwooq",
          title: "Shape of You",
          artists: [
            {
              id: "AniAyE0vZm",
              name: "Ed Sheeran",
            },
          ],
          albumId: "A1QVDv1dME",
          number: 4,
          length: "03:53",
          thumbnail: "nGRl72oCIc.png",
          fileName: "",
        },
        {
          id: "0J6geA3yiQ",
          title: "Castle on the Hill",
          artists: [
            {
              id: "AniAyE0vZm",
              name: "Ed Sheeran",
            },
          ],
          albumId: "A1QVDv1dME",
          number: 2,
          length: "04:22",
          thumbnail: "YfnPmLuQfW.jpg",
          fileName: "",
        },
        {
          id: "JsCe4XroJR",
          title: "HUMBLE.",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          albumId: "vyYrf2NfLL",
          number: 8,
          length: "02:57",
          thumbnail: "XnkQozD6Xh.png",
          fileName: "",
        },
        {
          id: "89rlVU1j7n",
          title: "DNA.",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          albumId: "vyYrf2NfLL",
          number: 2,
          length: "03:06",
          thumbnail: "vPWHbUbUN1.png",
          fileName: "",
        },
        {
          id: "j8gBO0OyC7",
          title: "Money Trees",
          artists: [
            {
              id: "HkU6XoUMT3",
              name: "Kendrick Lamar",
            },
          ],
          albumId: "mTw3nm3WYU",
          number: 5,
          length: "06:27",
          thumbnail: "wW2oKHM4mv.jpg",
          fileName: "",
        },
        {
          id: "MBDWNciZJa",
          title: "Mehmoone Man",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          albumId: "unzrsRAvwP",
          number: 1,
          length: "03:08",
          thumbnail: "BrfNADch5N.jpg",
          fileName: "",
        },
        {
          id: "G8lDUw5bws",
          title: "Khasteh Shodam",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
          albumId: "Z9kSscsA02",
          number: 1,
          length: "03:26",
          thumbnail: "MApeAYURA6.jpg",
          fileName: "",
        },
        {
          id: "xmqYwfsExU",
          title: "Miram Kooh",
          artists: [
            {
              id: "uRrM8f1FsB",
              name: "Dayan",
            },
          ],
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
        state.songs
          .filter((song) => song.albumId === AlbumId)
          .sort((a, b) => (a.number > b.number ? 1 : -1));
    },
    searchSongsByTitle: (state) => {
      return (text: string) =>
        state.songs.filter((song) =>
          song.title.toLowerCase().includes(text.toLowerCase())
        );
    },
  },
  actions: {},
});
