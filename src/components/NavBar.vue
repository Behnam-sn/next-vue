<script setup lang="ts">
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

function collapse() {
  var content = document.querySelector(".collapsible") as HTMLElement;

  if (content) {
    if (content.style.maxHeight) {
      content.style.removeProperty("max-height");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
</script>

<template>
  <nav class="fixed top-0 z-20 w-full bg-tertiary-900 lg:hidden">
    <div class="flex flex-row items-center justify-between py-4 px-3">
      <router-link to="/">
        <h1 class="font-Ubuntu text-3xl font-normal text-secondary-900">
          Next
        </h1>
      </router-link>

      <button @click="collapse">
        <BarsIcon class="w-6 fill-secondary-900" />
      </button>
    </div>
    <div
      class="navigation collapsible max-h-0 overflow-hidden transition-all duration-500"
    >
      <div class="grid grid-cols-4 gap-2 p-3">
        <NavBarItem text="home" address="/">
          <HomeIcon class="h-5" />
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

        <NavBarItem text="search" address="/search">
          <SearchIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="recents" address="/recents">
          <HistoryIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="likes" address="/likedSongs">
          <HeartIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="playlists" address="/playlists">
          <ListIcon class="h-5" />
        </NavBarItem>
      </div>
    </div>
  </nav>
</template>
