<script setup lang="ts">
import { computed } from "vue";
import { Howler } from "howler";

import HeartIcon from "@/assets/icons/HeartIcon.vue";
import VolumeIcon from "@/assets/icons/VolumeIcon.vue";
import MuteIcon from "@/assets/icons/MuteIcon.vue";

import { usePlayerStore } from "@/stores/player";
import { useUserStore } from "@/stores/user";

const playerStore = usePlayerStore();
const userStore = useUserStore();

const isLiked = computed(() => {
  return userStore.isInLikes(playerStore.currnetSong.id);
});

function like() {
  if (isLiked.value) {
    userStore.removeFromLikes(playerStore.currnetSong.id);
  } else {
    userStore.addToLikes(playerStore.currnetSong);
  }
}

function mute() {
  playerStore.mute = !playerStore.mute;
  if (playerStore.mute) {
    Howler.mute(true);
  } else {
    Howler.mute(false);
  }
}
</script>

<template>
  <div class="flex items-center justify-end lg:w-3/12">
    <button
      class="flex h-10 w-10 items-center justify-center rounded-full outline-none transition-colors duration-300 hover:bg-secondary-900/10 focus:bg-secondary-900/10 dark:hover:bg-primary-900/10 dark:focus:bg-primary-900/10 lg:mr-1 lg:h-14 lg:w-14"
      :class="[
        isLiked ? 'fill-red-500' : 'fill-secondary-900 dark:fill-primary-900',
      ]"
      @click="like()"
    >
      <HeartIcon class="w-5 lg:w-7" />
    </button>

    <button
      class="mr-1 hidden h-14 w-14 items-center justify-center rounded-full fill-secondary-900 outline-none transition-colors duration-300 hover:bg-secondary-900/10 focus:bg-secondary-900/10 dark:fill-primary-900 dark:hover:bg-primary-900/10 dark:focus:bg-primary-900/10 lg:flex"
      @click="mute()"
    >
      <MuteIcon v-if="playerStore.mute" class="w-7" />
      <VolumeIcon v-else class="w-7" />
    </button>

    <div class="slide w-28">
      <input
        class="outline-none"
        v-model="playerStore.volume"
        type="range"
        min="0"
        max="10"
      />
      <progress :value="playerStore.volume" min="0" max="10"></progress>
    </div>
  </div>
</template>
