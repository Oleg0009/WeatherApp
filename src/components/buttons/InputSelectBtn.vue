<template>
   <div class="header-container__input-wrapper">
        <select
            name="" 
            id="favouritesSelect"
            @change="onChangeSelected"
            class="header-container__select-field">
            <!-- <option v-for="option in optionsFromStore" :key="option.id" :value="option.name">{{option.name}}</option> -->
        </select>
        <input 
            v-model='inputData'
            type="text" 
            class="header-container__text-field"
            placeholder="Enter your city"
         >
        <div class="header-container__find-button" 
            @click="findCity"
            title="Find city weather data">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            inputData:''
        }
    },
    methods: {
        findCity(){

        },
        onChangeSelected(){

        } 
    }
}
</script>