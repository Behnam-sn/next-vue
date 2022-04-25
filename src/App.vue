<script setup lang="ts">
import "lazysizes";
import "swiper/css";

import NavBar from "@/components/NavBar.vue";
import SideMenu from "@/components/SideMenu.vue";
import PlayerBar from "@/components/PlayerBar.vue";

import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/user";
import { usePlayerStore } from "@/stores/player";

const userStore = useUserStore();
const playerStore = usePlayerStore();

userStore.fetchUserData();
playerStore.fetchPlayerSettings();
</script>

<template>
  <NavBar />
  <SideMenu />
  <PlayerBar />
  <div class="mt-24 px-6 pb-52 lg:ml-52 lg:mt-5 lg:px-8">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Roboto:wght@400;700&family=Ubuntu&display=swap");
</style>
