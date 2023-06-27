<script>
export default {
    props:{
        myMovie: Object
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div><img :src="`https://image.tmdb.org/t/p/w342/${myMovie.poster_path}`" class="img-fluid" alt="myMovie.info"></div>
                <div>{{ myMovie.title }}</div>
                <div>{{ myMovie.original_title }}</div>
                <div>
                    <img :src="`../../node_modules/country-flag-icons/1x1/${myMovie.original_language.toUpperCase()}.svg`" class="flag">
                </div>
                <div>{{ myMovie.vote_average }}</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .flag{
        width: 20px;
    }
</style>