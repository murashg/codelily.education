'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('classes', {
			url: '/classes',
			templateUrl: 'modules/core/views/classes.client.view.html'
		}).
		state('the-team', {
			url: '/the-team',
			templateUrl: 'modules/core/views/the-team.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);
