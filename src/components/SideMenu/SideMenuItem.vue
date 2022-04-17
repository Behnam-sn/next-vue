<script setup lang="ts">
defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    class="my-1 flex items-center rounded-md fill-secondary-900 p-2 font-Roboto font-normal capitalize text-secondary-900 transition duration-300 hover:bg-tertiary-700"
    :to="address"
  >
    <div class="flex w-6 items-center justify-center">
      <slot></slot>
    </div>
    <div class="ml-2">{{ text }}</div>
  </router-link>
</template>
