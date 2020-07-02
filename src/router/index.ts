import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import routes from "./routers";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
} as RouterOptions);

export default router;
