<template>
    <div>
        <div v-if="checkFavorite"
            @click="changeInputs()" 
            class="button" 
            title="Choose city from manual entering">
        </div>
        <div v-if="!checkFavorite"
            @click="changeInputs()"
            class="button" 
            title="Choose city from favourites">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            checkFavorite:false
        }
    },  
    methods: {
        changeInputs(){
            this.checkFavorite = !this.checkFavorite;
        }
    }
}
</script>