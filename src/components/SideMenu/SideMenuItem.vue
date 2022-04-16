<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    :to="address"
    class="my-1 flex items-center rounded-md fill-secondary-900 p-2 font-Roboto font-normal capitalize text-secondary-900 transition duration-300 hover:bg-tertiary-700"
    :class="{ 'bg-tertiary-800': userStore.currentTab === text }"
    @click="userStore.changeTab(text)"
  >
    <div class="flex w-6 items-center justify-center">
      <slot></slot>
    </div>
    <div class="ml-2">{{ text }}</div>
  </router-link>
</template>
