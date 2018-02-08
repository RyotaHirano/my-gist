<template>
  <button @click="authGithub()">Login</button>
</template>

<script>
  export default {
    name: 'login',

    methods: {
      authGithub: function() {
        this.$store.dispatch('githubAuth').then(() => {
          console.log(this.$store.state.githubAccessToken)
        })
      }
    }
  }
</script>

<style lang="scss">
button {
  border: 1px solid #333;
  border-radius: 20px;
  padding: 10px 20px;
  width: 200px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    color: #fff;
    background-color: #333;
  }
}
</style>