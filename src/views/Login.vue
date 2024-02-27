<template>
  <div id="app">
    <div class="icon-img">
      <img
        class="logo"
        src="../assets/pied-piper-logo.png"
        style="max-width: 100%; height: auto"
      />
    </div>

    <div class="login">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="senha" placeholder="Senha" />

      <button @click="login" class="login-button">Entar</button>

      <div class="cadatroEdit">
        <router-link to="/cadastro">Cadastrar-se</router-link>
      </div>
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
    };
  },
  methods: {
    login() {
      const dados = {
        email: this.email,
        password: this.senha,
      };
      API.realizarLogin(dados)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
        })
        .catch((error) => {
          console.error(error);
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;

  background-image: url("/public/img/Papel-de-parede-degrade-verde-133.webp");
}

.icon-img {
  text-align: center;
}

.logo {
  width: 20%;
  height: 20%;
  margin-bottom: 20px;
  margin-left: 70px;
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

.cadatroEdit {
  margin-top: 10px;
}
</style>
