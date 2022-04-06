<script setup lang="ts">
import type { Artist } from "@/models/artist.model";

defineProps<{
  artist: Artist;
}>();
</script>

<template>
  <div class="mr-5 h-72 w-48 snap-start rounded-xl bg-primary-800 p-6 lg:w-56">
    <img class="rounded-full" :src="'/' + artist.thumbnail" alt="" />
    <div class="mt-2 text-center font-Quicksand font-medium">
      {{ artist.name }}
    </div>
  </div>
</template>
