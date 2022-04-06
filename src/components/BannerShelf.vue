<script setup lang="ts">
import BannerCard from "@/components/BannerCard.vue";

import { useSongsStore } from "@/stores/songs";

const songs = useSongsStore();
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <BannerCard :song="songs.songs[0]" />
    <BannerCard :song="songs.songs[1]" />
  </div>
</template>
