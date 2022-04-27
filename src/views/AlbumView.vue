<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import PlayButton from "@/components/PlayButton.vue";

import { useAlbumsStore } from "@/stores/albums";
import { useArtistsStore } from "@/stores/artists";
import { useSongsStore } from "@/stores/songs";
import { usePlayerStore } from "@/stores/player";

const route = useRoute();
const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();
const songsStore = useSongsStore();
const playerStore = usePlayerStore();

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

function zeroPad(input: number) {
  return ("0" + Math.round(input)).slice(-2);
}

function computeDuration(duration: number) {
  let minutes = zeroPad(duration / 60);
  let seconds = zeroPad(duration % 60);
  return `${minutes}:${seconds}`;
}
</script>

<template>
  <div class="font-Quicksand font-medium">
    <div class="mx-2 lg:hidden">
      <div class="mb-5 flex">
        <img
          class="lazyload h-36 w-36 rounded-xl bg-primary-500 shadow-2xl"
          :data-src="`/img/${album?.thumbnail}`"
          :alt="album?.title"
        />

        <div class="ml-5 mt-5">
          <div class="mb-4 text-3xl font-bold">
            {{ album?.title }}
          </div>

          <div class="flex items-center text-sm">
            <div>{{ album?.type }}</div>

            <template v-if="album?.type !== 'Single'">
              <div class="mx-3 h-1.5 w-1.5 rounded-full bg-white"></div>
              <div>{{ album?.tracksCount }} Songs</div>
            </template>

            <div class="flex items-center">
              <div class="mx-3 h-1.5 w-1.5 rounded-full bg-white"></div>
              <div>{{ album?.year }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div v-for="(artist, index) in artists" :key="index">
          <router-link
            :to="'/artist/' + artist.id"
            class="mr-2 flex items-center rounded-full bg-primary-800 py-2 px-4 transition duration-300 hover:bg-primary-700"
          >
            <img
              class="lazyload w-9 rounded-full"
              :data-src="`/img/${artist.thumbnail}`"
              :alt="artist.name"
            />
            <div class="ml-2 font-normal">
              {{ artist.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mx-4 hidden flex-row items-center lg:flex">
      <img
        class="lazyload h-60 w-60 rounded-xl bg-primary-500 shadow-2xl"
        :data-src="`/img/${album?.thumbnail}`"
        :alt="album?.title"
      />
      <div class="grow pl-8 pr-4">
        <div class="mb-8 flex flex-row items-center justify-between">
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
                  class="lazyload w-11 rounded-full"
                  :data-src="`/img/${artist.thumbnail}`"
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

    <div class="my-6 h-1 rounded-full bg-primary-500 lg:my-8"></div>

    <div>
      <div
        class="group relative flex items-center rounded-lg py-5 px-4 transition duration-300 hover:bg-primary-800 lg:mx-4"
        v-for="(song, index) in songs"
        :key="song.number"
      >
        <div class="ml-4 w-6 text-lg">{{ song.number }}</div>
        <div class="ml-4 grow lg:ml-8">
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
        <div>{{ computeDuration(song.duration) }}</div>
        <PlayButton @click="playerStore.playSongs(songs, index)" />
      </div>
    </div>
  </div>
</template>
