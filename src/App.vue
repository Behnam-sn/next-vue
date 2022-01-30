<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <SideMenu />
  <div class="lg:ml-52 px-8">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Roboto:wght@400;700&family=Ubuntu&display=swap");
</style>
