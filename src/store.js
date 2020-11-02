import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey:'d720d6dde2bed6cf6e6d650907931956',
    loading:true
  },
  mutations:{
    addFavoriteCity(state, data) {
      state.favoriteCities.push(data);
    },
    setCurrentCityWeather(state, data) {
      state.currentCityWeather = data;
    },
    setCitiesData(state, data) {
      state.citiesData = data
    },
    setWeatherData(state, data) {
      state.weatherData = data
    },
    setForecastData(state, data) {
      state.forecastData = data
    },
    setInputValue(state, data) {
      state.inputValue = data;
    },
    changeLoading(state,data) {
      state.loading = data ;
    },
  },
  actions:{
    getCurrentCoord(){
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
    // loadCityWeatherDataByGeo: (context,data) => {
    //   let lat = data.coords.latitude;
    //   let lng = data.coords.longitude;
    //   context.commit('changeLoading', true);
    //     fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${context.state.apiKey}&units=metric`)
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(data => {
    //        context.commit('setCurrentCityWeather', data)
    //        context.commit('setWeatherData', data);
    //     });
    //     context.commit('changeLoading', false);
    // },
    // loadWeatherData (context, payload) {
    //   context.commit('changeLoading', true);
    //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${payload.cityName}&appid=${context.state.apiKey}&units=metric`)
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     context.commit('setWeatherData', data)
    //     context.commit('changeLoading', false);
    //   });
    // },
    // loadForecastData (context, payload) {
    //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${payload.cityName}&appid=${context.state.apiKey}&units=metric`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     context.commit('setForecastData', data)
    //   });
    // },
    // loadWeatherByCoord(context) {
    //   let lng = context.state.currentCity.lng;
    //   let lat = context.state.currentCity.lat;
    //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${context.state.apiKey}&units=metric`)
    //    .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     context.commit('setCurrentCityWeather', data)
    //     context.commit('setWeatherData', data);
    //   });
    // },
  },
  getters:{
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
  }

})
