<script setup lang="ts">
import SongCard from "@/components/SongCard.vue";

import { useSongsStore } from "@/stores/songs";

const songs = useSongsStore();
</script>

<template>
  <div class="flex flex-nowrap overflow-x-scroll no-scrollbar snap-x">
    <div v-for="(song, index) in songs.songs" :key="index">
      <SongCard :song="song" />
    </div>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
