<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import SongCard from "@/components/Cards/SongCard.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <swiper :slides-per-view="'auto'">
    <swiper-slide
      v-for="song in userStore.likes.slice().reverse()"
      :key="song.id"
    >
      <SongCard :song="song" />
    </swiper-slide>
  </swiper>
</template>
