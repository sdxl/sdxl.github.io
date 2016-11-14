var app = angular.module('website', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../views/mainBacksplash.html'
	})
	.when('/services',{
		templateUrl: '../views/services.html'
	})
	.when('/projects',{
		templateUrl: '../views/projects.html'
	})
	.when('/aboutme',{
		templateUrl: '../views/aboutme.html',
		controller: "aboutMeController"
	})
	.when('/resume',{
		templateUrl: '../views/resume.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})