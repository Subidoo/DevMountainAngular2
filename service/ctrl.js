angular.module('app')
  .controller('ctrl', function($scope, service) {
  	$scope.send = function(x) {
  		service.set(x);
  	}
  })
