<template>
  <div id="navegacao">
    <ul>
      <li>
        <router-link
          class="ativo"
          :to="{ name: 'Home' }"
          :class="nameRota == 'Home' ? 'ativo' : 'normal'"
        >
          Publicações
        </router-link>
        |
      </li>
      <li>
        <router-link
          :to="{ name: 'Minhaspublicacoes' }"
          :class="nameRota == 'Minhaspublicacoes' ? 'ativo' : 'normal'"
        >
          Minhas Publicações
        </router-link>
      </li>

      <li @click="logout">| <span class="botao-sair"> Sair </span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameRota: null,
    };
  },
  created() {
    this.nameRota = this.$route.name;
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.ativo {
  color: #c4c4c4;
  text-decoration: none;
}

.normal {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #111;
}

.botao-sair:hover {
  color: #111;
}

#navegacao {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
  background-color: #7ca971;
  padding: 15px 0;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}

li {
  font-size: 1.5rem;
  padding: 2px 10px;
  cursor: pointer;
  color: #fff;
}

i {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 1.6rem;
  color: #aaa;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  #navegacao {
    flex-direction: column;
    align-items: center;
  }
  ul {
    margin: 0;
  }
  li {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
}
</style>
