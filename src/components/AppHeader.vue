<template>
  <section class="header-container">
    <h1 class="header-container__title">Weather app!</h1>
    <div class="header-container__input-wrapper">
      <select v-if="isFavouritesFindActive" 
       name="" id="favouritesSelect"
       @change="onChangeSelected"
       class="header-container__select-field">
             <option v-for="option in optionsFromStore" :key="option.id" :value="option.name">{{option.name}}</option>
       </select>
      <input v-if="!isFavouritesFindActive"
       v-model='inputData'
       @change="onInputChange"
       type="text" 
       class="header-container__text-field"
        placeholder="Enter your city">
      <div class="header-container__find-button" title="Find city weather data"></div>
    </div>
    <div v-if="isFavouritesFindActive" @click="changeInputs()" 
    class="button header-container__find-from-input-button" 
    title="Choose city from manual entering"></div>
    <div v-if="!isFavouritesFindActive" @click="changeInputs()" class="button header-container__find-from-favorites-button" title="Choose city from favourites"></div>
    <div class="button header-container__find-by-location-button" @click="chooseByGeo" title="Choose city by your location"></div>
  </section>
</template>

<script>

export default {
  name: "app-header",
  data() {
    return{
      options:[
      ],
      inputData:'',
      isFavouritesFindActive: false
    }
  },
  methods: {
    changeInputs() {
        this.isFavouritesFindActive = !this.isFavouritesFindActive
    },
    onInputChange(){       
        this.$store.commit('setInputValue', this.inputData); 
    },
    chooseByGeo(){
          this.$store.dispatch('getCurrentCoord')
          .then((data)=>{
            this.$store.dispatch('loadCityWeatherDataByGeo',data);
          })
          .catch((error)=>{
            console.log(error)
          })
          this.$store.commit('setInputValue', this.$store.state.weatherData.name); 
    }   ,
    onChangeSelected(e){
    console.log(e)
    }
  },
  computed: {
    optionsFromStore(){
      return this.$store.state.favoriteCities;
    }
  },
}
</script>

<style>

</style>
