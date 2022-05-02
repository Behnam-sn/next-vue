<script setup lang="ts">
import { ref, watch } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import TitleBar from "@/components/TitleBar.vue";
import SongCard from "@/components/Cards/SongCard.vue";
import ArtistCard from "@/components/Cards/ArtistCard.vue";
import AlbumCard from "@/components/Cards/AlbumCard.vue";

import SearchIcon from "@/assets/icons/SearchIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

import { useSearchStore } from "@/stores/search";
import { useSongsStore } from "@/stores/songs";
import { useArtistsStore } from "@/stores/artists";
import { useAlbumsStore } from "@/stores/albums";

const searchStore = useSearchStore();
const songsStore = useSongsStore();
const artistsStore = useArtistsStore();
const albumsStore = useAlbumsStore();

const searchText = ref("");
clearSerach();

function clearSerach() {
  searchText.value = "";
  searchStore.songs = [];
  searchStore.artists = [];
  searchStore.albums = [];
}

watch(searchText, (newSearchText) => {
  if (newSearchText) {
    searchStore.songs = songsStore.searchSongsByTitle(newSearchText);
    searchStore.artists = artistsStore.searchArtistsByName(newSearchText);
    searchStore.albums = albumsStore.searchAlbumsByTitle(newSearchText);
  } else {
    clearSerach();
  }
});
</script>

<template>
  <div>
    <div class="lg:px-20">
      <div class="relative flex items-center">
        <SearchIcon
          class="absolute left-4 h-6 fill-secondary-400 transition-colors duration-300 dark:fill-primary-400"
        />
        <input
          v-model="searchText"
          class="w-full rounded-full bg-primary-700 px-12 py-4 font-Quicksand text-secondary-900 outline-none transition-colors duration-300 hover:bg-primary-600 focus:bg-primary-600 dark:bg-secondary-700 dark:text-primary-900 dark:hover:bg-secondary-600 dark:focus:bg-secondary-600"
          type="text"
          placeholder="Search"
        />
        <button
          v-show="searchText"
          @click="clearSerach"
          class="absolute right-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-400 shadow transition-colors duration-300 dark:bg-secondary-400"
        >
          <CloseIcon
            class="h-7 fill-secondary-500 transition-colors duration-300 dark:fill-primary-500"
          />
        </button>
      </div>
    </div>

    <template v-if="searchStore.songs.length">
      <TitleBar text="songs" />
      <swiper :slides-per-view="'auto'">
        <swiper-slide v-for="song in searchStore.songs" :key="song.id">
          <SongCard :song="song" />
        </swiper-slide>
      </swiper>
    </template>
    <template v-if="searchStore.artists.length">
      <TitleBar text="artists" />
      <swiper :slides-per-view="'auto'">
        <swiper-slide v-for="artist in searchStore.artists" :key="artist.id">
          <ArtistCard :artist="artist" />
        </swiper-slide>
      </swiper>
    </template>
    <template v-if="searchStore.albums.length">
      <TitleBar text="albums" />
      <swiper :slides-per-view="'auto'">
        <swiper-slide v-for="album in searchStore.albums" :key="album.id">
          <AlbumCard :album="album" />
        </swiper-slide>
      </swiper>
    </template>

    <div
      class="mx-5 mt-10 flex items-center justify-center rounded-lg bg-primary-800 py-32 transition-colors duration-300 dark:bg-secondary-800 lg:mx-48"
      v-if="!searchText"
    >
      <SearchIcon
        class="mr-4 h-16 fill-secondary-400 transition-colors duration-300 dark:fill-primary-400"
      />
      <p
        class="text-center font-Roboto text-lg font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
      >
        Type Something ...
      </p>
    </div>

    <div
      class="mx-5 mt-10 flex items-center justify-center rounded-lg bg-primary-800 py-32 transition-colors duration-300 dark:bg-secondary-800 lg:mx-48"
      v-if="
        searchText &&
        !searchStore.songs.length &&
        !searchStore.artists.length &&
        !searchStore.albums.length
      "
    >
      <CloseIcon
        class="mr-4 h-16 fill-secondary-400 transition-colors duration-300 dark:fill-primary-400"
      />
      <p
        class="text-center font-Roboto text-lg font-medium text-secondary-900 transition-colors duration-300 dark:text-primary-900"
      >
        Nothing Found
      </p>
    </div>
  </div>
</template>
