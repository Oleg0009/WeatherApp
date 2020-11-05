<template>
    <div class="button find-by-location"
         @click="chooseByGeo"
         title="Choose city by your location">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="97.713px" height="97.713px" viewBox="0 0 97.713 97.713" style="enable-background:new 0 0 97.713 97.713;" xml:space="preserve">
                <path d="M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687C67.542,46.276,59.159,54.659,48.855,54.659z"/>
            </svg>
    </div>
</template>

<script>

export default {
    methods: {
       async chooseByGeo(){
          let location = await this.$store.dispatch('getCurrentCoord');
          await this.$store.dispatch('findCityByGeo',location.coords);
        }
    }
}
</script>