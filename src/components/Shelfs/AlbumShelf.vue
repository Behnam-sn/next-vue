<script setup lang="ts">
import AlbumCard from "@/components/Cards/AlbumCard.vue";

import { useAlbumsStore } from "@/stores/albums";
const albumsStore = useAlbumsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <template v-for="album in albumsStore.albums" :key="album.id">
      <AlbumCard :album="album" />
    </template>
  </div>
</template>
