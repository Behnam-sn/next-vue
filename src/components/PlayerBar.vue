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
    class="fixed bottom-8 left-56 right-4 z-10 flex items-center rounded-xl bg-white/10 fill-secondary-900 px-6 py-3 font-Quicksand text-secondary-900 backdrop-blur-3xl backdrop-brightness-100"
  >
    <div class="w-16">
      <img src="/5xUwktQM79.jpg" alt="" class="rounded-xl" />
    </div>

    <div class="ml-4">
      <div class="text-lg font-medium">After Hours</div>
      <div class="text-sm font-light text-neutral-300">the Weeknd</div>
    </div>

    <div class="grow">
      <div class="flex items-center justify-center">
        <button class="cursor-pointer py-2 px-3">
          <ShuffleIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <BackwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3" @click="isPaused = !isPaused">
          <PauseIcon v-if="isPaused" class="w-5" />
          <PlayIcon v-else class="w-5" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <ForwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <RepeatIcon class="w-4" />
        </button>
      </div>
      <!-- <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" id="myRange" />
      </div> -->
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
          id="vulome"
          class="vulome h-2 cursor-pointer appearance-none overflow-hidden rounded-full outline-none"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vulome::-webkit-slider-thumb {
  @apply h-3 w-3 appearance-none;
  background: #04aa6d;
  box-shadow: -100vw 0 0 100vw #04aa6d;
}

/* .vulome::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
} */
</style>
