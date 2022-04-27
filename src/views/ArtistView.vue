<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import TitleBar from "@/components/TitleBar.vue";
import AlbumCard from "@/components/Cards/AlbumCard.vue";
import PlayButton from "@/components/PlayButton.vue";

import { useArtistsStore } from "@/stores/artists";
import { useAlbumsStore } from "@/stores/albums";
import { useSongsStore } from "@/stores/songs";
import { usePlayerStore } from "@/stores/player";

const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();
const playerStore = usePlayerStore();
const route = useRoute();

const id = computed(() => {
  if (typeof route.params.id === "string") {
    return route.params.id;
  } else {
    return "";
  }
});

const artist = computed(() => {
  return artistsStore.getArtistById(id.value);
});

const artistAlbums = computed(() => {
  return albumsStore.getAlbumsByArtist(id.value);
});

const artistSingles = computed(() => {
  return albumsStore.getSinglesByArtist(id.value);
});

const popularSongs = computed(() => {
  let songs = [];
  if (artist.value?.popularSongs) {
    for (const songId of artist.value.popularSongs) {
      let song = songsStore.getSongById(songId);
      if (song) {
        songs.push(song);
      }
    }
  }
  return songs;
});
</script>

<template>
  <div class="font-Quicksand font-medium">
    <div class="flex flex-col items-center lg:flex-row">
      <img
        class="lazyload mx-auto h-52 w-52 rounded-full bg-primary-500 shadow-2xl lg:mx-0 lg:h-60 lg:w-60"
        :data-src="`/img/${artist?.thumbnail}`"
        :alt="artist?.name"
      />
      <div
        class="mt-4 flex flex-col items-center lg:mt-0 lg:items-start lg:pl-12"
      >
        <div class="mb-4 text-4xl font-bold lg:text-6xl">
          {{ artist?.name }}
        </div>
        <div class="text-sm font-semibold text-neutral-400 lg:text-base">
          {{ artist?.monthlyListeners }} Monthy Listeners
        </div>
      </div>
    </div>

    <template v-if="popularSongs.length">
      <TitleBar text="Popular" />
      <div
        class="group relative mb-2 flex items-center rounded-lg py-2 transition duration-300 hover:bg-primary-800 lg:mx-4 lg:py-3"
        v-for="(song, index) in popularSongs"
        :key="song.id"
      >
        <router-link
          class="flex grow items-center"
          :to="'/album/' + song.albumId"
        >
          <div class="ml-4 w-4 text-lg lg:ml-8">{{ index + 1 }}</div>
          <img
            class="lazyload mx-4 h-14 w-14 lg:mx-7 lg:h-16 lg:w-16"
            :data-src="`/img/${song.thumbnail}`"
            :alt="song.title"
          />
          <div class="lg:text-lg">{{ song.title }}</div>
        </router-link>
        <PlayButton
          class="left-3"
          @click="playerStore.playSongs(popularSongs, index)"
        />
      </div>
    </template>

    <template v-if="artistAlbums.length">
      <TitleBar text="Albums" />
      <div class="flex flex-wrap">
        <div v-for="album in artistAlbums" :key="album.id">
          <AlbumCard :album="album" />
        </div>
      </div>
    </template>

    <template v-if="artistSingles.length">
      <TitleBar text="Singles" />
      <div class="flex flex-wrap">
        <div v-for="album in artistSingles" :key="album.id">
          <AlbumCard :album="album" />
        </div>
      </div>
    </template>
  </div>
</template>
