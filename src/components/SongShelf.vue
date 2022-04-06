<script setup lang="ts">
import SongCard from "@/components/SongCard.vue";

import { useSongsStore } from "@/stores/songs";

const songs = useSongsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <div v-for="(song, index) in songs.songs" :key="index">
      <SongCard :song="song" />
    </div>
  </div>
</template>
