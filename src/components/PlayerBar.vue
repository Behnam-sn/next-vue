<script setup lang="ts">
import { watch } from "vue";
import { zeroPad } from "@/composables/zeroPad";
import { Howl, Howler } from "howler";

import InfoSection from "@/components/PlayerBar/InfoSection.vue";
import ControlsSection from "@/components/PlayerBar/ControlsSection.vue";
import AudioSection from "@/components/PlayerBar/AudioSection.vue";

import { usePlayerStore } from "@/stores/player";
import { useUserStore } from "@/stores/user";

const playerStore = usePlayerStore();
const userStore = useUserStore();

let audio = new Howl({
  src: [`/audio/${playerStore.currnetSong.src}`],
  html5: true,
  loop: playerStore.loop,
  onload: function () {
    playerStore.track = 0;
  },
  onplay: function () {
    playerStore.pause = false;
    requestAnimationFrame(step);
  },
  onseek: function () {
    requestAnimationFrame(step);
  },
  onend: function () {
    if (!playerStore.loop) {
      if (playerStore.currentIndex === playerStore.lastIndex) {
        playerStore.pause = !playerStore.pause;
      } else {
        playerStore.next();
      }
    }
  },
});

function step() {
  if (audio.playing()) {
    playerStore.track = Math.round(audio.seek());
    playerStore.seekMinutes = zeroPad(playerStore.track / 60);
    playerStore.seekSeconds = zeroPad(playerStore.track % 60);
    requestAnimationFrame(step);
  }
}

watch(
  () => playerStore.currnetSong,
  (newSong) => {
    audio.unload();
    audio = new Howl({
      src: [`/audio/${newSong.src}`],
      html5: true,
      autoplay: true,
      loop: playerStore.loop,
      onload: function () {
        playerStore.track = 0;
      },
      onplay: function () {
        playerStore.pause = false;
        requestAnimationFrame(step);
      },
      onseek: function () {
        requestAnimationFrame(step);
      },
      onend: function () {
        if (!playerStore.loop) {
          if (playerStore.currentIndex === playerStore.lastIndex) {
            playerStore.pause = !playerStore.pause;
          } else {
            playerStore.next();
          }
        }
      },
    });

    userStore.addToRecents(newSong);
  }
);

watch(
  () => playerStore.pause,
  (newValue) => {
    if (newValue) {
      audio.pause();
    } else {
      audio.play();
    }
  }
);

watch(
  () => playerStore.track,
  (newValue) => {
    if (playerStore.isMouseDownOnTrack) {
      audio.seek(newValue);
    }
  }
);

watch(
  () => playerStore.volume,
  (newValue) => {
    Howler.volume(newValue / 10);
  }
);

watch(
  () => playerStore.loop,
  (newValue) => {
    audio.loop(newValue);
  }
);

watch(
  playerStore.$state,
  () => {
    playerStore.updatePlayerSettings();
  },
  { deep: true }
);
</script>

<template>
  <div class="player-bar">
    <InfoSection />
    <ControlsSection />
    <AudioSection />
  </div>
</template>
