<template>
    <div class="home-container">

        <AppHeader></AppHeader>
        <FounCity v-if="checkIfCityIs"></FounCity>
        <div v-else class="home-container__else-message"> 
          {{getAnswer}}
        </div>
      
    </div>
</template>

<script>
import FounCity from '../components/FounCity'
import AppHeader from "../components/AppHeader"
export default {
    components: {
        AppHeader,
        FounCity
    },
    computed:{
        checkIfCityIs(){
            let currentCity=this.$store.getters.getCurrentCity;
            if(typeof currentCity=== 'object' && currentCity !== null){
                   return true;
            }
            return false;
        },
         getAnswer(){
            let currentCity=this.$store.getters.getCurrentCity;
            return currentCity;
        }
   }
}
</script>
