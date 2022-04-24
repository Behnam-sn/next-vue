<script setup lang="ts">
import "lazysizes";
import "swiper/css";

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
  <SideMenu />
  <PlayerBar />
  <div class="px-8 pb-52 lg:ml-52">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Roboto:wght@400;700&family=Ubuntu&display=swap");
</style>
