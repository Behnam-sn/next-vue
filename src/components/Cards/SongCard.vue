<script setup lang="ts">
import type { Song } from "@/models/song.model";

defineProps<{
  song: Song;
}>();
</script>

<template>
  <router-link :to="'/album/' + song.albumId">
    <div
      class="mr-5 mb-5 h-72 w-48 cursor-pointer snap-start rounded-xl bg-primary-800 p-6 transition duration-300 hover:bg-primary-700 lg:w-56"
    >
      <img class="rounded-xl" :src="'/' + song.thumbnail" :alt="song.title" />
      <div class="mt-2 font-Quicksand font-medium text-secondary">
        {{ song.title }}
      </div>
      <div class="mt-1 flex font-Quicksand text-sm font-normal text-gray-400">
        <template v-for="(artist, index) in song.artists" :key="index">
          <router-link :to="'/artist/' + artist.id">
            {{ artist.name }}
          </router-link>
          <span
            v-if="
              song.artists.length !== 1 && index !== song.artists.length - 1
            "
            class="mr-1"
          >
            ,
          </span>
        </template>
      </div>
    </div>
  </router-link>
</template>
