import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/songs",
      name: "songs",
      component: () => import("../views/SongsView.vue"),
    },
    {
      path: "/albums",
      name: "albums",
      component: () => import("../views/AlbumsView.vue"),
    },
    {
      path: "/artists",
      name: "artists",
      component: () => import("../views/ArtistsView.vue"),
    },
    {
      path: "/recents",
      name: "recents",
      component: () => import("../views/RecentsView.vue"),
    },
    {
      path: "/likedSongs",
      name: "likedSongs",
      component: () => import("../views/LikedSongsView.vue"),
    },
    {
      path: "/album/:id",
      name: "theAlbum",
      component: () => import("../views/AlbumView.vue"),
    },
    {
      path: "/artist/:id",
      name: "theArtist",
      component: () => import("../views/ArtistView.vue"),
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
