<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="my-4 font-Quicksand text-2xl font-bold capitalize lg:text-3xl">
    {{ text }}
  </div>
</template>
