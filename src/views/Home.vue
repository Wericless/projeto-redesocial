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

<style>
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #7ca971;
}

#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;
}

.top-bar {
  display: flex;
  width: 100%;
}

.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0.63, -0.09, 0.01, 1);
}

#navegacao-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
}

i {
  font-size: 2rem;
}

.open {
  transform: translateX(200px);
}
</style>
