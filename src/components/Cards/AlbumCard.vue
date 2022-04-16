<script setup lang="ts">
import type { Album } from "@/models/album.model";

defineProps<{
  album: Album;
}>();
</script>

<template>
  <router-link :to="'/album/' + album.id">
    <div
      class="mr-5 mb-5 h-72 w-48 cursor-pointer rounded-xl bg-primary-800 p-6 transition duration-300 hover:bg-primary-700 lg:w-56"
    >
      <img
        class="rounded-xl"
        :src="'/img/' + album.thumbnail"
        :alt="album.title"
      />
      <div class="mt-2 font-Quicksand font-medium">{{ album.title }}</div>
      <div class="mt-1 flex font-Quicksand text-sm font-normal text-gray-400">
        <template v-for="(artist, index) in album.artists" :key="index">
          <router-link :to="'/artist/' + artist.id">
            {{ artist.name }}
          </router-link>
          <span
            v-if="
              album.artists.length !== 1 && index !== album.artists.length - 1
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
