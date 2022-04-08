<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import SongCard from "@/components/SongCard.vue";

import { useSongsStore } from "@/stores/songs";

const songsStore = useSongsStore();
</script>

<template>
  <div>
    <TitleBar text="songs" />
    <div class="flex flex-wrap">
      <div v-for="song in songsStore.songs" :key="song.id">
        <SongCard :song="song" />
      </div>
    </div>
  </div>
</template>
