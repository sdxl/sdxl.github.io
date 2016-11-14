app.controller("aboutMeController", ['$scope', 'aboutMeCardDataService', function($scope, aboutMeCards){

	$scope.english = aboutMeCards.getCardVersion('en');

	$scope.chinese = aboutMeCards.getCardVersion('zh');

	$scope.vietnamese = aboutMeCards.getCardVersion('vn');

	$scope.french = aboutMeCards.getCardVersion('fr');
	
	console.log("inside of aboutMeController");
}])