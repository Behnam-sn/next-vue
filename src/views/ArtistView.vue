<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import TitleBar from "@/components/TitleBar.vue";
import AlbumCard from "@/components/Cards/AlbumCard.vue";

import { useArtistsStore } from "@/stores/artists";
import { useAlbumsStore } from "@/stores/albums";
import { useSongsStore } from "@/stores/songs";

const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();
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
  <div class="mt-4 font-Quicksand font-medium">
    <div class="flex items-center">
      <div class="w-60">
        <img
          class="rounded-full shadow-2xl"
          :src="'/img/' + artist?.thumbnail"
          :alt="artist?.name"
        />
      </div>
      <div class="pl-12">
        <div class="mb-4 text-6xl font-bold">{{ artist?.name }}</div>
        <div class="font-semibold text-neutral-400">
          {{ artist?.monthlyListeners }} Monthy Listeners
        </div>
      </div>
    </div>

    <template v-if="popularSongs.length">
      <TitleBar text="Popular" />
      <div v-for="(song, index) in popularSongs" :key="song.id">
        <router-link
          class="mb-6 ml-10 flex items-center"
          :to="'/album/' + song.albumId"
        >
          <div class="w-3 text-lg">{{ index + 1 }}</div>
          <img
            class="mx-7 w-16"
            :src="'/img/' + song.thumbnail"
            :alt="song.title"
          />
          <div class="text-lg">{{ song.title }}</div>
        </router-link>
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
