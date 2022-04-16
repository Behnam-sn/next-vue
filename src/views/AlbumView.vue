<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import PlayIcon from "@/assets/icons/PlayIcon.vue";

import { useAlbumsStore } from "@/stores/albums";
import { useArtistsStore } from "@/stores/artists";
import { useSongsStore } from "@/stores/songs";
import { usePlayerStore } from "@/stores/player";

const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();
const playerStore = usePlayerStore();
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

const artists = computed(() => {
  let temp = [];
  if (album.value) {
    for (const artist of album.value.artists) {
      let found = artistsStore.getArtistById(artist?.id);
      if (found) {
        temp.push(found);
      }
    }
  }
  return temp;
});

const songs = computed(() => {
  return songsStore.getSongsByAlbum(id.value);
});
</script>

<template>
  <div class="mt-4 font-Quicksand font-medium">
    <div class="mx-4 flex items-center">
      <div class="w-60">
        <img
          class="rounded-xl shadow-2xl"
          :src="'/img/' + album?.thumbnail"
          :alt="album?.title"
        />
      </div>
      <div class="grow pl-8 pr-4">
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
          <div class="flex">
            <div v-for="(artist, index) in artists" :key="index">
              <router-link
                :to="'/artist/' + artist.id"
                class="mr-2 flex items-center rounded-full bg-primary-800 py-2 px-4 transition duration-300 hover:bg-primary-700"
              >
                <img
                  class="w-11 rounded-full"
                  :src="'/img/' + artist.thumbnail"
                  :alt="artist.name"
                />
                <div class="ml-2 font-normal">
                  {{ artist.name }}
                </div>
              </router-link>
            </div>
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
        class="group relative mx-4 flex items-center rounded-lg py-3 px-4 transition duration-300 hover:bg-primary-800"
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
        <button
          @click="playerStore.playSong(song)"
          class="absolute z-20 flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-tertiary-900 fill-secondary-900 pl-1 transition duration-300 hover:bg-tertiary-800 group-hover:scale-100"
        >
          <PlayIcon class="w-4" />
        </button>
      </div>
    </div>
  </div>
</template>
