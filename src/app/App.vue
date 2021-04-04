<template>
  <header></header>
  <div class="app__content">
    <main></main>
    <footer></footer>
  </div>
</template>

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
