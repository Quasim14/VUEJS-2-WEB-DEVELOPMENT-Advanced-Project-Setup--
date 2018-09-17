<template>
  <div>
    <article class="article">
      <h3 class="title">Movies list</h3>
    </article>

    <ul>
      <li v-for="movie in movies" class="movie">
        {{ movie.title}}
      </li>
    </ul>
  </div>
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

<style lang="less" scoped >
  .article
    .title{
      border-bottom: solid 3px rgba(red, .2)
    }


</style>
