<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
import MovieList from './components/MovieList.vue';


export default {
  components:{
      HeaderApp,
      MovieList
    },
    data(){
        return{
          store,
        }
    
    },
    mounted(){
      this.searchMovie()
    },
    methods:{
      searchMovie(){

        let myUrl = store.apiUrl;
        let myUrlSerie = store.apiUrlSerie;


        if(store.searchText !== ''){
          myUrl += `&query=${store.searchText}`;
          myUrlSerie += `&query=${store.searchText}`;

        }

        // Chiamata per riempire array movie
        axios.get(myUrl).then((response) => {
           store.moviesObj = response.data.results;
           
        })
        // Chiamata per riempire array serie tv
        axios.get(myUrlSerie).then((response) => {
           store.serieObj = response.data.results;
           
        })

    }

    }
}
</script>
<template lang="">
  <div>
    <HeaderApp @search="searchMovie"/>
    <MovieList />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>