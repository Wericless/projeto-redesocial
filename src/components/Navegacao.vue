<template>
  <div id="navegacao">
    <ul>
      <li><router-link to="/Publicacoes">Publicações</router-link> |</li>
      <li>
        <router-link to="/minhasPublicacoes">Minhas Publicações </router-link>
      </li>

      <li @click="logout">| Sair</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
a {
  color: #7ca971;
  text-decoration: none;

  &:hover {
    color: #111;
  }
}

#navegacao {
  display: flex;
  width: 100%;
  margin-bottom: 50px;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}

li {
  font-size: 2rem;
  padding: 2px 10px;
  cursor: pointer;
  color: #7ca971;

  &:hover {
    color: #111;
  }
}

i {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 1.6rem;
  color: #aaa;
  cursor: pointer;
}
</style>
