<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="mt-8 mb-4 font-Quicksand text-3xl font-bold capitalize">
    {{ text }}
  </div>
</template>
