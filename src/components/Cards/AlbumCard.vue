<script setup lang="ts">
import type { Album } from "@/models/album.model";

import PlayButton from "@/components/PlayButton.vue";

import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore();

defineProps<{
  album: Album;
}>();
</script>

<template>
  <div
    class="group relative mr-5 mb-5 h-72 w-48 cursor-pointer select-none rounded-xl bg-primary-800 transition duration-300 hover:bg-primary-700 lg:w-56"
  >
    <router-link :to="'/album/' + album.id">
      <div class="p-6">
        <img
          class="lazyload h-44 w-44 rounded-xl bg-primary-500"
          :data-src="`/img/${album.thumbnail}`"
          :alt="album.title"
        />
        <div class="mt-2 font-Quicksand font-medium text-secondary-900">
          {{ album.title }}
        </div>
        <div class="mt-1 flex font-Quicksand text-sm font-normal text-gray-400">
          <template v-for="(artist, index) in album.artists" :key="index">
            <router-link :to="'/artist/' + artist.id">
              {{ artist.name }}
            </router-link>
            <span
              v-if="
                album.artists.length !== 1 && index !== album.artists.length - 1
              "
              class="mr-1"
            >
              ,
            </span>
          </template>
        </div>
      </div>
    </router-link>
    <PlayButton
      class="bottom-24 right-8"
      @click="playerStore.playAlbum(album.id)"
    />
  </div>
</template>
