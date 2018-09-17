<template lang="pug">
    ul.movies
      li.movie Star Wars 2
      li.movie Blade Runner 2
</template>

<script>
    export default {
      name: "Test",
      data(){
          return{
              movies:[
                 {title : 'Star Wars'},
                 {title : 'Blade Runner'},
               ],
          }
      },
    }
</script>

<style scoped>


  .movie:not(:last-child) {
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: solid 1px rgba(0, 0, 0, .1);
  }

</style>
