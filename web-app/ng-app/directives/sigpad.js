/**** Directive SIGPAD *****************************************************************************************/

angular.module('sigpad',[])

.directive('sigpad', function($timeout){
	return {
		templateUrl: 'sigpad',
		restrict: 'E',
		scope : true,
		require: 'ngModel',
		link: function (scope,element,attr,ctrl) {
			var sigPadAPI = $(element).signaturePad({
				drawOnly:true,
				lineColour: '#FFF'
				//validateFields:false //Removing this will fire the sigpad validation on form submit, but will not stop the form from submitting.
			});
					
			scope.updateModel = function() {
				$timeout(function() {
					console.log('updateModel', scope);
					ctrl.$setViewValue(sigPadAPI.getSignature());
				});
			};		
			
			ctrl.$render = function() {
				console.log('render', ctrl.$viewValue);
				if ( ctrl.$viewValue ) {
					sigPadAPI.regenerate(ctrl.$viewValue);
				} else {
					sigPadAPI.clearCanvas();
				}
			};
			
			// Validate signature pad.
			// This isn't working. From what I can tell, the code never gets touched.
			ctrl.$parsers.unshift(function(viewValue) {
				console.log('validating', viewValue);
				if ( sigPadAPI.validateForm() ) {
					// it is valid
					console.log('valid');
					ctrl.$setValidity('sigpad', true);
					return viewValue;
				} else {
					// it is invalid, return undefined (no model update)
					console.log('invalid');
					ctrl.$setValidity('sigpad', false);
					return undefined;
				}
			});		
		}
	};
})

/* Regenerate Signature Pad data as Base64 encoded PNG data.
 * This uses the getSignatureImage() function of the Signature Pad API.
 * It only works in modern browsers, and is flaky in IE.
 */

.directive('regensigpad',function() {
	return {
		template: '<img ng-src="{{pic}}" />',
		restrict: 'E',
		scope: {sigdata:'@'},
		link: function (scope,element,attr,ctrl) {
			// When the sigdata attribute changes...
			attr.$observe('sigdata',function (val) {
				// ... create a blank canvas template and attach the signature pad plugin
				var sigPadAPI = $('<div class="sig sigWrapper"><canvas class="pad" width="436" height="120"></canvas></div>').signaturePad({
							displayOnly: true
				}); 
				// regenerate the signature onto the canvas
				sigPadAPI.regenerate(val);
				// convert the canvas to a PNG (Newer versions of Chrome, FF, and Safari only.)
				scope.pic = sigPadAPI.getSignatureImage();
			});
		}
	};
});

// vim: :ai:ts=4:sw=4
