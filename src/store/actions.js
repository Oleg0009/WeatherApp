
export default{
    async findCity( { commit }, cityName){
            let apiKey = 'd720d6dde2bed6cf6e6d650907931956';
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            let result = await response.json();
            commit('setCurrentCity',result);
        },
    async findCityByGeo( { commit }, coordinates){
            let apiKey = 'd720d6dde2bed6cf6e6d650907931956';
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
            let result = await response.json();
            commit('setCurrentCity',result);
        },
    getCurrentCoord(){
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
}