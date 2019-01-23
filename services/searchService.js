angular.module("searchApp")
.factory('customSearch', function($http) { 
	let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
	let appId = '40618c713c32e058feb5d290739f141c';

    let getCurrentWeather = function(searchTerm) {
	    return $http.get(`${weatherUrl}?zip=${searchTerm},us&units=imperial&appid=${appId}`).then(function(result){
				return result.data;
	    });
	};

	let getGeoWeather = function(coords) {
		return $http.get(`${weatherUrl}?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${appId}`).then(function(result){
			return result.data;
		});
	}

    return {
			getCurrentWeather,
			getGeoWeather
    }  
});