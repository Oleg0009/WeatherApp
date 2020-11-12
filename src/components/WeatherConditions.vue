<template>
      <div class="main">
            <div class="temperature-container">
                 <img 
                    :src="`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`" 
                    alt="">
                 <h2 class="temperature">
                    {{ cityWeather.main.temp }}&#8451;
                 </h2>       
            </div>
            <div class="weather-conditions">
                <p> Temp max -   {{cityWeather.main.temp_max}}&#8451;</p>
                <p> Temp min -   {{cityWeather.main.temp_min}}&#8451;</p>
                <p> Pressure -   {{cityWeather.main.pressure}} mbar</p>
                <p> Humidity -   {{cityWeather.main.humidity}} %</p>
            </div>
       
         </div>
</template>

<script>

export default {
    props:{
        cityWeather:Object
    },
  methods: {
  }
}
</script>