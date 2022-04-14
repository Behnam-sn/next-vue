<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import ArtistCard from "@/components/Cards/ArtistCard.vue";

import { useArtistsStore } from "@/stores/artists";
const artistsStore = useArtistsStore();
</script>

<template>
  <swiper :slides-per-view="'auto'">
    <swiper-slide v-for="artist in artistsStore.artists" :key="artist.id">
      <ArtistCard :artist="artist" />
    </swiper-slide>
  </swiper>
</template>
