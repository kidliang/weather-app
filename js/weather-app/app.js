var app = angular.module('WeatherApp',[])
	.filter('customTimeFilter', function () {
        return function (epochTime) {
			var d = new Date(0);
			d.setUTCSeconds(epochTime);
			var hours = prependZeros(d.getHours(), 2);
			var minutes = prependZeros(d.getMinutes(), 2);
            return hours + ':' + minutes + ' GMT';
        };
    })
	.filter('kelvinToCelsius', function () {
        return function (n) {
            return n - 273.15;
        };
    });	

/**
 * I prepend zeros to a number
 * @param integer n
 * @param integer len
 * @return string
 */
function prependZeros(n, len) {
  return (new Array(len + 1).join('0') + n).slice(-len);
}