
export default{
    async findCity( { commit }, cityName){
            let apiKey = 'd589374222ba28bbe027a51fcd70571e';
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            let result = await response.json();
            result.liked = false;
            commit('setCurrentCity',result);
        },
    async findCityByGeo(coordinates){
            let apiKey = 'd589374222ba28bbe027a51fcd70571e';
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
            let result = await response.json();
            return result
        },
    getCurrentCoord(){
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    },
    checkIfHasCityInStore({ commit,state }, city){
        let has = state.favoriteCities.filter(e => e.name === city.name).length;
        if (has > 0) {
            console.log("We already have this city in favorite")
        }else{
            commit("addCityToFavorite",city);
        }
    },
    removeByIndex({ commit , state }, city){
       state.favoriteCities.forEach((e,index) => {
           if( e.name === city.name)
               commit('removeCityFromFavorite',index);
        });
    },
    checkIfHasCityInFavorites({ state }, cityName){
        let has = state.favoriteCities.filter(e => e.name === cityName).length;
        if(has > 0 ){
           return true;
        }
       return false;
    },
    setCityAsCurrent({commit , state }, cityName){
        let has = state.favoriteCities.filter(e => e.name === cityName);
        commit('setCurrentCity',has[0]);
    }
}