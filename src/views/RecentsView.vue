<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import SongCard from "@/components/Cards/SongCard.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div>
    <template v-if="userStore.recents.length">
      <TitleBar text="recents" />
      <div class="flex flex-wrap">
        <div v-for="song in userStore.recents.slice().reverse()" :key="song.id">
          <SongCard :song="song" />
        </div>
      </div>
    </template>
    <template v-else>
      <div>No Songs played yet</div>
    </template>
  </div>
</template>
