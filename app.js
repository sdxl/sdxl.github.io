var app = angular.module('website', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'mainBacksplash.html'
	})
	.when('/services',{
		templateUrl: 'services.html'
	})
	.when('/projects',{
		templateUrl: 'projects.html'
	})
	.when('/aboutme',{
		templateUrl: 'aboutme.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})