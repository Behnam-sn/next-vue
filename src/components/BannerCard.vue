<script setup lang="ts">
// import { Song } from "@/models/song.model";
import type { Song } from "@/models/song.model";
defineProps<{
  song: Song;
}>();

let imgPath = "/src/assets/img/";
</script>

<template>
  <div class="cursor-pointer rounded-lg bg-primary-700 p-7">
    <img
      class="h-52 w-full rounded-lg object-cover"
      :src="imgPath + song.thumbnail"
      alt=""
    />
    <div class="mt-4 font-Quicksand text-lg font-medium">{{ song.title }}</div>
    <template v-if="song.artists.length === 1">
      <div class="mt-1 font-Quicksand text-sm font-normal text-gray-400">
        {{ song.artists[0] }}
      </div>
    </template>
    <template v-else>
      <div v-for="(artist, index) in song.artists" :key="index">
        {{ artist }}
      </div>
    </template>
  </div>
</template>
