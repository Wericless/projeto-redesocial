<template>
  <div class="postagens">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.user.name }}</h3>

      <p v-if="!post[editarPost]">{{ post.content }}</p>

      <div v-else style="text-align: right">
        <textarea v-model="post.content" class="campo-editar-post"></textarea>
        <button @click="post[editarPost] = false" class="botaoEditar">
          CANCELAR
        </button>
        <button
          @click="atualizarPost(post.id, post.content)"
          class="botaoEditar"
        >
          SALVAR
        </button>
      </div>

      <button
        class="botaoExcluir"
        @click="excluirPost(post.id)"
        v-if="post.userId == meuId && !post[editarPost]"
      >
        <img
          src="/img/4105949-bin-delete-dustbin-remove-trash-trash-can_113940.png"
          alt="Excluir"
        />
      </button>
      <button
        class="editarPostagem"
        @click="post[editarPost] = true"
        v-if="post.userId == meuId && !post[editarPost]"
      >
        <img src="/img/edit.png" alt="editar" />
      </button>

      <button class="botaoLike" @click="likeEDislike(post.id)">
        <img v-if="post.liked" src="/img/LikeAtivo.png" alt="Like" />
        <img v-else src="/img/likeNormal.png" alt="Like" />
      </button>
      {{ post.likes.length }}
    </div>
  </div>
</template>

<script>
import API from "@/API";

export default {
  props: {
    meuId: String,
  },
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
    likeEDislike(idPost) {
      API.likeEDislike(idPost).then(() => {
        this.todosPosts();
      });
    },
    atualizarPost(idPost, novoConteudo) {
      let postAtualiado = {
        content: novoConteudo,
      };
      API.atualizarPost(idPost, postAtualiado).then(() => {
        this.todosPosts();
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
  },
};
</script>

<style scoped>
.post {
  margin-bottom: 10px;
  background-color: #7ca971;
  border-radius: 15px;
  padding: 10px;
  position: relative;
}

.campo-editar-post {
  width: 100%;
  padding: 5px 2px;
}

.botaoEditar {
  margin: 5px;
  padding: 5px 10px;
  font-size: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.editarPostagem {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 30px;
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
  cursor: pointer;
}

.botaoLike img {
  width: 25px;
  height: 25px;
}
</style>
