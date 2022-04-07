<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import ArtistCard from "@/components/ArtistCard.vue";

import { useArtistsStore } from "@/stores/artists";

const artists = useArtistsStore();
</script>

<template>
  <div>
    <TitleBar text="artists" />
    <div class="flex flex-wrap">
      <div v-for="(artist, index) in artists.artists" :key="index">
        <ArtistCard :artist="artist" />
      </div>
    </div>
  </div>
</template>
