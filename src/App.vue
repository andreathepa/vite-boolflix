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
        console.log(store.searchText)

        let myUrl = store.apiUrl;

        if(store.searchText !== ''){
          myUrl += `&query=${store.searchText}`;
        }

        axios.get(myUrl).then((response) => {
           store.moviesObj = response.data.results;
           console.log(store.moviesObj);
           
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