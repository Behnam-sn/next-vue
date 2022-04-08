<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import type { Song } from "@/models/song.model";

import TitleBar from "@/components/TitleBar.vue";
import AlbumCard from "@/components/AlbumCard.vue";

import { useArtistsStore } from "@/stores/artists";
import { useAlbumsStore } from "@/stores/albums";
import { useSongsStore } from "@/stores/songs";

const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();

const route = useRoute();
const id: any = route.params.id;

const artist = ref(artistsStore.getArtistById(id));

const artistAlbums = ref(albumsStore.getAlbumsByArtist(id));
const artistSingles = ref(albumsStore.getSinglesByArtist(id));

const popularSongs: Song[] = [];
if (artist.value?.popularSongs !== undefined) {
  for (const id of artist.value.popularSongs) {
    let song = songsStore.getSongById(id);

    if (song !== undefined) {
      popularSongs.push(song);
    }
  }
}
</script>

<template>
  <div class="mt-4 font-Quicksand font-medium">
    <div class="flex items-center">
      <div class="w-60">
        <img
          class="rounded-full"
          :src="'/' + artist?.thumbnail"
          :alt="artist?.name"
        />
      </div>
      <div class="px-8">
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
            :src="'/' + song.thumbnail"
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
