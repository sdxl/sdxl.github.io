var app = angular.module('website', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'mainBacksplash.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})