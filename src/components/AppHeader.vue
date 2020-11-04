<template>
  <section class="header-container">
    <h1 class="header-container__title">Weather app!</h1>
   
    <InputSelect></InputSelect>
    <ChangeTypeBtn></ChangeTypeBtn>
    <GeoButton></GeoButton>
  </section>
</template>

<script>

import GeoButton from './buttons/GeoButtonBtn';
import InputSelect from './buttons/InputSelectBtn';
import ChangeTypeBtn from './buttons/ChangeTypeBtn';
export default {
  name: "app-header",
  data() {
    return{
      // inputData:'',
      // loading:true,
      // isFavouritesFindActive: false
    }
  },
  components: {
    GeoButton,
    InputSelect,
    ChangeTypeBtn
  },
  methods: {
    // findCity(){
    //    this.$store.commit('setInputValue', this.inputData);   
    // },
    // changeInputs() {
    //     this.isFavouritesFindActive = !this.isFavouritesFindActive
    // },
    // chooseByGeo(){
    //       this.$store.dispatch('getCurrentCoord')
    //       .then((data)=>{
    //         this.loading=false;
    //         this.$store.dispatch('loadCityWeatherDataByGeo',data);
    //       })
    //       .catch((error)=>{
    //         return error
    //       })
    //       this.inputData='';
    //       this.$store.commit('setInputValue', this.$store.state.weatherData.name); 
    // }   ,
    // onChangeSelected(e){
    //    this.$store.commit('setInputValue', e.target.value); 
    // }
  },
  computed: {
    // optionsFromStore(){
    //   return this.$store.state.favoriteCities;
    // },
    // selectedValue(){
    //   return this.$store.state.currentCity.name;
    // }
  },
}
</script>