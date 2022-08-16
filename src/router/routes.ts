import MainLayout from "../layouts/MainLayout.vue";

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Atividade01 from "../views/Atividade01.vue";

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

    ],
  },
];

export default routes;
