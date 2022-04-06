<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="mt-4 mb-1 font-Roboto font-bold uppercase">{{ text }}</div>
</template>
