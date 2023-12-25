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
          localStorage.setItem("emial", response.data.email);

          this.$router.push("/");
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
  font-family: "Montserrat", sans-serif;
  font-family: "Oxanium", sans-serif;
  font-family: "Roboto", sans-serif;
  background-image: url("/public/img/Papel-de-parede-degrade-verde-133.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  border-radius: 10px;
}

.icon-img {
  text-align: center;
}

.logo {
  width: 17%;
  height: 20%;
  margin-bottom: 15px;
  margin-left: 50px;
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
