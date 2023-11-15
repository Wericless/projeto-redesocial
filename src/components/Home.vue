<template>
  <nav>
    <div class="menu-item" v-if="larguraDaTela >= 600">
      <span class="menu-item efeito-item">
        <router-link to="/">Principais Publicações</router-link>
      </span>
      <span class="menu-item efeito-item">
        <router-link to="/minhaspostagens">Minhas Publicações</router-link>
      </span>
      <span class="sair">
        <button class="menu-item efeito-item">Sair</button>
      </span>
    </div>

    <div class="menu-img" v-else>
      <button class="img-home">
        <router-link to="/"
          ><img
            class="tamanhoImg"
            :src="principaisPubli"
            alt="pagina principal"
        /></router-link>
      </button>
      <button class="img-minhas-publicacoes">
        <router-link to="/minhaspostagens"
          ><img class="tamanhoImg" :src="minhasPubli" alt="minha publicações"
        /></router-link>
      </button>
      <button class="img-sair">
        <img class="tamanhoImg" :src="logoutImg" alt="logout" />
      </button>
    </div>
  </nav>
  <Postagens v-if="$route.path === '/'" />
</template>

<script>
import Postagens from "./Postagens.vue";
export default {
  components: {
    Postagens,
  },
  data() {
    return {
      larguraDaTela: window.innerWidth,
      principaisPubli: "/img/home.png",
      minhasPubli: "img/profile-user.png",
      logoutImg: "img/logout.png",
    };
  },

  methods: {
    verificarTamanhoDaTela() {
      this.larguraDaTela = window.innerWidth;
      if (this.larguraDaTela < 600) {
        this.substituirTag();
      } else {
        this.mostrarImagem = false;
      }
    },
    substituirTag() {
      this.mostrarImagem = true;
    },
  },
  mounted() {
    this.verificarTamanhoDaTela();
    window.addEventListener("resize", this.verificarTamanhoDaTela);
  },
};
</script>

<style scoped>
body {
  font-family: "Montserrat", sans-serif;
  font-family: "Oxanium", sans-serif;
  font-family: "Roboto", sans-serif;
  background-image: url("/public/img/back-verde.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

header {
  width: 100vw;
  background-color: #5a7c6f;
  padding: 25px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

nav .efeito-item.active,
nav .efeito-item:hover {
  background-color: #ffffff;
  border-color: #587fff;
  border-radius: 3px;
}

nav .menu-item {
  color: #0e0606;
  padding: 10px 20px;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

nav .sair button {
  color: #0a0404;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  transition: 0.4s;
  position: absolute;
  left: 95%;
  top: 30px;
  transform: translate(-63%, 128%);
  background-color: #0000;
  border: none;
  cursor: pointer;
}

nav .menu-img {
  padding: 10px 20px;
  display: flex;
}

.img-sair {
  color: #fff;
  text-align: center;
  display: flex;
  transition: 0.4s;
  position: absolute;
  left: 80%;
  top: 33px;
  background-color: #0000;
  border: none;
  cursor: pointer;
}

.img-home {
  color: #fff;
  text-align: center;
  display: flex;
  transition: 0.4s;
  position: absolute;
  right: 80%;
  top: 33px;
  background-color: #0000;
  border: none;
  cursor: pointer;
}

.img-minhas-publicacoes {
  color: #fff;
  text-align: center;
  display: flex;
  transition: 0.4s;
  position: absolute;
  left: 44%;
  top: 33px;
  background-color: #0000;
  border: none;
  cursor: pointer;
}

.tamanhoImg {
  width: 40px;
}

@media screen and (max-width: 600px) {
  nav .menu-item,
  nav .sair button {
    display: none;
  }

  nav .out {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
