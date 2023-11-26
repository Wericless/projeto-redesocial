<template>
  <div id="navegacao-mobile">
    <ul>
      <li><router-link to="/Publicacoes">Publicações</router-link></li>
      <li>
        <router-link to="/minhasPublicacoes">Minhas Publicações</router-link>
      </li>
      <li>Sobre</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navegacao-mobile {
  padding: 20px 0 0 0;
}

ul {
  list-style: none;
  width: 200px;
  padding-left: 10px;
}

li {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #111;
  }
}

a {
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #111;
  }
}
</style>
