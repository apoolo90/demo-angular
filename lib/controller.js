var app = angular.module('DemoApp', [ "ngRoute" ]);
 app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.
			when('/NewEvent', {
				templateUrl : 'add_event.html',
				controller : 'AddEventController'
			})
			.when('/DisplayEvent', {
				templateUrl : 'show_event.html',
				controller : 'ShowDisplayController'
			})
			.otherwise({redirectTo: '/DisplayEvent'})
		}]);
		app.controller('AddEventController', function($scope) {
			$scope.message = "this is to add a new event";
		});
		app.controller('ShowDisplayController', function($scope) {
			$scope.message = "this is to show event";
		});