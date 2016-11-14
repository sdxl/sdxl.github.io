app.directive("flippingCard", function(){
	return{
		scope:{
			data: "="
		},
		templateUrl: "../directives/templates/flippingCard.html",
		link: function(scope){
			console.log(scope.data);
			scope.front = scope.data.front;
			// scope.test = "red"
			scope.back = scope.data.back;
			
			// scope.flipped = false;
			var initiallyFlipped = scope.data.initiallyFlipped;
			var flipped = initiallyFlipped;

			scope.initiallyFlipped = initiallyFlipped;

			console.log("flipped: ", flipped);
			scope.flipCard = function(){
				scope.flipped = !scope.flipped;
			}
		}
	}
})