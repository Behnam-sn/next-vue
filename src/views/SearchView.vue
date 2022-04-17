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
    <div class="mt-5 px-20">
      <div class="relative flex items-center">
        <SearchIcon class="absolute left-4 h-6 fill-secondary-400" />
        <input
          v-model="searchText"
          class="w-full rounded-full bg-primary-700 px-12 py-3 font-Quicksand text-secondary-900 outline-none transition duration-300 hover:bg-primary-600 focus:bg-primary-600"
          type="text"
          placeholder="Search"
        />
        <button
          v-show="searchText"
          @click="clearSerach"
          class="absolute right-6"
        >
          <CloseIcon
            class="h-7 fill-secondary-500 transition duration-500 dark:text-gray-600"
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
  </div>
</template>
