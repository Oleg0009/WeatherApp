<template>
    <section>
       <div class="city-container">
        <div class="city-container__like-block" @click="addCurrentCityToFavorite">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514C512,93.417,453.532,30,376,30z"/>
                </svg>
        </div>
        {{getCityName}}       
        <router-link to="/city" class="btn">Show weather
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></svg>
        </router-link>
       </div>
    </section>
</template>
<script>
export default {
    data() {
        return{
            cityName:'',
            forecastData:{},
            weatherData:{}
        }
    },
    methods: {
        loadWeatherData(cityName) {
            this.$store.dispatch('loadWeatherData', { cityName: cityName }).then(() => {
                this.$store.dispatch('loadForecastData', { cityName: cityName }).then(() => {
                this.weatherData = this.$store.state.weatherData;
                this.forecastData = this.$store.state.forecastData;
            })
         })
        },
        addCurrentCityToFavorite(e){
            if(e.currentTarget.classList.contains('active')){
                e.currentTarget.classList.remove('active')
            }
            else{
                e.currentTarget.classList.add('active')
                this.$store.commit('addFavoriteCity',this.$store.state.currentCityWeather);
            }
        }
    
  },
    computed:{
        getCityName(){
           this.$store.dispatch('loadWeatherByCoord');
           this.loadWeatherData(this.$store.getters.getCurrentCity[0].name);
           return this.$store.getters.getCurrentCity[0].name;
        },
        getCity(){
           return this.$store.getters.getCurrentCityByCoord;
        },
        getCurrentWeather(){
           return this.$store.state.currentCityWeather;
        },
    },
    
}
</script>