<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import ArtistCard from "@/components/Cards/ArtistCard.vue";

import { useArtistsStore } from "@/stores/artists";
const artists = useArtistsStore();
</script>

<template>
  <div>
    <TitleBar text="artists" />
    <div class="flex flex-wrap justify-center">
      <div v-for="artist in artists.artists" :key="artist.id">
        <ArtistCard :artist="artist" />
      </div>
    </div>
  </div>
</template>
