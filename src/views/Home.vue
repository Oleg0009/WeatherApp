<template>
    <div class="home-container">

        <AppHeader></AppHeader>
        <Locations v-if="checkIfCityIs"></Locations>
        <div v-else class="home-container__else-message"> 
          {{getAnswer}}
        </div>
      
    </div>
</template>

<script>
import Locations from '../components/Locations'
import AppHeader from "../components/AppHeader"
export default {
    components: {
        AppHeader,
        Locations
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
