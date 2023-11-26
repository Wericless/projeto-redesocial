<template>
  <div id="app">
    <div class="icon-img">
      <img
        class="logo"
        src="../assets/pied-piper-logo.png"
        style="max-width: 100%; height: auto"
      />
    </div>

    <div class="registro">
      <input type="text" v-model="name" placeholder="Nome" />
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Senha" />
      <input
        type="password"
        v-model="confirmPassword"
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
import API from "@/API";
export default {
  name: "login",
  data() {
    return {
      data: { name: "", email: "", password: "", confirmPassword: "" },
    };
  },
  methods: {
    registrar() {
      if (this.data.password === this.data.confirmPassword) {
        API.postCreateUser(this.data)
          .then((response) => {
            console.log("Registrado com sucesso", response);
          })
          .catch((error) => {
            console.log("Erro ao registrar", error);
          });
      }
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
.icon-img {
  text-align: center;
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
  margin-bottom: 10px;
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
