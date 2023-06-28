<script>
export default {
    props:{
        mySerie: Object
    },
    methods:{
        getStars(){
            let star = this.mySerie.vote_average;
            let vote = Math.round(star/2)
            console.log(vote);
            return vote
            

        },

        getNoStars(){
            let noStars = 5 - this.getStars()
            return noStars
        }
    },
    mounted(){
        this.getStars()
        this.getNoStars()
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="content">
                    <img :src="`https://image.tmdb.org/t/p/w342/${mySerie.poster_path}`" class="img-fluid" alt="mySerie.info">
                    <div class="card-content">
                        <div>{{ mySerie.name }}</div>
                        <div>{{ mySerie.original_name }}</div>
                        <div class="overview">{{ mySerie.overview }}</div>
                        <div>
                            <img :src="`../../node_modules/country-flag-icons/1x1/${mySerie.original_language.toUpperCase()}.svg`" class="flag">
                        </div>
                        <div class="d-flex">
                            <div v-for="vote in getStars()"><i class="fa-solid fa-star"></i></div>
                            <div v-for="noStars in getNoStars()"><i class="fa-regular fa-star"></i></div>
        
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>