CRS.controller('CustomerCtrl', function($scope, $stateParams, CrsService) {
	$scope.cust = CrsService.selectedCustomer();
	$scope.contracts = CrsService.contractList();

	$scope.formatAddress = function (addr) {
		return (addr.street + "." + addr.city + ", " + addr.state + ", " + addr.zip);
	};
});

