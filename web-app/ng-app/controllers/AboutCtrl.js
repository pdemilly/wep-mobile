CRS.controller('AboutCtrl', function($scope, $stateParams, CrsService) {
	      $scope.user = {
		      firstName: null,
		      lastName: null,
		      signature: null
		    };
    
		    $scope.saveSignatureForm = function() {
		    if ( sigform.$valid ) {
			console.log('Saving ', $scope.user);
			$scope.clearData();
		    }
    		};
    
	    $scope.clearData = function() {
	      $scope.user = {
		firstName: null,
		lastName: null,
		signature: null
	      };
	    };
    
	    $scope.clearData();
});
