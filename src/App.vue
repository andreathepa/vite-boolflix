<script>
import { store } from './store.js';
import axios from 'axios';

import HeaderApp from './HeaderApp.vue';

export default {
  components:{
      HeaderApp,
    },
    data(){
        return{
          store,
        }
    
    },
    mounted(){
        axios.get(store.apiUrl).then((response) => {
           store.movies = response.data.results;
           
        })
    }
}
</script>
<template lang="">
  <div>
    <HeaderApp />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>