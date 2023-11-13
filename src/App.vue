<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
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

body {
  font-family: "Montserrat", sans-serif;
  font-family: "Oxanium", sans-serif;
  font-family: "Roboto", sans-serif;
  background-image: url("/public/img/Papel-de-parede-degrade-verde-133.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
