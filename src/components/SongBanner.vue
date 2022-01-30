<script setup lang="ts">
import { Song } from "@/models/song.model";
defineProps<{
  song: Song;
}>();

let imgPath = "/src/assets/img/";
</script>

<template>
  <div class="bg-primary-700 p-7 rounded-lg cursor-pointer">
    <img
      class="object-cover h-52 w-full rounded-lg"
      :src="imgPath + song.thumbnail"
      alt=""
    />
    <div class="font-Quicksand font-medium text-lg mt-4">{{ song.title }}</div>
    <template v-if="song.artists.length === 1">
      <div class="font-Quicksand font-normal text-sm text-gray-400 mt-1">
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
