<script setup lang="ts">
import AlbumCard from "@/components/AlbumCard.vue";

import { useAlbumsStore } from "@/stores/albums";

const albumsStore = useAlbumsStore();
</script>

<template>
  <div class="no-scrollbar flex snap-x flex-nowrap overflow-x-scroll">
    <template v-for="(album, index) in albumsStore.albums" :key="index">
      <AlbumCard :album="album" />
    </template>
  </div>
</template>
