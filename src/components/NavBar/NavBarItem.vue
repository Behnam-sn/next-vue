<script setup lang="ts">
defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    class="flex flex-col items-center justify-center rounded-md px-2 py-3 transition-colors duration-300"
    :to="address"
  >
    <div class="mb-2 fill-primary-900">
      <slot></slot>
    </div>
    <div
      class="text-center font-Roboto font-normal capitalize text-primary-900"
    >
      {{ text }}
    </div>
  </router-link>
</template>
