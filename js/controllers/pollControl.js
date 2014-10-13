var app = angular.module('fairPolls')

app.controller('pollControl', function($scope, $location, parseService, poll){

	$scope.poll = poll;
	

// SEND OPTION CHOSEN BACK TO PARSE
$scope.sendResults = function(optionChosen){	
		//create new answer object
		var answer =
		{
			pollId: poll.objectId,
			answer: optionChosen.id //store the selected option in this var
		}

		parseService.sendResults(answer)
		.then(function(){ 
			$location.path('/poll/' + poll.objectId + '/stats');
			// parseService.getResults();

		})

		// console.log(answer)



	}



});