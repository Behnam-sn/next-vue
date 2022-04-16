<script setup lang="ts">
import type { Song } from "@/models/song.model";

import PlayIcon from "@/assets/icons/PlayIcon.vue";

import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore();

defineProps<{
  song: Song;
}>();
</script>

<template>
  <div
    class="group relative mr-5 mb-5 h-72 w-48 cursor-pointer rounded-xl bg-primary-800 transition duration-300 hover:bg-primary-700 lg:w-56"
  >
    <router-link :to="'/album/' + song.albumId">
      <div class="p-6">
        <img class="rounded-xl" :src="'/' + song.thumbnail" :alt="song.title" />
        <div class="mt-2 font-Quicksand font-medium text-secondary-900">
          {{ song.title }}
        </div>
        <div class="mt-1 flex font-Quicksand text-sm font-normal text-gray-400">
          <template v-for="(artist, index) in song.artists" :key="index">
            <router-link :to="'/artist/' + artist.id">
              {{ artist.name }}
            </router-link>
            <span
              v-if="
                song.artists.length !== 1 && index !== song.artists.length - 1
              "
              class="mr-1"
            >
              ,
            </span>
          </template>
        </div>
      </div>
    </router-link>
    <button
      @click="playerStore.playSong(song)"
      class="absolute bottom-24 right-8 z-20 flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-tertiary-900 fill-secondary-900 pl-1 transition duration-300 hover:bg-tertiary-800 group-hover:scale-100"
    >
      <PlayIcon class="w-4" />
    </button>
  </div>
</template>
