<template>

  <ul class="movie">
    <Movie v-for="movie of movies"
      :key="movie.id"
      :movie="movie"/>
  </ul>

</template>

<script>
  import Movie from './Movie.vue'
  export default {
    name: "Movies",

    components:{
      Movie,
    },
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

