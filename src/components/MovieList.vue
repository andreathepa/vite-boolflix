<script>
import { store } from '../store.js';
import AppMovie from './AppMovie.vue';
import AppSerie from './AppSerie.vue'


export default {
    components:{
        AppMovie,
        AppSerie
    },
    data(){
        return{
          store
        }
    
    }
    
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="mt-5">
                    <h3>MOVIES</h3>
                </div>
                <div v-for="(movie,index) in store.moviesObj" :key="index" class="col-4">
                    <AppMovie :myMovie="movie"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="mt-5">
                    <h3>SERIE TV</h3>
                </div>
                <div v-for="(serie,index) in store.serieObj" :key="index" class="col-4">
                    <AppSerie :mySerie="serie"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>