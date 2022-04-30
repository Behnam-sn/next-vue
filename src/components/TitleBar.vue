<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="my-4 font-Quicksand text-2xl font-bold capitalize text-secondary-900 transition-colors duration-300 dark:text-primary-900 lg:text-3xl"
  >
    {{ text }}
  </div>
</template>
