<template>
  <div id="app">
    <NavegacaoMobile />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <div id="navegacao-icon" v-if="mobileView" @click="showNav = !showNav">
          <i class="fas fa-bars"> </i>
        </div>

        <Navegacao v-if="!mobileView" />
      </div>

      <div>
        <textarea
          v-model="textoPostagem"
          placeholder="O que está acontecendo?"
          name=""
          id=""
          cols="30"
          :class="{ 'small-textarea': mobileView }"
          rows="3"
        ></textarea>
        <div id="novaPubli"><button @click="novoPost">POSTAR</button></div>
      </div>

      <div><Postagens /></div>
    </div>
  </div>
</template>

<script>
import API from "@/API";
import Navegacao from "../components/Navegacao.vue";
import NavegacaoMobile from "../components/NavegacaoMobile.vue";
import Postagens from "../components/Postagens.vue";

export default {
  data() {
    return {
      mobileView: true,
      showNav: false,
      publicar: true,
      criar: null,
      textoPostagem: "",
    };
  },

  methods: {
    renderizar() {
      this.mobileView = window.innerWidth <= 990;
    },
    novoPost() {
      API.criarPostagem({ content: this.textoPostagem }).then((response) => {
        this.criar = response.data;
        location.reload();
      });
    },

    excluirPost(idPost) {
      API.deletarPost(idPost).then((response) => {
        this.excluir = response.data;
      });
    },
  },
  components: {
    Navegacao,
    NavegacaoMobile,
    Postagens,
  },
  created() {
    this.renderizar();
    window.addEventListener("resize", this.renderizar);
  },
};
</script>

<style>
#novaPubli {
  margin: 5px 5px 5px 0;
  padding: 5px 5px 5px 0;
}

#novaPubli button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-weight: bold;
}

#novaPubli button:hover {
  background-color: #1375b6;
}
textarea {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  resize: none;
}
textarea:focus {
  border: 2px solid #3498db;
}
.small-textarea {
  width: 80%;
}
</style>
