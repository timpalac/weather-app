angular.module("searchApp")
.factory('customSearch', function($http) { 
	let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
	let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
	let appId = '40618c713c32e058feb5d290739f141c';

    let getCurrentWeather = function(zip) {
	    return $http.get(`${weatherUrl}?zip=${zip},us&units=imperial&appid=${appId}`).then(function(result){
			return $http.get(`${forecastUrl}?zip=${zip},us&units=imperial&appid=${appId}`).then(function(forecast) {
				result.data.forecast = forecast.data.list.filter(result => result.dt_txt.includes('00:00:00'));
				return result.data;
			})
	    });
	};

	let getGeoWeather = function(coords) {
		return $http.get(`${weatherUrl}?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${appId}`).then(function(result){
			return $http.get(`${forecastUrl}?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${appId}`).then(function(forecast) {
				result.data.forecast = forecast.data.list.filter(result => result.dt_txt.includes('00:00:00'));
				return result.data;
			})
		});
	}

    return {
		getCurrentWeather,
		getGeoWeather
    }  
});