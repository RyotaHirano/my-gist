<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top'

export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

button,
input,
select,
textarea {
  outline: none;
  appearance: none;
  border-radius: 0;
  &:focus {
    outline: none;
  }
}
</style>
