<template>
  <header>
      <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from '../main'

export default {
  props: {
      title : {
          type: String
      }
  },
  methods: {
      changeTitle: function () {
        //   this.$emit('changeTitle','Vue Wizard');
        this.title="Vue Wizard";
        bus.$emit('changeTitle','Vue Wizard');
      }
  }
}
</script>

<style scoped>
  header {
      background: lightgreen;
      padding: 7px;
  }
  h1 {
      color: #222;
      text-align: center;
  }
 
</style>
