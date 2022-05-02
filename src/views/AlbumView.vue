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
  return ("0" + Math.floor(input)).slice(-2);
}

function computeDuration(duration: number) {
  let minutes = zeroPad(duration / 60);
  let seconds = zeroPad(duration % 60);
  return `${minutes}:${seconds}`;
}
</script>

<template>
  <div class="font-Quicksand">
    <div class="mx-2 lg:hidden">
      <div class="mb-5 flex">
        <img
          class="lazyload h-36 w-36 rounded-xl shadow-lg"
          :data-src="`/img/${album?.thumbnail}`"
          :alt="album?.title"
        />

        <div class="ml-5 mt-5">
          <div
            class="mb-4 text-3xl font-bold text-secondary-900 transition-colors duration-300 dark:text-primary-900"
          >
            {{ album?.title }}
          </div>

          <div
            class="flex items-center text-xs font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
          >
            <div>{{ album?.type }}</div>

            <template v-if="album?.type !== 'Single'">
              <div
                class="mx-3 h-1.5 w-1.5 rounded-full bg-secondary-900 transition-colors duration-300 dark:bg-primary-900"
              ></div>
              <div
                class="font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
              >
                {{ album?.tracksCount }} Songs
              </div>
            </template>

            <div class="flex items-center">
              <div
                class="mx-3 h-1.5 w-1.5 rounded-full bg-secondary-900 transition-colors duration-300 dark:bg-primary-900"
              ></div>
              <div
                class="font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
              >
                {{ album?.year }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div v-for="(artist, index) in artists" :key="index">
          <router-link
            :to="'/artist/' + artist.id"
            class="mr-2 flex items-center rounded-full bg-primary-800 py-2 px-4 transition-colors duration-300 hover:bg-primary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700"
          >
            <img
              class="lazyload w-9 rounded-full"
              :data-src="`/img/${artist.thumbnail}`"
              :alt="artist.name"
            />
            <div
              class="ml-2 font-normal text-secondary-900 transition-colors duration-300 dark:text-primary-900"
            >
              {{ artist.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mx-4 hidden flex-row items-center lg:flex">
      <img
        class="lazyload h-60 w-60 rounded-xl shadow-2xl"
        :data-src="`/img/${album?.thumbnail}`"
        :alt="album?.title"
      />
      <div class="grow pl-8 pr-4">
        <div
          class="mb-8 flex flex-row items-center justify-between text-secondary-900 transition-colors duration-300 dark:text-primary-900"
        >
          <div class="text-3xl font-bold">
            {{ album?.title }}
          </div>

          <div class="flex items-center font-semibold">
            <div
              class="text-secondary-900 transition-colors duration-300 dark:text-primary-900"
            >
              {{ album?.type }}
            </div>

            <template v-if="album?.type !== 'Single'">
              <div
                class="mx-3 h-1.5 w-1.5 rounded-full bg-secondary-900 transition-colors duration-300 dark:bg-primary-900"
              ></div>
              <div
                class="text-secondary-900 transition-colors duration-300 dark:text-primary-900"
              >
                {{ album?.tracksCount }} Songs
              </div>
            </template>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex">
            <div v-for="(artist, index) in artists" :key="index">
              <router-link
                :to="'/artist/' + artist.id"
                class="mr-2 flex items-center rounded-full bg-primary-800 py-2 px-4 transition-colors duration-300 hover:bg-primary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700"
              >
                <img
                  class="lazyload w-11 rounded-full"
                  :data-src="`/img/${artist.thumbnail}`"
                  :alt="artist.name"
                />
                <div
                  class="ml-2 font-normal text-secondary-900 transition-colors duration-300 dark:text-primary-900"
                >
                  {{ artist.name }}
                </div>
              </router-link>
            </div>
          </div>

          <div
            class="font-semibold text-secondary-900 transition-colors duration-300 dark:text-primary-900"
          >
            {{ album?.year }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="my-6 h-1 rounded-full bg-primary-500 transition-colors duration-300 dark:bg-secondary-500 lg:my-8"
    ></div>

    <div>
      <div
        class="group relative flex items-center rounded-lg py-5 px-4 transition-colors duration-300 hover:bg-primary-800 dark:hover:bg-secondary-800 lg:mx-4"
        v-for="(song, index) in songs"
        :key="song.number"
      >
        <div
          class="ml-2 w-6 text-lg font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900 lg:ml-4"
        >
          {{ song.number }}
        </div>
        <div class="ml-4 grow lg:ml-8">
          <div
            class="mb-1 text-sm font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900 lg:text-base"
          >
            {{ song.title }}
          </div>
          <div class="flex text-xs text-neutral-400 lg:text-sm">
            <template v-for="(artist, index) in song.artists" :key="index">
              <router-link
                :to="'/artist/' + artist.id"
                class="underline-offset-4 transition-all duration-300 hover:underline"
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
        <div
          class="text-sm font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900 lg:text-base"
        >
          {{ computeDuration(song.duration) }}
        </div>
        <PlayButton
          class="left-2 lg:left-4"
          @click="playerStore.playSongs(songs, index)"
        />
      </div>
    </div>
  </div>
</template>
