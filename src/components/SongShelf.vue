<script setup lang="ts">
import SongCard from "@/components/SongCard.vue";

import { useSongsStore } from "@/stores/songs";

const songsStore = useSongsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <template v-for="(song, index) in songsStore.songs" :key="index">
      <SongCard :song="song" />
    </template>
  </div>
</template>
