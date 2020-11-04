<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      // forecastData: {},
      // weatherData: {}
    }
  },
  components: {
  },
  created() {
    // this.$store.dispatch('loadWeatherData', { cityName: 'Zhytomyr' }).then(() => {
    //   this.$store.dispatch('loadForecastData', { cityName: 'Zhytomyr' }).then(() => {
    //     this.$store.dispatch('loadCitiesData').then(() => {
    //       return
    //     })
    //   })
    // })
  },
  computed: {
    // dataLoading() {
    //   if(this.$store.state.forecastData.forecastData.list[0].dt_txt){
    //     return this.$store.state.forecastData
    //   } else {
    //     return this.$store.state.forecastData
    //   }
    // }
  },
  methods: {
    // loadWeatherData(cityName) {
    //   this.isLoadingProcess = true;
    //   this.$store.dispatch('loadWeatherData', { cityName: cityName }).then(() => {
    //     this.$store.dispatch('loadForecastData', { cityName: cityName }).then(() => {
    //       this.weatherData = this.$store.state.weatherData;
    //       this.forecastData = this.$store.state.forecastData;
    //       this.isLoadingProcess = false;
    //     })
    //   })
    // }
  }
}
</script>

<style lang="scss">
@import '~normalize.css';
@import './assets/scss/core/index.scss';
</style>
