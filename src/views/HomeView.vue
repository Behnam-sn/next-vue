<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import SongShelf from "@/components/Shelfs/SongShelf.vue";
import ArtistShelf from "@/components/Shelfs/ArtistShelf.vue";
import AlbumShelf from "@/components/Shelfs/AlbumShelf.vue";
import RecentsShelf from "@/components/Shelfs/RecentsShelf.vue";
import LikesShelf from "@/components/Shelfs/LikesShelf.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <main>
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
    <template v-if="userStore.likes.length">
      <TitleBar text="likes" />
      <LikesShelf />
    </template>
  </main>
</template>
