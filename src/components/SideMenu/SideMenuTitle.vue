<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="font-Roboto font-bold uppercase mt-4">{{ text }}</div>
</template>
