<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>{{ id }}</div>
</template>
