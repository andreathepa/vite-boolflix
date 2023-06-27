<script>
import { store } from '../store.js';
import AppMovie from './AppMovie.vue'

export default {
    components:{
        AppMovie
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
                <div v-for="(movie,index) in store.moviesObj" :key="index" class="col-4">
                    <AppMovie :myMovie="movie"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>