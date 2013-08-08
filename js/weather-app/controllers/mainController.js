app.controller("mainController", function($scope, $http){
	$scope.data = null;
	$scope.img = null;
	$scope.location = null;
	$scope.loader = false;
	$scope.submit = function() {
		$scope.data = null;
		$scope.loader = true;
		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.location + '&callback=JSON_CALLBACK')
			.success(function(data) {
				$scope.data = data;
				$scope.img = 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png';
				$scope.loader = false;
			});
	}
});
