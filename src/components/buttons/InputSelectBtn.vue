<template>
   <div class="choose-container">
        <select v-if="active"
            name="" 
            id="favouritesSelect"
            class="choose-container__select">
            <option v-for="option in getFavorites" :key="option.id" :value="option.name">{{option.name}}</option>
        </select>
        <input v-if="!active"
            v-model='inputData'
            type="text" 
            class="choose-container__input"
            placeholder="Enter your city"
         >
        <div class="button choose-container__button" 
            @click="findCity"
            title="Find city weather data">  
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 250.313 250.313" style="enable-background:new 0 0 250.313 250.313;">
                    <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236	C170.146,140.044,140.043,170.146,102.911,170.146z"/>
                </svg>
        </div>
    </div>
</template>

<script>

export default {
    props: {
         active: Boolean
    },
    data() {
        return {
            inputData:''
        }
    },
    methods: {
        async findCity(){
            let answer = await this.$store.dispatch('checkIfHasCityInFavorites',this.inputData);
            //check if we have this city in favorite to show correct like option
            if(!answer)
                await this.$store.dispatch('findCity',this.inputData);
            else
                await this.$store.dispatch('setCityAsCurrent',this.inputData);
            this.clearInput();     
        },
        clearInput(){
            this.inputData='';
        } 
    },
    computed:{
        getFavorites(){
            return this.$store.state.favoriteCities;
        }
    }
}
</script>