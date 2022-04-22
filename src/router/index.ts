import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/songs",
      name: "songs",
      component: () => import("@/views/SongsView.vue"),
    },
    {
      path: "/artists",
      name: "artists",
      component: () => import("@/views/ArtistsView.vue"),
    },
    {
      path: "/albums",
      name: "albums",
      component: () => import("@/views/AlbumsView.vue"),
    },
    {
      path: "/recents",
      name: "recents",
      component: () => import("@/views/RecentsView.vue"),
    },
    {
      path: "/playlists",
      name: "playlists",
      redirect: "/",
    },
    {
      path: "/likedSongs",
      name: "likedSongs",
      component: () => import("@/views/LikedSongsView.vue"),
    },
    {
      path: "/album/:id",
      name: "album",
      component: () => import("@/views/AlbumView.vue"),
    },
    {
      path: "/artist/:id",
      name: "artist",
      component: () => import("@/views/ArtistView.vue"),
    },
  ],
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
