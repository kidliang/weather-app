app.controller("mainController", function($scope, $http){
	$scope.data = null;
	$scope.location = null;
	$scope.submit = function() {
		$http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.location + '&callback=JSON_CALLBACK')
			.success(function(data) {
				$scope.data = data;
				
				/*
				var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
				d.setUTCSeconds(data.sys.sunrise);				
				console.log(d);
				*/
				
			});
	}
});
