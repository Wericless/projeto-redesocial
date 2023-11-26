import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cadastro from "../views/Cadastro.vue";
import Login from "../views/Login.vue";
import Publicacoes from "../components/Publicacoes.vue";
import Minhaspublicacoes from "../components/MinhasPublicacoes.vue";

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
    name: "Publicacoes",
    path: "/publicacoes",
    component: Publicacoes,
  },
  {
    name: "Minhaspublicacoes",
    path: "/minhaspublicacoes",
    component: Minhaspublicacoes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
