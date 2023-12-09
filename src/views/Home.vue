<template>
  <div id="app">
    <div class="container"></div>
    <NavegacaoMobile />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <div id="navegacao-icon" v-if="mobileView" @click="showNav = !showNav">
          <i class="fas fa-bars"> </i>
        </div>

        <Navegacao v-if="!mobileView" />
      </div>
      <Postagens />
    </div>
  </div>
</template>

<script>
import Navegacao from "../components/Navegacao.vue";
import NavegacaoMobile from "../components/NavegacaoMobile.vue";
import Postagens from "../components/Postagens.vue";
export default {
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    renderizar() {
      this.mobileView = window.innerWidth <= 990;
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
