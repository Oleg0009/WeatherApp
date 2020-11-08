
export default{
   setCurrentCity(state,data){
      state.currentCity=data;
   },
   setLiked(state,data){
      state.currentCity.liked = data;
   },
   addCityToFavorite(state,data){
      state.favoriteCities.push(data);
   },
   removeCityFromFavorite(state,data){
      state.favoriteCities.splice(data,1);
   }
}