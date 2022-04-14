<script setup lang="ts">
import { RouterView } from "vue-router";

import "swiper/css";
import SideMenu from "@/components/SideMenu.vue";
import PlayerBar from "@/components/PlayerBar.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
userStore.fetchLocalStorageData();
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
