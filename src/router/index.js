import { createRouter, createWebHistory } from "vue-router";
import Cadastro from "../views/Cadastro.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    name: "cadastro",
    path: "/cadastro",
    component: Cadastro,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
