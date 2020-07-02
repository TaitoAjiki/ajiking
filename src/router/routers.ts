import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

const router: RouteConfig[] = [
  {
    path: "*",
    name: "home",
    component: Home
  }
];

export default router;
