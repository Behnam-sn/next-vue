<script setup lang="ts">
defineProps<{
  text: string;
  address: string;
}>();
</script>

<template>
  <router-link
    :to="address"
    class="font-Roboto font-normal capitalize flex items-center my-2"
  >
    <div class="flex justify-center w-8">
      <slot></slot>
    </div>
    <div class="ml-3">{{ text }}</div>
  </router-link>
</template>
