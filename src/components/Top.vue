<template>
  <div class="container">
    <h1>Login</h1>
    <div class="login">
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

}
.login {
  margin: 0 auto;
}
</style>