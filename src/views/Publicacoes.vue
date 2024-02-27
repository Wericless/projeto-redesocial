<template>
  <Menu />

  <div id="conteudo">
    <div>
      <textarea
        v-model="textoPostagem"
        placeholder="O que está acontecendo?"
        name=""
        id=""
        cols="30"
        class="textarea"
        rows="3"
      ></textarea>
      <div id="novaPubli"><button @click="novoPost">POSTAR</button></div>
    </div>

    <Postagens :meuId="meuId" pagina="todos" />
  </div>

  <Rodape />
</template>

<script>
import Menu from "../components/ComponenteMenu.vue";
import Postagens from "../components/ComponentePostagens.vue";
import Rodape from "../components/ComponenteRodape.vue";
import API from "@/API";

export default {
  data() {
    return {
      meuId: localStorage.getItem("id"),
      mobileView: true,
      showNav: false,
      publicar: true,
      criar: null,
      textoPostagem: "",
    };
  },
  methods: {
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
    Menu,
    Postagens,
    Rodape,
  },
};
</script>

<style scoped>
.textarea {
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  margin: 0;
}

#conteudo {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  min-height: 81vh;
}

#novaPubli {
  text-align: right;
  margin: 10px 0;
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
</style>
