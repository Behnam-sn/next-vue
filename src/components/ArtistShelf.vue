<script setup lang="ts">
import ArtistCard from "@/components/ArtistCard.vue";

import { useArtistsStore } from "@/stores/artists";

const artists = useArtistsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <div v-for="(artist, index) in artists.artists" :key="index">
      <ArtistCard :artist="artist" />
    </div>
  </div>
</template>
