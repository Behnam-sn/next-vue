<script setup lang="ts">
import { computed } from "vue";

import { useRoute } from "vue-router";
import { useAlbumsStore } from "@/stores/albums";
import { useArtistsStore } from "@/stores/artists";
import { useSongsStore } from "@/stores/songs";

const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();
const route = useRoute();

const id = computed(() => {
  if (typeof route.params.id === "string") {
    return route.params.id;
  } else {
    return "";
  }
});

const album = computed(() => {
  return albumsStore.getAlbumById(id.value);
});

const artist = computed(() => {
  if (album.value) {
    return artistsStore.getArtistById(album.value.artist.id);
  } else {
    return undefined;
  }
});

const songs = computed(() => {
  return songsStore.getSongsByAlbum(id.value);
});
</script>

<template>
  <div class="mt-4 font-Quicksand font-medium">
    <div class="flex items-center">
      <div class="w-60">
        <img
          class="rounded-xl shadow-2xl"
          :src="'/' + album?.thumbnail"
          :alt="album?.title"
        />
      </div>
      <div class="grow px-8">
        <div class="mb-8 flex items-center justify-between">
          <div class="text-3xl font-bold">
            {{ album?.title }}
          </div>
          <div class="flex items-center font-semibold">
            <div>{{ album?.type }}</div>
            <template v-if="album?.type !== 'Single'">
              <div class="mx-3 h-1.5 w-1.5 rounded-full bg-white"></div>
              <div>{{ album?.tracksCount }} Songs</div>
            </template>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link :to="'/artist/' + album?.artist.id">
              <img
                class="w-11 rounded-full"
                :src="'/' + artist?.thumbnail"
                :alt="artist?.name"
              />
            </router-link>
            <router-link :to="'/artist/' + album?.artist.id">
              <div class="ml-4 text-lg font-normal">
                {{ album?.artist.name }}
              </div>
            </router-link>
          </div>
          <div class="font-semibold">
            {{ album?.year }}
          </div>
        </div>
      </div>
    </div>
    <div class="my-8 h-1 rounded-full bg-primary-500"></div>
    <div>
      <div
        class="mb-4 mr-8 flex items-center"
        v-for="song in songs"
        :key="song.number"
      >
        <div class="p-4 text-lg">{{ song.number }}</div>
        <div class="ml-8 grow">
          <div>{{ song.title }}</div>
          <div class="flex text-sm text-neutral-400">
            <template v-for="(artist, index) in song.artists" :key="index">
              <router-link
                :to="'/artist/' + artist.id"
                class="underline-offset-4 transition hover:underline"
              >
                {{ artist.name }}
              </router-link>
              <span
                v-if="
                  song.artists.length !== 1 && index !== song.artists.length - 1
                "
                class="mx-1"
              >
                ,
              </span>
            </template>
          </div>
        </div>
        <div>{{ song.length }}</div>
      </div>
    </div>
  </div>
</template>
