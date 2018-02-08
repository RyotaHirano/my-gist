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