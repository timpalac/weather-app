(function(){
	angular.module("searchApp")
	.controller("resultsController",['$scope', '$location', '$routeParams', 'customSearch', function($scope, $location, $routeParams, customSearch){
		$scope.searchTerm = $routeParams.term;
		$scope.currentPage = 1;
		$scope.Math = window.Math;
		let defaultZipCode = 60661;

		if ($scope.searchTerm) {
			getCurrentWeather($scope.searchTerm);
		} else {
			navigator.geolocation.getCurrentPosition(function(location) {
				customSearch.getGeoWeather(location.coords).then(function(result){
					$scope.location = result;
				});
			}, function (error) { 
				getCurrentWeather(defaultZipCode);
			});
		}

		function getCurrentWeather(zip) {
			customSearch.getCurrentWeather(zip).then(function(result){
				$scope.location = result;
			});
		}
	}]);
})();