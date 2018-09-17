<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message"/>
  </div>

</template>

<script>
    export default {
        name: "Test",
      data(){
          return{
            message : 'Hello World from Single-file components'
          }
      }
    }
</script>

<style scoped>
  p{
    color : dimgray;
  }

</style>
