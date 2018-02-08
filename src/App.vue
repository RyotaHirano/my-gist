<template>
  <div id="app">
    <Top/>
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
