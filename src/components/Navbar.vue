<template>
  <nav>
    <div class="menu-item" v-if="larguraDaTela >= 600">
      <span class="menu-item efeito-item">
        <a href="#">Principais Publicações</a>
      </span>
      <span class="menu-item efeito-item">
        <a href="#">Minhas Publicações</a>
      </span>
      <span class="sair">
        <button class="efeito-item">Sair</button>
      </span>
    </div>

    <div class="menu-img" v-else>
      <button class="out">
        <img
          class="tamanhoImg img-home"
          :src="principaisPublie"
          alt="pagina principal"
        />
      </button>
      <button class="out">
        <img class="tamanhoImg" :src="minhasPubli" alt="minha publicações" />
      </button>
      <button class="out">
        <img class="tamanhoImg img-sair" :src="logoutImg" alt="logout" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      larguraDaTela: window.innerWidth,
      principaisPublie: "/img/home.png",
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
  background-color: #444444;
  border-bottom-color: #587fff;
  border-radius: 3px;
}

nav .menu-item {
  color: #fff;
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
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  transition: 0.4s;
  position: absolute;
  left: 95%;
  top: 30px;
  transform: translate(-63%, 30%);
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
  left: 90%;
  top: 33px;
  transform: translate(-90%, 10%);
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

.out {
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
