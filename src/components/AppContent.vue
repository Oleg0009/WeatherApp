<template>
  <section class="app-content">
    <!-- <div class="app-content__weather-info-wrapper">
      <div class="weather-info">
        <h2 class="weather-info__title">{{cityName}}</h2>
        <div class="weather-info__content" v-if="weatherData.main">
            <div class="weather-info__content__image">
             <img :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="">
                 <p>{{weatherData.weather[0].main}}</p>
            </div>
            <div class="weather-info__content__temperature">
               <div class="weather-info__content__block temperature">{{weatherData.main.temp}}&#8451;</div>
            </div>
            <div class="weather-info__content__infolist">
              <div class="weather-info__content__infolist-item">Pressure: {{weatherData.main.pressure}}</div>
              <div class="weather-info__content__infolist-item">Humidity: {{weatherData.main.humidity}}%</div>
              <div class="weather-info__content__infolist-item">Wind speed: {{weatherData.wind.speed}} mph</div>
              <div class="weather-info__content__infolist-item">Wind direction: {{calculateWindDirection(weatherData.wind.deg)}}</div>
              <div class="weather-info__content__infolist-item">Sunrise: {{getHoursFromDate(sunrise)}} AM</div>
              <div class="weather-info__content__infolist-item">Sunset: {{getHoursFromDate(sunset)}} PM</div>
            </div>
          <div>
          </div>
        </div>
      </div>
      <div class="time-conditions" v-if="forecastData.list">
        <div class="time-condition-wrapper" v-for="(item, index) in forecastData.list[selectedDayIndex]" :key="index">
          <div @click="loadDayTimeForecast(selectedDayIndex, index)" class="time-condition">
            <div>{{item.dt_txt.slice(12)}}</div>
            <div>{{item.main.temp}}&#8451;</div>
            <div>{{item.weather[0].main}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-content__days" v-if="forecastData.list">
      <div class="day-wrapper" v-for="(item, index) in forecastData.list" :key="index">
        <div @click="changeDay(index)" :class="{'day': true, 'active': selectedDayIndex === index}">
          <p>{{item[0].dt_txt.slice(0, 10)}}</p>  
        </div> 
      </div>
    </div> -->
  </section> 
</template>

<script>

export default {
  name: "app-content",
  data() {
    return{
      // cityName:'',
      // sunrise:'',
      // sunset:'',
      // weatherConditions: [],
      // selectedDayIndex: 0,
      // showCurrendWeather: true
    }
  },
  created() {
     // no sunset and sunrise in each request
      // this.sunset = this.$store.state.weatherData.sys.sunset;
      // this.sunrise = this.$store.state.weatherData.sys.sunrise;
      // this.cityName=this.$store.getters.getCurrentCity[0].name;
      // this.loadWeatherData(this.$store.getters.getCurrentCity[0].name);
  },
  methods:{
    // loadWeatherData(cityName) {
    //           this.$store.dispatch('loadWeatherData', { cityName: cityName }).then(() => {
    //               this.$store.dispatch('loadForecastData', { cityName: cityName }).then(() => {
    //               this.weatherData = this.$store.state.weatherData;
    //               this.forecastData = this.$store.state.forecastData;
    //           })
    //       })
    // },

    // loadCurrentWeather(cityName){
    //   this.$store.dispatch('loadWeatherData', { cityName: cityName }).then(() => {
    //     this.showCurrendWeather = true
    //   })
    // },
    // changeDay(index){
    //   this.selectedDayIndex = index
    // },
    // loadDayTimeForecast(dayIndex, timeIndex){
    //     this.$store.commit('setWeatherData', this.forecastData.list[dayIndex][timeIndex])
    // },
    // getHoursFromDate(milliseconds) {
    //   let date = new Date(milliseconds)
    //   let hours = date.getHours();
    //   let minutes = date.getMinutes();
    //   hours = hours % 12;
    //   hours = hours ? hours : 12;
    //   let strTime = hours + ':' + minutes;
    //   return strTime;
    // },
    // calculateWindDirection(deg){
    //   if(deg === 0){
    //     return "North"
    //   }
    //   if(deg > 0 && deg < 90){
    //     return "Northeast"
    //   }
    //   if(deg === 90){
    //     return "East"
    //   }
    //   if(deg > 90 && deg < 180){
    //     return "Southeast"
    //   }
    //   if(deg === 180){
    //     return "South"
    //   }
    //   if(deg > 180 && deg < 270){
    //     return "Southwest"
    //   }
    //   if(deg === 270){
    //     return "West"
    //   }
    //   if(deg > 180 && deg < 360){
    //     return "Northwest"
    //   }
    // }
  },
  computed:{
    // weatherData() {
    //   return this.$store.state.weatherData
    // },
    // forecastData() {
    //   let forecastData = this.$store.state.forecastData;
    //   if(forecastData.list && forecastData.list[0].dt_txt){
    //     let sortedData = []
    //     for(let i = 0; i < 5; i++){
    //       let oldDate = forecastData.list[0].dt_txt.slice(0, 10);
    //       let filteredArray = forecastData.list.filter((item) => {
    //         return item.dt_txt.slice(0, 10) === oldDate
    //       })
    //       sortedData.push(filteredArray)
    //       sortedData[sortedData.length - 1].forEach(() => {
    //         forecastData.list.shift()
    //       })
    //     }
    //     let updatedData = this.$store.state.forecastData;
    //     updatedData.list = sortedData
    //     return updatedData
    //   } else {
    //     return {}
    //   }
    // }
  }
}
</script>
