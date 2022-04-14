<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
// import BannerShelf from "@/components/BannerShelf.vue";
import SongShelf from "@/components/Shelfs/SongShelf.vue";
import ArtistShelf from "@/components/Shelfs/ArtistShelf.vue";
import AlbumShelf from "@/components/Shelfs/AlbumShelf.vue";
import RecentsShelf from "@/components/Shelfs/RecentsShelf.vue";
import LikedSongs from "@/components/Shelfs/LikedSongsShelf.vue";
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
    <TitleBar text="recents" />
    <RecentsShelf />
    <TitleBar text="liked songs" />
    <LikedSongs />
  </main>
</template>
