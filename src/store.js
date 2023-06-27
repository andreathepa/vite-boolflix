import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=9d01b1a000b17a121d214a73eb7a3cbb',
    searchText:'',
    moviesObj: [],

})