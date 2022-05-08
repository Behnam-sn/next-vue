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
          duration: 245,
          thumbnail: "a7z491lObd.png",
          src: "cRh6BAT6xY.mp3",
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
          duration: 200,
          thumbnail: "TcXdvyfhop.jpg",
          src: "Aq54zh8Txx.mp3",
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
          duration: 244,
          thumbnail: "Lppz920huj.png",
          src: "ps63YmU8nA.mp3",
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
          duration: 151,
          thumbnail: "EVEHF7pGMO.png",
          src: "q8Eu8e4G0p.mp3",
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
          duration: 298,
          thumbnail: "EVEHF7pGMO.png",
          src: "IJCnnbFHRS.mp3",
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
          duration: 200,
          thumbnail: "vmabIaGSyw.jpg",
          src: "PtJFLtu8ty.mp3",
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
          duration: 361,
          thumbnail: "5xUwktQM79.jpg",
          src: "iJyFK7jDv4.mp3",
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
          duration: 234,
          thumbnail: "RLuBZBGzxO.png",
          src: "1e4yLogCGE.mp3",
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
          duration: 339,
          thumbnail: "iHzGJrkWxt.png",
          src: "xpYugmcWiK.mp3",
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
          duration: 233,
          thumbnail: "nGRl72oCIc.png",
          src: "HYQUzmjbdP.mp3",
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
          duration: 261,
          thumbnail: "YfnPmLuQfW.jpg",
          src: "Oho8gwtyOu.mp3",
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
          duration: 177,
          thumbnail: "XnkQozD6Xh.png",
          src: "DNxHYsK18s.mp3",
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
          duration: 186,
          thumbnail: "vPWHbUbUN1.png",
          src: "UYVvuTvmDJ.mp3",
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
          duration: 386,
          thumbnail: "wW2oKHM4mv.jpg",
          src: "6Ofp9xL6VK.mp3",
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
          duration: 188,
          thumbnail: "BrfNADch5N.jpg",
          src: "xLUunbOv3Q.mp3",
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
          duration: 206,
          thumbnail: "MApeAYURA6.jpg",
          src: "7HT7Bi4gle.mp3",
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
          duration: 182,
          thumbnail: "9Brc3rUvrC.jpg",
          src: "eajFrynp8Y.mp3",
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
    getSongsByArtist: (state) => {
      return (artistId: string) =>
        state.songs.filter((song) =>
          song.artists.find((artist) => artist.id === artistId)
        );
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
