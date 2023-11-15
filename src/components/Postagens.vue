<template>
  <div id="postagens">
    <h1>postagem</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
      pretium diam. In ut aliquet dui. Nam malesuada elit interdum dolor
      eleifend, accumsan aliquet massa consequat. Aliquam venenatis nisi et orci
      placerat pharetra. Maecenas laoreet leo at convallis semper. Cras feugiat
      metus sed ligula congue posuere. Nulla vestibulum ex eget molestie
      interdum. Nunc posuere ex in ultricies laoreet. Sed rutrum nunc elementum,
      pellentesque nisi sed, rhoncus erat. Curabitur at venenatis augue, ac
      viverra nibh. Vivamus quis tristique libero. Etiam id orci tempor, tempus
      urna a, pellentesque ex. Donec gravida pellentesque dictum. Proin ut
      tortor eros.
    </p>
    <p>
      Nunc posuere ex in ultricies laoreet. Sed rutrum nunc elementum,
      pellentesque nisi sed, rhoncus erat. Curabitur at venenatis augue, ac
      viverra nibh. Vivamus quis tristique libero. Etiam id orci tempor, tempus
      urna a, pellentesque ex. Donec gravida pellentesque dictum. Proin ut
      tortor eros.
    </p>
    <p>
      Vivamus quis tristique libero. Etiam id orci tempor, tempus urna a,
      pellentesque ex. Donec gravida pellentesque dictum. Proin ut tortor eros.
    </p>
  </div>
</template>

<script>
import API from "@/API";

export default {
  data() {
    return {
      postagens: [],
    };
  },
  mounted() {
    this.consultarPosts();
  },

  methods: {
    consultarPosts() {
      API.getPost()
        .then((res) => {
          this.postagens = res;
        })
        .catch((erro) => {});
    },
  },
};
</script>

<style>
#postagens {
  display: flex;
  flex-direction: column;
  text-align: left;
}

p {
  margin: 25px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>
