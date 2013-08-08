app.controller("mainController", function($scope, $http){
	$scope.data = null;
	$scope.img = null;
	$scope.loc = null;
	$scope.loader = false;
	$scope.status = null;
	
	$scope.submit = function() {
		$scope.loader = true;
		$scope.status = null;
		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.loc + '&callback=JSON_CALLBACK')
			.success(function(data, status) {
				$scope.data = data;
				$scope.status = status;
				$scope.img = 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png';
				$scope.loader = false;
			})
			.error(function(data, status) {
				$scope.data = data || 'Oops! The request failed.';
				$scope.status = status;
				$scope.loader = false;
			});
	}
});
