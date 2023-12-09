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
      <div class="postUsuario">
        <div v-for="post in posts" :key="post.id" class="post">
          <h3>{{ post.user.name }}</h3>
          <p>{{ post.content }}</p>
          <span>{{ formatarData(post.createdAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navegacao from "../components/Navegacao.vue";
import NavegacaoMobile from "../components/NavegacaoMobile.vue";
export default {
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  components: {
    Navegacao,
    NavegacaoMobile,
  },
  methods: {
    renderizar() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  mounted() {
    this.meusPosts();
  },
  meusPosts() {
    API.postUsuario().then((response) => {
      this.posts = response.data;
    });
  },

  created() {
    this.renderizar();
    window.addEventListener("resize", this.renderizar);
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
