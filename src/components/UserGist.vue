<template>
  <h2>Gists</h2>
</template>

<script>
export default {
  name: 'user-gist',

  beforeMount() {
    if(!this.isAuthorized()) {
      this.$router.push('/')
    }
  },

  methods: {
    isAuthorized: function() {
      return this.$store.state.githubAccessToken !== '' && this.$store.state.githubAccessToken !== null
    },

    fetchGist: function() {

    }
  }
}
</script>