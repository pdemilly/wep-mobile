CRS.controller('CustomerSearchCtrl', function($scope, $state, $stateParams, CrsService) {

	$scope.number = '';
	$scope.name = '';
	$scope.ssn = '';

	$scope.customers = CrsService.customerList();

	$scope.search = function () {
		console.log ("search button pressed");
		$state.go ('tab.cust-list');
	};

	$scope.clear = function () {
		console.log ("clear button pressed");
		$scope.number = '';
		$scope.name = '';
		$scope.ssn = '';
	};

	$scope.formatAddress = function (addr) {
		return (addr.street + "." + addr.city + ", " + addr.state + ", " + addr.zip);
	};
});

// vim: :ai:ts=4:sw=4

