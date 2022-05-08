<script setup lang="ts">
import type { Album } from "@/models/album.model";

import PlayButton from "@/components/PlayButton.vue";

import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore();

defineProps<{
  album: Album;
}>();
</script>

<template>
  <div class="card group relative">
    <router-link :to="'/album/' + album.id">
      <div class="p-4 lg:p-6">
        <img
          class="lazyload h-28 w-28 rounded-xl lg:h-44 lg:w-44"
          :data-src="`/img/${album.thumbnail}`"
          :alt="album.title"
        />
        <div class="card-title">
          {{ album.title }}
        </div>
        <div class="card-artists">
          <template v-for="(artist, index) in album.artists" :key="index">
            <router-link
              class="underline-offset-2 hover:underline"
              :to="'/artist/' + artist.id"
            >
              {{ artist.name }}
            </router-link>
            <span
              v-if="
                album.artists.length !== 1 && index !== album.artists.length - 1
              "
            >
              ,
            </span>
          </template>
        </div>
      </div>
    </router-link>
    <PlayButton
      class="bottom-[5.5rem] right-6 group-hover:scale-100 lg:bottom-24 lg:right-8"
      @click="playerStore.playAlbum(album.id)"
    />
  </div>
</template>
