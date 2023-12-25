<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
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
}

.top-bar {
  display: flex;
  width: 100%;
}

.content {
  position: absolute;
  width: auto;
  top: 10px;
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
