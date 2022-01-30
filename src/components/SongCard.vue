<script setup lang="ts">
import { Song } from "@/models/song.model";
defineProps<{
  song: Song;
}>();

let imgPath = "/src/assets/img/";
</script>

<template>
  <div class="snap-start bg-primary-700 w-48 lg:w-56 p-6 mr-5 rounded-xl">
    <img class="rounded-xl" :src="imgPath + song.thumbnail" alt="" />
    <div class="font-Quicksand font-medium mt-2">{{ song.title }}</div>
    <!-- <div>{{ song.artists }}</div> -->
    <div class="font-Quicksand font-normal mt-1 text-gray-400 text-sm">
      <template v-for="artist in song.artists"> {{ artist }} , </template>
    </div>
  </div>
</template>
