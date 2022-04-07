<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="my-4 font-Quicksand text-3xl font-bold capitalize">
    {{ text }}
  </div>
</template>
