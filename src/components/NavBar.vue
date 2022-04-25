<script setup lang="ts">
import BarsIcon from "@/assets/icons/BarsIcon.vue";
</script>

<template>
  <div
    class="fixed top-0 z-10 w-full bg-tertiary-900 py-4 px-7 text-secondary-900 transition duration-500 lg:hidden"
  >
    <div class="flex flex-row items-center justify-between">
      <router-link to="/">
        <h1 class="font-Ubuntu text-3xl font-normal">Next</h1>
      </router-link>
      <div class="fill-secondary-900">
        <BarsIcon class="w-7" />
      </div>
    </div>
  </div>
</template>
