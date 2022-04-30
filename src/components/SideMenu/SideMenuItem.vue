<script setup lang="ts">
defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    class="my-1 flex items-center rounded-md p-2 transition-colors duration-300 hover:bg-tertiary-700"
    :to="address"
  >
    <div class="flex w-6 items-center justify-center fill-primary-900">
      <slot></slot>
    </div>
    <div class="ml-2 font-Roboto font-normal capitalize text-primary-900">
      {{ text }}
    </div>
  </router-link>
</template>
