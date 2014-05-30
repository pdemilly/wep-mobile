
CRS.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state ('tab', {
			url: "/tab",
			abstract: true,
			templateUrl: 'tabs'
	})

	.state ('tab.home', {
			url: "/home",
			views: {
				'home-tab': {
					templateUrl: 'home',
					controller: 'HomeCtrl'
				}
			}
	})

	.state('tab.cust-search', {
			url: '/cust/search',
			views: {
				'main-tab': {
					templateUrl: 'cust-search',
					controller: 'CustomerSearchCtrl'
				}
			}
	})

	.state('tab.cust-list', {
			url: '/cust/list',
			views: {
				'main-tab': {
					templateUrl: 'cust-list',
					controller: 'CustomerSearchCtrl'
				}
			}
	})

	.state('tab.cust-detail', {
			url: '/cust/:number',
			views: {
				'main-tab': {
					templateUrl: 'cust-detail',
					controller: 'CustomerCtrl'
				}
			}
	})

	.state('tab.cont-detail', {
			url: '/contract/:number',
			views: {
				'main-tab': {
					templateUrl: 'cont-detail',
					controller: 'ContractCtrl'
				}
			}
	})

	.state('tab.cont-sign1', {
			url: '/contract-sign1',
			views: {
				'main-tab': {
					templateUrl: 'cont-sign1',
					controller: 'ContractCtrl'
				}
			}
	})

	.state('tab.cont-sign2', {
			url: '/contract-sign2',
			views: {
				'main-tab': {
					templateUrl: 'cont-sign2',
					controller: 'ContractCtrl'
				}
			}
	})

	.state('tab.cont-sign3', {
			url: '/contract-sign3',
			views: {
				'main-tab': {
					templateUrl: 'cont-sign3',
					controller: 'ContractCtrl'
				}
			}
	})

	.state('tab.cont-print', {
			url: '/contract-print',
			views: {
				'main-tab': {
					templateUrl: 'cont-print',
					controller: 'ContractCtrl'
				}
			}
	})

	.state('tab.settings', {
			url: '/settings',
			views: {
				'settings-tab': {
					templateUrl: 'settings',
					controller: 'SettingsCtrl'
				}
			}
	})

	.state('tab.about', {
			url: '/about',
			views: {
				'about-tab': {
					templateUrl: 'about',
					controller: 'AboutCtrl'
				}
			}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/home');
});

// vim: :ai:ts=4:sw=4
