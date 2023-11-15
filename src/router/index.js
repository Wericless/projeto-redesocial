import { createRouter, createWebHistory } from "vue-router";
import Cadastro from "../views/Cadastro.vue";
import Login from "../views/Login.vue";
import Home from "../components/Home.vue";
import Postagens from "../components/Postagens.vue";
import Minhaspostagens from "../components/MinhasPostagens.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
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
  {
    name: "Postagens",
    path: "/postagens",
    component: Postagens,
  },
  {
    name: "MinhasPostagens",
    path: "/minhaspostagens",
    component: Minhaspostagens,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
