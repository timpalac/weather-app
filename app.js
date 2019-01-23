(function(){
	angular.module("searchApp", ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/',{
	    templateUrl: "views/resultsView.html",
	  	controller: "resultsController"
	  }).when('/:term',{
	  	templateUrl: "views/resultsView.html",
	  	controller: "resultsController"
	  }).otherwise({
	  	redirectTo: "/",
	  });
	 }]);
})();