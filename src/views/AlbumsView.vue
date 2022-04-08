<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import AlbumCard from "@/components/AlbumCard.vue";

import { useAlbumsStore } from "@/stores/albums";

const albumsStore = useAlbumsStore();
</script>

<template>
  <div>
    <TitleBar text="songs" />
    <div class="flex flex-wrap">
      <div v-for="album in albumsStore.albums" :key="album.id">
        <AlbumCard :album="album" />
      </div>
    </div>
  </div>
</template>
