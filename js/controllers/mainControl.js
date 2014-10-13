var app = angular.module('fairPolls')

app.controller('mainControl', function($scope, parseService, $location){

	$scope.getParseData = function(){
		parseService.getData($scope.question)
		.then(function(data){
			$scope.questions = data;
			console.log($scope.questions)
		});
	}
	
	$scope.getParseData();

	$scope.newOptions = [{id: 'option1'}];

	$scope.addNewOption = function(){
		var newItemNo = $scope.newOptions.length + 1;
		$scope.newOptions.push({'id':'option' + newItemNo, text: ""});
	}

	$scope.removeOption = function(){
		var newItemNo = $scope.newOptions.length - 1;
		$scope.newOptions.splice($scope.newOptions.indexOf(), 1);
	}

//Create New Poll
	$scope.postData = function(){
		
		parseService.postData($scope.pollQuestion, $scope.newOptions)
		.then(function(data){
			$scope.questions = {};
			$scope.newOptions = [{id: 'option1'}, {id: 'option2'}]; 
			$scope.pollQuestion = '';
			$scope.optionChoice = '';
			$scope.getParseData();
			
		})
	}
	
	$scope.takePoll = function(question){
			$location.path('/poll/' + question.objectId);

		
	}

	$scope.deleteQuestion = function(){
		parseService.deleteData(this.question)
		.then(function(){
			$scope.getParseData()
		})
	}

});