<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import SongCard from "@/components/Cards/SongCard.vue";

import { useSongsStore } from "@/stores/songs";
const songsStore = useSongsStore();
</script>

<template>
  <swiper slides-per-view="auto">
    <swiper-slide v-for="song in songsStore.songs" :key="song.id">
      <SongCard :song="song" />
    </swiper-slide>
  </swiper>
</template>
