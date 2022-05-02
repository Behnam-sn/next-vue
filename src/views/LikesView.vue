<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import SongCard from "@/components/Cards/SongCard.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div>
    <template v-if="userStore.likes.length">
      <TitleBar text="likes" />
      <div class="flex flex-wrap justify-center">
        <div v-for="song in userStore.likes.slice().reverse()" :key="song.id">
          <SongCard :song="song" />
        </div>
      </div>
    </template>
    <template v-else>
      <div>No Songs got Liked yet</div>
    </template>
  </div>
</template>
