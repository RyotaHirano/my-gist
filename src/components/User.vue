<template>
  <div>
    <h1>User Name</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',

  created: function() {
    this.$router.push({
      name: 'UserGist'
    })
  }
}
</script>