<script setup lang="ts">
import type { Artist } from "@/models/artist.model";

defineProps<{
  artist: Artist;
}>();
</script>

<template>
  <router-link :to="'/artist/' + artist.id">
    <div
      class="mr-3 mb-3 h-52 w-36 cursor-pointer select-none rounded-xl bg-primary-800 p-4 transition duration-300 hover:bg-primary-700 lg:mb-5 lg:mr-5 lg:h-72 lg:w-56 lg:p-6"
    >
      <img
        class="lazyload h-28 w-28 rounded-full bg-primary-500 lg:h-44 lg:w-44"
        :data-src="`/img/${artist.thumbnail}`"
        :alt="artist.name"
      />
      <div class="mt-3 text-center font-Quicksand font-medium">
        {{ artist.name }}
      </div>
    </div>
  </router-link>
</template>
