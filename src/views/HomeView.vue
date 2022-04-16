<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
// import BannerShelf from "@/components/BannerShelf.vue";
import SongShelf from "@/components/Shelfs/SongShelf.vue";
import ArtistShelf from "@/components/Shelfs/ArtistShelf.vue";
import AlbumShelf from "@/components/Shelfs/AlbumShelf.vue";
import RecentsShelf from "@/components/Shelfs/RecentsShelf.vue";
import LikedSongs from "@/components/Shelfs/LikedSongsShelf.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
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
    <template v-if="userStore.recents.length">
      <TitleBar text="recents" />
      <RecentsShelf />
    </template>
    <template v-if="userStore.likedSongs.length">
      <TitleBar text="liked songs" />
      <LikedSongs />
    </template>
  </main>
</template>
