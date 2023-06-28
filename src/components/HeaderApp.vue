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
    <div class="container-fluid background p-4">
        <div class="row">
            <div class="col">
                <div class="content">
                    <img src="../assets/img/logo-boolflix@4x.png" class="logo" alt="">
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex">
                    <input type="text" v-model="store.searchText" class="form-control" placeholder="Cerca qui il tuo film" @keyup.enter="$emit('search')">

                </div>

            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>

    .background{
        background-color: black;
    }
    .logo{
        width:120px
    }
</style>