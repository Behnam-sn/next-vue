<script setup lang="ts">
defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    :to="address"
    class="my-2 flex items-center font-Roboto font-normal capitalize"
  >
    <div class="flex w-6 justify-center">
      <slot></slot>
    </div>
    <div class="ml-2">{{ text }}</div>
  </router-link>
</template>
