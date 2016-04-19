var app = angular.module('servicesApp', []);

app.controller('servCtrl', function($scope) {
	$scope.services = services;
	$scope.sum = 0;
	$scope.servCount = 1;

	$scope.total = function() {
		$scope.sum = 0;
		for(s of $scope.services) {
			if (s.active === true) {
				$scope.sum+= s.price;
			}
		}
	}

	$scope.toggleActive = function(s) {
		if(s.active) {
			s.active = false;
			$scope.servCount--;
		}
		else {
			s.active = true;
			$scope.servCount++;
		}
		$scope.total();
	}

	$scope.total();

});

var services = [
		{
		    name: 'Web Development',
		    price: 300,
		    active:true
		},{
		    name: 'Design',
		    price: 400,
		    active:false
		},{
		    name: 'Integration',
		    price: 250,
		    active:false
		},{
		    name: 'Formation',
		    price: 220,
		    active:false
		}
	]