<script setup lang="ts">
import type { Song } from "@/models/song.model";

import PlayButton from "@/components/PlayButton.vue";

import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore();

defineProps<{
  song: Song;
}>();
</script>

<template>
  <div class="card group relative">
    <router-link :to="'/album/' + song.albumId">
      <div class="p-4 lg:p-6">
        <img
          class="lazyload h-28 w-28 rounded-xl bg-primary-500 lg:h-44 lg:w-44"
          :data-src="`/img/${song.thumbnail}`"
          :alt="song.title"
        />
        <div class="card-title">
          {{ song.title }}
        </div>
        <div
          class="mt-1 flex font-Quicksand text-xs font-normal text-gray-400 lg:text-sm"
        >
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
    <PlayButton
      class="bottom-[5.5rem] right-6 lg:bottom-24 lg:right-8"
      @click="playerStore.playSong(song)"
    />
  </div>
</template>
