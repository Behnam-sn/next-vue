<script setup lang="ts">
import UserIcon from "@/assets/icons/UserIcon.vue";
import SunIcon from "@/assets/icons/SunIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div
    class="fixed left-52 right-0 top-0 z-20 hidden justify-end bg-primary-900 py-3 px-8 shadow-md shadow-primary-900 lg:flex"
  >
    <button
      class="flex h-11 w-11 items-center justify-center rounded-md bg-secondary-900"
      @click="userStore.changeTheme"
    >
      <SunIcon class="h-7" v-if="userStore.theme === 'light'" />
      <MoonIcon class="h-7" v-else />
    </button>
    <!-- <div class="flex h-14 w-14 items-center justify-center rounded-full">
      <UserIcon class="h-7 fill-secondary-900" />
    </div> -->
  </div>
</template>
