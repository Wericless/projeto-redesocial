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

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 17%;
  height: 20%;
  margin-bottom: 15px;
  margin-left: 50px;
}

@media (max-width: 600px) {
  .logo {
    width: 80%;
    height: auto;
    margin-left: 15%;
  }
}
* {
  margin: 0;
  padding: 0;
}

.registro input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  background-color: #e5f0e7;
}

.registro button,
.login button {
  width: 320px;
  height: 40px;
  border: none;
  color: #fff;
  background-color: #3d867f;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.register-button:hover,
.login-button:hover {
  background-color: #567d5e;
}

.register-button:active,
.login-button:active {
  transform: scale(0.95);
}
</style>
