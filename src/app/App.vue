<template>
  <header><Header></Header></header>
  <div class="app__content">
    <main></main>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import Footer from './layout/Footer.vue';
import Header from './layout/Header.vue';

export default {
  name: 'App',
  components: { Footer, Header },
};
</script>

<style scoped>
header {
  height: 125px;
  background: gray;
}

.app__content {
  position: absolute;
  top: 125px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

main {
  flex: 1;
}

main,
footer {
  width: 100%;
}
</style>
