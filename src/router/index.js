import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Play from "../views/ItemMusic.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/play",
    name: "play",
    component: Play,
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/Login.vue')
  // },
  // {
  //   path: '/infoUser',
  //   name: 'InfoUser',
  //   beforeEnter: (to, from, next) => {
  //     if (
  //       store.state.isLogin ||
  //       store.state.token ||
  //       localStorage.getItem('token')
  //     ) {
  //       next()
  //     } else {
  //       router.push('/login')
  //     }
  //   },
  //   component: () => import('../views/InfoUser.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // if (to.path == '/login' || to.path == '/infoUser') {
  //   store.state.isFooterMusic = false
  // } else {
  //   store.state.isFooterMusic = true
  // }
});

export default router;
