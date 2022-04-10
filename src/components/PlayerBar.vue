<script setup lang="ts">
import { ref } from "vue";

import ShuffleIcon from "@/assets/icons/ShuffleIcon.vue";
import RepeatIcon from "@/assets/icons/RepeatIcon.vue";
import BackwardIcon from "@/assets/icons/BackwardIcon.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import PlayIcon from "@/assets/icons/PlayIcon.vue";
import PauseIcon from "@/assets/icons/PauseIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import VolumeIcon from "@/assets/icons/VolumeIcon.vue";
import MuteIcon from "@/assets/icons/MuteIcon.vue";

const isMute = ref(false);
const isPaused = ref(false);
</script>

<template>
  <div
    class="fixed bottom-8 left-56 right-4 z-10 flex items-center rounded-xl bg-secondary-900/10 fill-secondary-900 px-6 py-3 font-Quicksand text-secondary-900 shadow-lg backdrop-blur-3xl backdrop-brightness-100"
  >
    <div class="w-16">
      <img src="/5xUwktQM79.jpg" alt="" class="rounded-xl" />
    </div>

    <div class="ml-4">
      <div class="text-lg font-medium">After Hours</div>
      <div class="text-sm font-light text-neutral-300">the Weeknd</div>
    </div>

    <div class="grow">
      <div class="mb-1 flex items-center justify-center">
        <button class="cursor-pointer py-2 px-3">
          <ShuffleIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <BackwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3" @click="isPaused = !isPaused">
          <PauseIcon v-if="isPaused" class="h-7 w-5" />
          <PlayIcon v-else class="h-7 w-5" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <ForwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <RepeatIcon class="w-4" />
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div>0:00</div>
        <input
          type="range"
          min="1"
          max="100"
          value="0"
          id="audio"
          class="slide mx-4 w-[30rem]"
        />
        <div>3:34</div>
      </div>
    </div>

    <div class="mr-4">
      <HeartIcon class="w-7" />
    </div>

    <div class="flex items-center">
      <button class="mr-2 cursor-pointer" @click="isMute = !isMute">
        <MuteIcon v-if="isMute" class="w-7" />
        <VolumeIcon v-else class="w-7" />
      </button>
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value="80"
          id="volume"
          class="slide w-28"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide {
  @apply h-2 cursor-pointer appearance-none overflow-hidden rounded-full bg-secondary-400 outline-none;
}
.slide::-webkit-slider-thumb {
  @apply h-3 w-3 appearance-none bg-secondary-900;
  box-shadow: -100vw 0 0 100vw #f8f9fa;
}

.slide::-moz-range-thumb {
  @apply h-3 w-3 appearance-none bg-secondary-900;
  box-shadow: -100vw 0 0 100vw #f8f9fa;
}
</style>
