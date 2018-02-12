<template>
  <div class="container">
    <div class="container__header">
      <h1>Github Login</h1>
    </div>
    <div class="container__main">
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'

export default {
  name: 'top',

  components: {
    Login
  }
}
</script>

<style class="scss">
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 50px;
  grid-template-areas: "header"
                       "main";
  justify-self: center;
}

.container__header {
  grid-area: header;
  padding: 0 20px;
}

.container__main {
  grid-area: main;
  justify-self: center;
}
</style>