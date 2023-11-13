<template>
  <div id="App">
    <img class="logo" src="../assets/pied-piper-logo.png" />
    <div class="login">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="senha" placeholder="Senha" />
      <button @click="login" class="login-button">Entar</button>
      <p>
        <router-link to="/cadastro">Cadastrar-se</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style></style>
