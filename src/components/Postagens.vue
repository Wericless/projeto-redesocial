<template>
  <div class="postagens">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.user.name }}</h3>
      <p>{{ post.content }}</p>
      <span>{{ formatarData(post.createdAt) }}</span>
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

<style>
.post {
  margin-bottom: 10px;
  background-color: #7ca971;
  border-radius: 15px;
  padding: 10px 10px 10px 10px;
}
</style>
