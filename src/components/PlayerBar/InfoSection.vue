<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
</script>

<template>
  <div class="flex grow items-center overflow-hidden lg:w-3/12 lg:grow-0">
    <img
      class="h-12 w-12 rounded-xl lg:h-16 lg:w-16"
      :src="`/img/${playerStore.currnetSong.thumbnail}`"
      :alt="playerStore.currnetSong.title"
    />

    <div class="ml-3 overflow-hidden lg:ml-6">
      <router-link
        class="text-ellipsis whitespace-nowrap font-medium lg:text-lg"
        :to="`/album/${playerStore.currnetSong.albumId}`"
      >
        {{ playerStore.currnetSong.title }}
      </router-link>
      <div
        class="text-ellipsis whitespace-nowrap text-xs font-light text-secondary-500 transition-colors duration-300 dark:text-primary-500 lg:text-sm"
      >
        <template
          v-for="(artist, index) in playerStore.currnetSong.artists"
          :key="index"
        >
          <router-link
            class="underline-offset-2 hover:underline"
            :to="`/artist/${artist.id}`"
          >
            {{ artist.name }}
          </router-link>
          <span
            v-if="
              playerStore.currnetSong.artists.length !== 1 &&
              index !== playerStore.currnetSong.artists.length - 1
            "
          >
            ,
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
