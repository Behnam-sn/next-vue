import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
