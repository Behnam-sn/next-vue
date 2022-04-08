<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
// import BannerShelf from "@/components/BannerShelf.vue";
import SongShelf from "@/components/SongShelf.vue";
import ArtistShelf from "@/components/ArtistShelf.vue";
import AlbumShelf from "@/components/AlbumShelf.vue";
</script>

<template>
  <main>
    <!-- <BannerShelf /> -->
    <TitleBar text="songs" />
    <SongShelf />
    <TitleBar text="artists" />
    <ArtistShelf />
    <TitleBar text="albums" />
    <AlbumShelf />
  </main>
</template>
