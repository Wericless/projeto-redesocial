<template>
  <Menu />
  <div id="conteudo">
    <Postagens :meuId="meuId" pagina="meus" />
  </div>

  <Rodape />
</template>

<script>
import Menu from "../components/ComponenteMenu.vue";
import Postagens from "../components/ComponentePostagens.vue";
import Rodape from "../components/ComponenteRodape.vue";

export default {
  data() {
    return {
      meuId: localStorage.getItem("id"),
    };
  },
  components: {
    Menu,
    Postagens,
    Rodape,
  },
};
</script>

<style scoped>
#conteudo {
  display: flex;
  width: 80%;
  margin: 0 auto;
  min-height: 81vh;
}
</style>
