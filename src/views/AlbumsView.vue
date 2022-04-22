<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import AlbumCard from "@/components/Cards/AlbumCard.vue";

import { useAlbumsStore } from "@/stores/albums";
const albumsStore = useAlbumsStore();
</script>

<template>
  <div>
    <TitleBar text="albums" />
    <div class="flex flex-wrap justify-center">
      <div v-for="album in albumsStore.albums" :key="album.id">
        <AlbumCard :album="album" />
      </div>
    </div>
  </div>
</template>
