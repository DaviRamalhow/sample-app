import MainLayout from "../layouts/MainLayout.vue";

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Atividade01 from "../views/Atividade01.vue";
import Atividade02 from "../views/Atividade02.vue";

export const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "/about",
        name: "AboutView",
        component: AboutView,
      },
      {
        path: "/atividade01",
        name: "atividade01",
        component: Atividade01,
      },
      {
        path: "/atividade02",
        name: "atividade02",
        component: Atividade02,
      },

    ],
  },
];

export default routes;
