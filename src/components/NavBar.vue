<script setup lang="ts">
import BarsIcon from "@/assets/icons/BarsIcon.vue";
</script>

<template>
  <div
    class="fixed top-0 z-10 w-full bg-primary-600 py-6 px-7 text-secondary-900 transition duration-500 xl:hidden"
  >
    <div class="flex flex-row items-center justify-between">
      <router-link to="/">
        <h1 class="text-2xl">Next</h1>
      </router-link>
      <div class="fill-secondary-900">
        <BarsIcon class="w-7" />
      </div>
    </div>
  </div>
</template>
