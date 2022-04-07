<script setup lang="ts">
import { ref } from "vue";

import { useRoute } from "vue-router";
import { useAlbumsStore } from "@/stores/albums";
import { useArtistsStore } from "@/stores/artists";

const route = useRoute();
const id: any = route.params.id;

const albumsStore = useAlbumsStore();
const album = ref(albumsStore.getAlbumById(id));

const artistsStore = useArtistsStore();
const artist = ref();

if (album.value !== undefined) {
  artist.value = artistsStore.getArtistById(album.value.artist.id);
}
</script>

<template>
  <div class="mt-4">
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
          <div class="font-Quicksand text-3xl font-bold">
            {{ album?.title }}
          </div>
          <div class="flex font-Quicksand font-semibold">
            <div>{{ album?.type }}</div>
            <template v-if="album?.type !== 'Single'">
              <div>-</div>
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
              <div class="ml-4 font-Quicksand text-lg font-medium">
                {{ album?.artist.name }}
              </div>
            </router-link>
          </div>
          <div class="font-Quicksand font-semibold">
            {{ album?.year }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
