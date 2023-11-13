<template>
  <div id="App">
    <img class="logo" src="../assets/pied-piper-logo.png" />
    <div class="registro">
      <input type="text" v-model="name" placeholder="Nome" />
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="senha" placeholder="Senha" />
      <input
        v-if="name && email && senha"
        type="password"
        v-model="confirmSenha"
        placeholder="Confirmar Senha"
      />

      <button @click="registrar" class="register-button">Cadastrar-se</button>
      <p>
        <router-link to="/login">Fazer Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    registrar() {
      if (this.senha === this.confirmSenha) {
        console.log(
          "Registrado com sucesso",
          this.name,
          this.email,
          this.senha
        );
      } else {
        console.log("As senhas não coincidem. Tente novamente.");
      }
    },
  },
};
</script>

<style></style>
