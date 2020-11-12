<template>
    <section class="found-city-container" style="text-align:center" v-if="getCityData.name">
        

         <div class="title">
            <p>Current weather </p> 
            <p class="city-name">{{getCityData.name}}</p>
         </div>
        <WeatherConditions 
            :cityWeather="getCityData">
        </WeatherConditions>
        <CityButtons 
            @change-like="changeLike" 
            :liked="getCityData.liked">
        </CityButtons>
        <!-- <router-link to="/city" class="btn">Show weather
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></svg>
            </router-link> -->
    </section>
</template>
<script>
import CityButtons from './buttons/CityButtons'
import WeatherConditions from './WeatherConditions'
// import Loader from './Loader';
export default {
    data() {
        return{
            // cityName:'',
            // forecastData:{},
        }
    },
    components:{
        CityButtons,
        WeatherConditions
    },
    methods: {
           changeLike(){
               this.$store.commit('setLiked',!this.getCityData.liked)
               if(this.getCityData.liked)
                 this.$store.dispatch('checkIfHasCityInStore',this.$store.state.currentCity)
               else
                 this.$store.dispatch('removeByIndex',this.$store.state.currentCity)
                 
                 console.log(  this.$store.state.favoriteCities)
           } 
  },
    computed:{
        getCityData(){
              return this.$store.state.currentCity;
        }
        // getLoader(){
        //     return this.$store.state.loading;
        // }
    },
    
}
</script>