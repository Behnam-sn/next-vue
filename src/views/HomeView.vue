<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
let a = "ca";
</script>

<template>
  <main class="bg-red-300">
    <div>home {{ counter.counter }}</div>
    <button @click="counter.increment">add</button>
    <div>{{ a }}</div>
    <div>{{ counter.doubleCount }}</div>
  </main>
</template>
