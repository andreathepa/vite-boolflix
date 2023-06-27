<script>
export default {
    props:{
        myMovie: Object
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="content_img"><img :src="`https://image.tmdb.org/t/p/w342/${myMovie.poster_path}`" class="img-fluid mb-2 circular" alt="myMovie.info"></div>
                
            </div>
            <div>
                <div>{{ myMovie.title }}</div>
                <div>{{ myMovie.original_title }}</div>
                <div>{{ myMovie.original_language }}</div>
                <div>{{ myMovie.vote_average }}</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>