<script setup lang="ts">
import type { Artist } from "@/models/artist.model";

defineProps<{
  artist: Artist;
}>();
</script>

<template>
  <router-link :to="'/artist/' + artist.id">
    <div
      class="mr-5 mb-5 h-72 w-56 cursor-pointer select-none rounded-xl bg-primary-800 p-6 transition duration-300 hover:bg-primary-700"
    >
      <img
        class="lazyload h-44 w-44 rounded-full bg-primary-500"
        :data-src="`/img/${artist.thumbnail}`"
        :alt="artist.name"
      />
      <div class="mt-3 text-center font-Quicksand font-medium">
        {{ artist.name }}
      </div>
    </div>
  </router-link>
</template>
