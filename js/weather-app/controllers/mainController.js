app.controller("mainController", function($scope, $http){
	$scope.location = 'exeter';

	$scope.init = function() {
		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.location + '&callback=JSON_CALLBACK')
			.success(function(data) {
				console.log(data);
			});
	};
});