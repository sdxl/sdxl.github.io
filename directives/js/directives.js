app.directive("flippingCard", function(){
	return{
		scope:{
			data: "="
		},
		templateUrl: "../directives/templates/flippingCard.html",
		link: function(scope){
			scope.front = scope.data.front;
			scope.back = scope.data.back;
			scope.flipped = false;
			var initiallyFlipped = scope.data.initiallyFlipped;

			scope.flipCard = function(){
				scope.flipped = !scope.flipped;
			}

			if(initiallyFlipped) scope.flipCard(); 

		}
	}
})