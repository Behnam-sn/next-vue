<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="font-Quicksand font-bold text-3xl capitalize mt-6 mb-4">
    {{ text }}
  </div>
</template>
