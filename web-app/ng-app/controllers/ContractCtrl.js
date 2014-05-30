CRS.controller('ContractCtrl', function($scope, $state, $stateParams, CrsService) {
	$scope.customer = CrsService.selectedCustomer();
	$scope.contract = CrsService.selectedContract();

	$scope.sign1 = '';
	$scope.sign2 = '';
	$scope.sign3 = '';
});


// vim :ai:ts=4:sw=4
