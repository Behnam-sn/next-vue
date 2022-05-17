<script setup lang="ts">
import { computed } from "vue";
import { zeroPad } from "@/composables/zeroPad";

import ShuffleIcon from "@/assets/icons/ShuffleIcon.vue";
import RepeatIcon from "@/assets/icons/RepeatIcon.vue";
import BackwardIcon from "@/assets/icons/BackwardIcon.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import PlayIcon from "@/assets/icons/PlayIcon.vue";
import PauseIcon from "@/assets/icons/PauseIcon.vue";

import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();

const durationMinutes = computed(() => {
  return zeroPad(playerStore.currnetSong.duration / 60);
});

const durationSeconds = computed(() => {
  return zeroPad(playerStore.currnetSong.duration % 60);
});
</script>

<template>
  <div class="lg:w-6/12">
    <div class="flex items-center justify-center lg:mb-1">
      <button
        class="mx-1 hidden h-10 w-10 items-center justify-center rounded-full outline-none transition duration-300 focus:bg-secondary-900/10 dark:focus:bg-primary-900/10 lg:flex"
        :class="[
          playerStore.shuffle
            ? 'fill-secondary-900 hover:bg-secondary-900/10  dark:fill-primary-900 dark:hover:bg-primary-900/10 '
            : 'fill-secondary-900/30 hover:fill-secondary-900/60 dark:fill-primary-900/30 dark:hover:fill-primary-900/60',
        ]"
      >
        <ShuffleIcon class="w-4" />
      </button>

      <button
        class="mx-1 hidden h-10 w-10 items-center justify-center rounded-full fill-secondary-900 outline-none transition-colors duration-300 hover:bg-secondary-900/10 focus:bg-secondary-900/10 dark:fill-primary-900 dark:hover:bg-primary-900/10 dark:focus:bg-primary-900/10 lg:flex lg:h-11 lg:w-11"
        @click="playerStore.pervious()"
      >
        <BackwardIcon class="w-4" />
      </button>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full fill-secondary-900 outline-none transition-colors duration-300 hover:bg-secondary-900/10 focus:bg-secondary-900/10 dark:fill-primary-900 dark:hover:bg-primary-900/10 dark:focus:bg-primary-900/10 lg:mx-1 lg:h-12 lg:w-12"
        @click="playerStore.pause = !playerStore.pause"
      >
        <PlayIcon v-if="playerStore.pause" class="ml-1 w-4 lg:w-6" />
        <PauseIcon v-else class="w-4 lg:w-6" />
      </button>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full fill-secondary-900 outline-none transition-colors duration-300 hover:bg-secondary-900/10 focus:bg-secondary-900/10 dark:fill-primary-900 dark:hover:bg-primary-900/10 dark:focus:bg-primary-900/10 lg:mx-1"
        @click="playerStore.next()"
      >
        <ForwardIcon class="w-3 lg:w-4" />
      </button>

      <button
        class="mx-1 hidden h-10 w-10 items-center justify-center rounded-full outline-none transition duration-300 focus:bg-secondary-900/10 dark:focus:bg-primary-900/10 lg:flex"
        :class="[
          playerStore.loop
            ? 'fill-secondary-900 hover:bg-secondary-900/10  dark:fill-primary-900 dark:hover:bg-primary-900/10 '
            : 'fill-secondary-900/30 hover:fill-secondary-900/60 dark:fill-primary-900/30 dark:hover:fill-primary-900/60',
        ]"
        @click="playerStore.loop = !playerStore.loop"
      >
        <RepeatIcon class="w-4" />
      </button>
    </div>

    <div class="flex items-center justify-center">
      <div class="hidden w-10 lg:block">
        {{ `${playerStore.seekMinutes}:${playerStore.seekSeconds}` }}
      </div>
      <div class="slide mx-4 w-[30rem]">
        <input
          class="outline-none"
          v-model="playerStore.track"
          type="range"
          min="0"
          :max="playerStore.currnetSong.duration"
          @mousedown="playerStore.isMouseDownOnTrack = true"
          @mouseup="playerStore.isMouseDownOnTrack = false"
        />
        <progress
          :value="playerStore.track"
          min="0"
          :max="playerStore.currnetSong.duration"
        ></progress>
      </div>
      <div class="hidden w-10 lg:block">
        {{ `${durationMinutes}:${durationSeconds}` }}
      </div>
    </div>
  </div>
</template>
