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
  <div>
    <div class="flex flex-col items-center lg:flex-row">
      <img
        class="lazyload mx-auto h-52 w-52 rounded-full shadow-2xl lg:mx-0 lg:h-60 lg:w-60"
        :data-src="`/img/${artist?.thumbnail}`"
        :alt="artist?.name"
      />
      <div
        class="mt-4 flex flex-col items-center lg:mt-0 lg:items-start lg:pl-12"
      >
        <div
          class="mb-4 font-Quicksand text-4xl font-bold text-secondary-900 transition-colors duration-300 dark:text-primary-900 lg:text-6xl"
        >
          {{ artist?.name }}
        </div>
        <div
          class="font-Quicksand text-sm font-semibold text-neutral-400 lg:text-base"
        >
          {{ artist?.monthlyListeners }} Monthy Listeners
        </div>
      </div>
    </div>

    <template v-if="popularSongs.length">
      <TitleBar text="Popular" />

      <div
        class="group relative mb-2 flex items-center rounded-lg py-2 font-Quicksand font-medium text-secondary-900 transition-colors duration-300 hover:bg-primary-800 dark:text-primary-900 dark:hover:bg-secondary-800 lg:py-3"
        v-for="(song, index) in popularSongs"
        :key="song.id"
      >
        <router-link
          class="flex grow items-center"
          :to="'/album/' + song.albumId"
        >
          <div class="ml-6 w-4 text-lg lg:ml-8">{{ index + 1 }}</div>

          <img
            class="lazyload mx-6 h-14 w-14 lg:mx-7 lg:h-16 lg:w-16"
            :data-src="`/img/${song.thumbnail}`"
            :alt="song.title"
          />

          <div class="lg:text-lg">
            {{ song.title }}
          </div>
        </router-link>

        <PlayButton
          class="left-2 lg:left-3"
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
