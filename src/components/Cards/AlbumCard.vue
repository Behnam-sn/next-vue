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
    class="group relative mr-3 mb-3 h-52 w-36 cursor-pointer select-none rounded-xl bg-primary-800 transition duration-300 hover:bg-primary-700 lg:mb-5 lg:mr-5 lg:h-72 lg:w-56"
  >
    <router-link :to="'/album/' + album.id">
      <div class="p-4 lg:p-6">
        <img
          class="lazyload h-28 w-28 rounded-xl bg-primary-500 lg:h-44 lg:w-44"
          :data-src="`/img/${album.thumbnail}`"
          :alt="album.title"
        />
        <div
          class="mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-Quicksand text-sm font-medium text-secondary-900 lg:text-base"
        >
          {{ album.title }}
        </div>
        <div
          class="mt-1 flex font-Quicksand text-xs font-normal text-gray-400 lg:text-sm"
        >
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
