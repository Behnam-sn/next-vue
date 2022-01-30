<script setup lang="ts">
import SongBanner from "@/components/SongBanner.vue";
import TitleBar from "@/components/TitleBar.vue";
import SongShelf from "@/components/SongShelf.vue";

import { useSongsStore } from "@/stores/songs";

const songs = useSongsStore();
</script>

<template>
  <main>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SongBanner :song="songs.songs[0]" />
      <SongBanner :song="songs.songs[1]" />
    </div>
    <TitleBar text="songs" />
    <SongShelf />
  </main>
</template>
