<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <SideMenu />
  <div class="px-8 pb-52 lg:ml-52">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Roboto:wght@400;700&family=Ubuntu&display=swap");
</style>
