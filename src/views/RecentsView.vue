<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import SongCard from "@/components/Cards/SongCard.vue";

import HistoryIcon from "@/assets/icons/HistoryIcon.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div>
    <template v-if="userStore.recents.length">
      <TitleBar text="recents" />
      <div class="flex flex-wrap justify-center">
        <div v-for="song in userStore.recents.slice().reverse()" :key="song.id">
          <SongCard :song="song" />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="mx-5 mt-10 flex items-center justify-center rounded-lg bg-primary-800 py-32 transition-colors duration-300 dark:bg-secondary-800 lg:mx-48"
      >
        <HistoryIcon
          class="mr-4 h-16 fill-secondary-400 transition-colors duration-300 dark:fill-primary-400"
        />
        <p
          class="text-center font-Roboto text-lg font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
        >
          No Songs played yet
        </p>
      </div>
    </template>
  </div>
</template>
