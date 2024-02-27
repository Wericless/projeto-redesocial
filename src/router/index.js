import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Publicacoes.vue";
import Cadastro from "../views/Cadastro.vue";
import Login from "../views/Login.vue";
import Minhaspublicacoes from "../views/MinhasPublicacoes.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "cadastro",
    path: "/cadastro",
    component: Cadastro,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },

  {
    name: "Minhaspublicacoes",
    path: "/minhaspublicacoes",
    component: Minhaspublicacoes,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else if (
    (to.name === "Login" || to.name === "cadastro") &&
    localStorage.getItem("token")
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
