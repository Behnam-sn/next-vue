<script setup lang="ts">
import type { Artist } from "@/models/artist.model";

defineProps<{
  artist: Artist;
}>();
</script>

<template>
  <router-link :to="'/artist/' + artist.id">
    <div
      class="mr-5 mb-5 h-72 w-48 cursor-pointer rounded-xl bg-primary-800 p-6 transition duration-300 hover:bg-primary-700 lg:w-56"
    >
      <img
        class="rounded-full"
        :src="'/' + artist.thumbnail"
        :alt="artist.name"
      />
      <div class="mt-2 text-center font-Quicksand font-medium">
        {{ artist.name }}
      </div>
    </div>
  </router-link>
</template>
