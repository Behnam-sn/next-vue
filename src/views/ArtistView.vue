<script setup lang="ts">
import { ref } from "vue";

import { useRoute } from "vue-router";
import { useArtistsStore } from "@/stores/artists";

const route = useRoute();
const id: any = route.params.id;

const artistsStore = useArtistsStore();
const artist = ref(artistsStore.getArtistById(id));
</script>

<template>
  <div>{{ artist?.name }}</div>
  <div>{{ artist?.monthlyListeners }}</div>
</template>
