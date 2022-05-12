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
import SunIcon from "@/assets/icons/SunIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <nav
    class="navigation fixed left-0 top-0 z-20 hidden h-screen w-52 flex-col bg-tertiary-900 px-4 pt-4 lg:flex"
  >
    <div class="flex items-center">
      <div class="font-Ubuntu text-5xl font-normal text-primary-900">next</div>

      <button
        class="mt-2 ml-auto flex h-10 w-10 items-center justify-center rounded-md bg-secondary-900 fill-primary-900 transition-colors duration-300 dark:bg-primary-900 dark:fill-secondary-900"
        @click="userStore.changeTheme()"
      >
        <SunIcon class="h-6" v-if="userStore.theme === 'light'" />
        <MoonIcon class="h-6" v-else />
      </button>
    </div>

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

    <SideMenuItem text="likes" address="/likes">
      <HeartIcon class="h-6" />
    </SideMenuItem>

    <SideMenuItem text="playlists" address="/playlists">
      <ListIcon class="h-6" />
    </SideMenuItem>

    <div
      class="mb-7 mt-auto flex items-center rounded-md bg-primary-900/25 px-2 py-2 shadow-md"
    >
      <img class="w-14 rounded-full" src="/img/user.jpg" alt="" />
      <div class="ml-3 font-Quicksand text-sm font-bold text-primary-900">
        David
      </div>
    </div>
  </nav>
</template>
