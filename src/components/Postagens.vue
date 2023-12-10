<template>
  <div class="postagens">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.user.name }}</h3>
      <p>{{ post.content }}</p>
      <span>{{ formatarData(post.createdAt) }}</span>

      <button class="botaoExcluir" @click="excluirPost(post.id)">
        <img
          src="/img/4105949-bin-delete-dustbin-remove-trash-trash-can_113940.png"
          alt="Excluir"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import API from "@/API";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.todosPosts();
  },
  methods: {
    todosPosts() {
      API.getPostAll().then((response) => {
        this.posts = response.data;
      });
    },
    removerPostagemPorId(idPost) {
      const index = this.postagens.findIndex(
        (postagem) => postagem.id === idPost
      );
      if (index !== -1) {
        this.postagens.splice(index, 1);
      }
    },
    formatarData(data) {
      const dataFormatada = format(new Date(data), "dd/MM/yyyy", {
        locale: ptBR,
      });
      const horaFormatada = format(new Date(data), "HH:mm:ss", {
        locale: ptBR,
      });
      return `${dataFormatada} ${horaFormatada}`;
    },
  },
};
</script>

<style scoped>
.post {
  margin-bottom: 10px;
  background-color: #7ca971;
  border-radius: 15px;
  padding: 10px;
  position: relative; /* Para posicionar o botão de exclusão */
}

.botaoExcluir {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
