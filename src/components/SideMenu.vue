<script setup lang="ts">
import SideMenuTitle from "@/components/SideMenu/SideMenuTitle.vue";
import SideMenuItem from "@/components/SideMenu/SideMenuItem.vue";

import HomeIcon from "@/assets/icons/HomeIcon.vue";
import MusicIcon from "@/assets/icons/MusicIcon.vue";
import DiscIcon from "@/assets/icons/DiscIcon.vue";
import MicrophoneIcon from "@/assets/icons/MicrophoneIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import HistoryIcon from "@/assets/icons/HistoryIcon.vue";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import ListIcon from "@/assets/icons/ListIcon.vue";
</script>

<template>
  <nav
    class="fixed left-0 top-0 h-screen w-52 pt-4 pl-4 hidden xl:flex flex-col bg-[#4974A5] z-10"
  >
    <div class="font-Ubuntu font-normal text-5xl">next</div>

    <SideMenuTitle text="menu" />
    <SideMenuItem text="home" address="/">
      <HomeIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="songs" address="/songs">
      <MusicIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="Albums" address="/albums">
      <DiscIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="artists" address="/artists">
      <MicrophoneIcon class="h-6" />
    </SideMenuItem>

    <SideMenuTitle text="library" />
    <SideMenuItem text="recents" address="/recents">
      <HistoryIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="liked songs" address="/likedSongs">
      <HeartIcon class="h-6" />
    </SideMenuItem>

    <SideMenuTitle text="playlists" />
    <SideMenuItem text="create" address="/">
      <PlusIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="pop" address="/">
      <ListIcon class="h-6" />
    </SideMenuItem>
    <SideMenuItem text="r&b" address="/">
      <ListIcon class="h-6" />
    </SideMenuItem>
  </nav>
</template>
