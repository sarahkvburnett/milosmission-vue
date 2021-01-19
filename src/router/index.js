import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin/animal",
    name: "Animal",
    component: () => import("../views/admin/Animal.vue")
  },
  {
    path: "/admin/animals",
    name: "Animals",
    component: () => import("../views/admin/Animals.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
