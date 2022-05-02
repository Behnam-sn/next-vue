<script setup lang="ts">
import type { Artist } from "@/models/artist.model";

defineProps<{
  artist: Artist;
}>();
</script>

<template>
  <router-link :to="'/artist/' + artist.id">
    <div class="card p-4 lg:p-6">
      <img
        class="lazyload h-28 w-28 rounded-full lg:h-44 lg:w-44"
        :data-src="`/img/${artist.thumbnail}`"
        :alt="artist.name"
      />
      <div class="card-title text-center">
        {{ artist.name }}
      </div>
    </div>
  </router-link>
</template>
