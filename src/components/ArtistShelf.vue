<script setup lang="ts">
import ArtistCard from "@/components/ArtistCard.vue";

import { useArtistsStore } from "@/stores/artists";

const artistsStore = useArtistsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <template v-for="artist in artistsStore.artists" :key="artist.id">
      <ArtistCard :artist="artist" />
    </template>
  </div>
</template>
