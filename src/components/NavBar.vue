<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

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
import SunIcon from "@/assets/icons/SunIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const route = useRoute();
const isCollapsed = ref(true);

function collapse() {
  var content = document.querySelector(".collapsible") as HTMLElement;

  if (content) {
    if (content.style.maxHeight) {
      content.style.removeProperty("max-height");
      isCollapsed.value = true;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      isCollapsed.value = false;
    }
  }
}

watch(
  () => route.path,
  () => {
    if (!isCollapsed.value) {
      collapse();
    }
  }
);
</script>

<template>
  <nav class="fixed top-0 z-20 w-full bg-tertiary-900 lg:hidden">
    <div class="flex flex-row items-center py-3 px-3">
      <router-link to="/">
        <h1 class="font-Ubuntu text-3xl font-normal text-primary-900">Next</h1>
      </router-link>

      <button
        class="mr-4 ml-auto flex h-11 w-11 items-center justify-center rounded-md bg-secondary-900 fill-primary-900 transition-colors duration-300 dark:bg-primary-900 dark:fill-secondary-900"
        @click="userStore.changeTheme()"
      >
        <SunIcon class="h-7" v-if="userStore.theme === 'light'" />
        <MoonIcon class="h-7" v-else />
      </button>

      <button @click="collapse()">
        <BarsIcon class="mr-1 h-8 fill-primary-900" />
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

        <NavBarItem text="likes" address="/likes">
          <HeartIcon class="h-5" />
        </NavBarItem>

        <NavBarItem text="playlists" address="/playlists">
          <ListIcon class="h-5" />
        </NavBarItem>
      </div>
    </div>
  </nav>
</template>
