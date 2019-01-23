(function(){
	angular.module("searchApp")
	.directive("searchField", ['$location', '$routeParams', function($location, $routeParams) {
		return {
				restrict: 'E',
				scope: {
					"searchValue": "="
				},
		    templateUrl: 'directives/searchField.html',
		    link: function (scope) {
					scope.searchPlaceholder = "Show me the weather in...";
					scope.searchValue = 60194;

		      if (!$routeParams.term) {
						scope.searchField = 60194;
			    } else {
			    	scope.searchField = Math.floor($routeParams.term,10);
			    }

				scope.performSearch = function(){
					$location.path("/" + scope.searchField);
				};
		    }
		  };
	}]);
})();