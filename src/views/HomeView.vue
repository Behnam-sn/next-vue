<script setup lang="ts">
import { useSongsStore } from "@/stores/songs";
import SongBanner from "@/components/SongBanner.vue";

const songs = useSongsStore();
</script>

<template>
  <main>
    <div class="grid lg:grid-cols-2 gap-6">
      <SongBanner :song="songs.songs[0]" />
      <SongBanner :song="songs.songs[1]" />
    </div>
  </main>
</template>
