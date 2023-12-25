<template>
  <div class="postagens">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.user.name }}</h3>
      <p>{{ post.content }}</p>
      <span>{{ formatarData(post.createdAt) }}</span>

      <button
        class="botaoExcluir"
        @click="excluirPost(post.id)"
        v-if="post.userId == meuId"
      >
        <img
          src="/img/4105949-bin-delete-dustbin-remove-trash-trash-can_113940.png"
          alt="Excluir"
        />
      </button>
      <button class="botaoLike" @click="alternarLike(post)">
        <img v-if="!post.likeAtivo" src="/img/likeNormal.png" alt="Like" />
        <img v-if="post.likeAtivo" src="/img/LikeAtivo.png" alt="Like" />
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
      meuId: localStorage.getItem("id"),
    };
  },
  mounted() {
    this.todosPosts();
  },
  methods: {
    excluirPost(idPost) {
      API.deletarPost(idPost).then(() => {
        alert("postagem excluida!");
        this.todosPosts();
      });
    },
    todosPosts() {
      API.getPostAll().then((response) => {
        this.posts = response.data.map((post) => ({
          ...post,
          likeAtivo: false,
        }));
      });
    },
    alternarLike(post) {
      post.likeAtivo = !post.likeAtivo;
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

.botaoLike {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.botaoLike img {
  width: 25px;
  height: 25px;
}
</style>
