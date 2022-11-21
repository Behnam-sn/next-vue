<script setup lang="ts">
import "lazysizes";
import "swiper/css";

import NavBar from "@/components/NavBar.vue";
import PlayerBar from "@/components/PlayerBar.vue";
import SideMenu from "@/components/SideMenu.vue";

import { usePlayerStore } from "@/stores/player";
import { useUserStore } from "@/stores/user";
import { RouterView } from "vue-router";

const userStore = useUserStore();
const playerStore = usePlayerStore();

userStore.fetchTheme();
userStore.fetchUserData();
playerStore.fetchPlayerSettings();
</script>

<template>
  <NavBar />
  <SideMenu />
  <PlayerBar />
  <div class="mt-20 px-3 pb-52 lg:ml-52 lg:mt-6 lg:px-8">
    <router-view></router-view>
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Roboto:wght@400;700&family=Ubuntu&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
