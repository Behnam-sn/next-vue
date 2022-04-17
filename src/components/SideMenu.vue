<script setup lang="ts">
import SideMenuTitle from "@/components/SideMenu/SideMenuTitle.vue";
import SideMenuItem from "@/components/SideMenu/SideMenuItem.vue";

import HomeIcon from "@/assets/icons/HomeIcon.vue";
import MusicIcon from "@/assets/icons/MusicIcon.vue";
import MicrophoneIcon from "@/assets/icons/MicrophoneIcon.vue";
import DiscIcon from "@/assets/icons/DiscIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import HistoryIcon from "@/assets/icons/HistoryIcon.vue";
import ListIcon from "@/assets/icons/ListIcon.vue";
</script>

<template>
  <nav
    class="fixed left-0 top-0 z-10 hidden h-screen w-52 flex-col bg-tertiary-900 px-4 pt-4 lg:flex"
  >
    <div class="font-Ubuntu text-5xl font-normal">next</div>

    <!-- <div
      class="mt-6 mb-2 flex items-center rounded-md bg-white/40 px-2 py-2 shadow-lg"
    >
      <div>
        <img class="w-14 rounded-full shadow-lg" src="/img/user.jpg" alt="" />
      </div>
      <div class="ml-3 font-Quicksand font-bold">David</div>
    </div> -->

    <SideMenuTitle text="menu" />
    <SideMenuItem text="home" address="/">
      <HomeIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="search" address="/search">
      <SearchIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="songs" address="/songs">
      <MusicIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="artists" address="/artists">
      <MicrophoneIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="albums" address="/albums">
      <DiscIcon class="h-6" />
    </SideMenuItem>

    <SideMenuTitle text="library" />
    <SideMenuItem text="recents" address="/recents">
      <HistoryIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="liked songs" address="/likedSongs">
      <HeartIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="playlists" address="/playlists">
      <ListIcon class="h-6" />
    </SideMenuItem>
  </nav>
</template>

<style>
.gradient {
  background: linear-gradient(270deg, #b993d6, #8ca6db, #870000, #190a05);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
