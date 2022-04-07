<script setup lang="ts">
import { ref } from "vue";

import { useRoute } from "vue-router";
import { useAlbumsStore } from "@/stores/albums";
import { useArtistsStore } from "@/stores/artists";
import { useSongsStore } from "@/stores/songs";

const route = useRoute();
const id: any = route.params.id;

const albumsStore = useAlbumsStore();
const album = ref(albumsStore.getAlbumById(id));

const artistsStore = useArtistsStore();
const artist = ref();

if (album.value !== undefined) {
  artist.value = artistsStore.getArtistById(album.value.artist.id);
}

const songsStore = useSongsStore();
const songs = ref(songsStore.getSongsByAlbum(id));
</script>

<template>
  <div class="mt-4 font-Quicksand font-medium">
    <div class="flex items-center">
      <div class="w-60">
        <img
          class="rounded-xl"
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
              <router-link :to="'/artist/' + artist.id">
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
