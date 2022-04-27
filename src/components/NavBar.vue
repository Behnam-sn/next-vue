<script setup lang="ts">
import { ref } from "vue";

import NavBarItem from "@/components/NavBar/NavBarItem.vue";

import BarsIcon from "@/assets/icons/BarsIcon.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import MusicIcon from "@/assets/icons/MusicIcon.vue";
import MicrophoneIcon from "@/assets/icons/MicrophoneIcon.vue";
import DiscIcon from "@/assets/icons/DiscIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import HistoryIcon from "@/assets/icons/HistoryIcon.vue";
import ListIcon from "@/assets/icons/ListIcon.vue";

const show = ref(true);
</script>

<template>
  <div class="fixed top-0 z-20 w-full lg:hidden">
    <div
      class="flex flex-row items-center justify-between bg-tertiary-900 py-4 px-3 text-secondary-900"
    >
      <router-link to="/">
        <h1 class="font-Ubuntu text-3xl font-normal">Next</h1>
      </router-link>
      <button class="fill-secondary-900" @click="show = !show">
        <BarsIcon class="w-6" />
      </button>
    </div>
    <Transition name="bounce">
      <nav
        class="grid origin-top grid-cols-4 gap-2 overflow-hidden bg-tertiary-900 p-3 transition-transform"
        v-if="show"
      >
        <NavBarItem text="home" address="/">
          <HomeIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="search" address="/search">
          <SearchIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="songs" address="/songs">
          <MusicIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="artists" address="/artists">
          <MicrophoneIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="albums" address="/albums">
          <DiscIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="recents" address="/recents">
          <HistoryIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="liked" address="/likedSongs">
          <HeartIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="playlists" address="/playlists">
          <ListIcon class="h-5" />
        </NavBarItem>
      </nav>
    </Transition>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
