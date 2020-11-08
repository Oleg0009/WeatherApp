import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCity:{},
    favoriteCities:[]
  },
  mutations:mutations,
  actions:actions,
  getters:getters
})


   // getCurrentCity(state){
    //   let foundCity=state.citiesData.filter(city=>city.name==state.inputValue);
    //   state.currentCity=foundCity[0];
    //   if(foundCity.length!=0){
    //     return foundCity;
    //   }
    //   else if(state.inputValue==""){
    //     return `Enter your City`
    //   }
    //   else{
    //     return `We didn't found ${state.inputValue} please put value in English`
    //   }
    // }




 // addFavoriteCity(state, data) {
    //   state.favoriteCities.push(data);
    // },
    // setCurrentCityWeather(state, data) {
    //   state.currentCityWeather = data;
    // },
    // setCitiesData(state, data) {
    //   state.citiesData = data
    // },
    // setWeatherData(state, data) {
    //   state.weatherData = data
    // },
    // setForecastData(state, data) {
    //   state.forecastData = data
    // },
    // setInputValue(state, data) {
    //   state.inputValue = data;
    // },
    // changeLoading(state,data) {
    //   state.loading = data ;
    // },