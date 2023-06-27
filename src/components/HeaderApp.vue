<script>
import { store } from '../store.js'
export default {
    data(){
        return{
          store
        }
    
    },
    methods:{
        
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="d-flex">
                    <input type="text" v-model="store.searchText" class="form-control" placeholder="Cerca qui il tuo film" @keyup.enter="$emit('search')">
                    <button class="btn btn-sm btn-primary p-2 mx-2" @click="$emit('search')">Search</button>

                </div>

            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>