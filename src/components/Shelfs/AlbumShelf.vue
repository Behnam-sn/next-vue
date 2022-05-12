<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import AlbumCard from "@/components/Cards/AlbumCard.vue";

import { useAlbumsStore } from "@/stores/albums";
const albumsStore = useAlbumsStore();
</script>

<template>
  <swiper slides-per-view="auto">
    <swiper-slide v-for="album in albumsStore.albums" :key="album.id">
      <AlbumCard :album="album" />
    </swiper-slide>
  </swiper>
</template>
