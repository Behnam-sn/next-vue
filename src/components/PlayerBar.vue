<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Howl } from "howler";

import ShuffleIcon from "@/assets/icons/ShuffleIcon.vue";
import RepeatIcon from "@/assets/icons/RepeatIcon.vue";
import BackwardIcon from "@/assets/icons/BackwardIcon.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import PlayIcon from "@/assets/icons/PlayIcon.vue";
import PauseIcon from "@/assets/icons/PauseIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import VolumeIcon from "@/assets/icons/VolumeIcon.vue";
import MuteIcon from "@/assets/icons/MuteIcon.vue";

import { usePlayerStore } from "@/stores/player";
import { useUserStore } from "@/stores/user";

const playerStore = usePlayerStore();
const userStore = useUserStore();

var sound = new Howl({
  src: [`/audio/${playerStore.currnetSong.src}`],
});

const isMute = ref(false);
// const isPaused = ref(false);

const isLiked = computed(() => {
  return userStore.isInLikedSong(playerStore.currnetSong.id);
});

function likeSong() {
  if (isLiked.value) {
    userStore.removeFromLikedSongs(playerStore.currnetSong);
  } else {
    userStore.addToLikedSongs(playerStore.currnetSong);
  }
}

function play() {
  if (playerStore.isPaused) {
    sound.play();
  } else {
    sound.pause();
  }

  playerStore.isPaused = !playerStore.isPaused;
}

watch(
  () => playerStore.currnetSong,
  (newSong) => {
    console.log("hel");
    sound.unload();
    sound = new Howl({
      src: [`/audio/${newSong.src}`],
    });

    sound.play();

    // if (!playerStore.isPaused) {
    //   sound.play();
    // }
  }
);
</script>

<template>
  <div
    class="fixed bottom-4 left-56 right-4 z-10 flex items-center justify-between rounded-xl bg-secondary-900/10 fill-secondary-900 px-6 py-3 font-Quicksand text-secondary-900 shadow-lg backdrop-blur-3xl backdrop-brightness-100"
  >
    <div class="flex w-3/12 items-center">
      <div class="w-16">
        <img
          :src="'/img/' + playerStore.currnetSong.thumbnail"
          alt=""
          class="rounded-xl"
        />
      </div>

      <div class="ml-6 overflow-hidden">
        <router-link
          class="text-lg font-medium"
          :to="'/album/' + playerStore.currnetSong.albumId"
        >
          {{ playerStore.currnetSong.title }}
        </router-link>
        <div class="flex text-sm font-light text-neutral-300">
          <template
            v-for="(artist, index) in playerStore.currnetSong.artists"
            :key="index"
          >
            <router-link
              class="underline-offset-2 transition hover:underline"
              :to="'/artist/' + artist.id"
            >
              {{ artist.name }}
            </router-link>
            <span
              v-if="
                playerStore.currnetSong.artists.length !== 1 &&
                index !== playerStore.currnetSong.artists.length - 1
              "
              class="mx-1"
            >
              ,
            </span>
          </template>
        </div>
      </div>
    </div>

    <div class="w-6/12">
      <div class="mb-1 flex items-center justify-center">
        <button class="cursor-pointer py-2 px-3">
          <ShuffleIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3" @click="playerStore.pervious">
          <BackwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3" @click="play">
          <PlayIcon v-if="playerStore.isPaused" class="h-7 w-5" />
          <PauseIcon v-else class="h-7 w-5" />
        </button>
        <button class="cursor-pointer py-2 px-3" @click="playerStore.next">
          <ForwardIcon class="w-4" />
        </button>
        <button class="cursor-pointer py-2 px-3">
          <RepeatIcon class="w-4" />
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-10">0:00</div>
        <input
          type="range"
          min="1"
          max="100"
          value="0"
          id="audio"
          class="slide mx-4 w-[30rem]"
        />
        <div class="w-10">{{ playerStore.currnetSong.length }}</div>
      </div>
    </div>

    <div class="flex w-3/12 items-center justify-end">
      <button @click="likeSong" :class="{ 'fill-red-500': isLiked }">
        <HeartIcon class="w-7" />
      </button>
      <button class="mx-4 cursor-pointer" @click="isMute = !isMute">
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
