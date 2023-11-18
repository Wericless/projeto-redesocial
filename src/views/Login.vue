<template>
  <div id="App">
    <img class="logo" src="../assets/pied-piper-logo.png" />
    <div class="login">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="senha" placeholder="Senha" />
      <input type="text" v-model="token" placeholder="Token" />
      <button @click="login" class="login-button">Entar</button>
      <p>
        <router-link to="/cadastro">Cadastrar-se</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import API from "@/API";
export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: "",
      token: "",
    };
  },
  methods: {
    login() {
      const dados = {
        email: this.email,
        senha: this.senha,
        token: this.token,
      };
      API.getUserLogin(dados)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
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
