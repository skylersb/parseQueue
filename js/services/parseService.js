var app = angular.module('fairPolls')

app.service('parseService', function($http, $q){


	
//SEND POLL TO PARSE
this.postData = function(question, options){
	return $http({
		method: 'POST',
		data: {text: question, options: options, status: 'red'},
		url: 'https://api.parse.com/1/classes/questions'
	})
}
//GET POLL FROM PARSE
this.getData = function(){
	return $http({
		method: 'GET',
		url: 'https://api.parse.com/1/classes/questions?order=-createdAt'
	})
	.then(function(data){
		return data.data.results;
	})
}

	// this.updateData = function(question){
	// 	return $http({
	// 		method: 'PUT',
 //       		data: {status: question.status},
	// 		url: 'https://api.parse.com/1/classes/questions/' + question.objectId
	// 	})
	// }

	// this.deleteData = function(question){
	// 	return $http({
	// 		method: 'DELETE',
	// 		url: 'https://api.parse.com/1/classes/questions/' + question.objectId
	// 	})
	// }

// GET POLL USER CHOSE TO TAKE
this.getPoll = function(objectId) {
	return $http({
		method: 'GET',
		url: 'https://api.parse.com/1/classes/questions/' + objectId
	})
	.then(function(data){
		
		return data.data;
	})
}
// SEND OPTION THAT USER CHOSE
this.sendResults = function(answer) {
	return $http({
		method: 'POST',
		url: 'https://api.parse.com/1/classes/answers/',
		data: answer
	})
}

	//create another service function that gets answers
	this.getResults = function(poll){
		var deferred = $q.defer()	
		var pieNums = [];
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/answers/?where=' + encodeURIComponent(JSON.stringify({pollId: poll.objectId}))
			
		})
		.then(function(data){
			var results = data.data.results; //[{answer:'option1'}, {...}]

			//loop over options, set to 0
			for(var i = 0; i < poll.options.length;  i++){
				var obj = {
					name: poll.options[i].id,
					option: poll.options[i].text,
					count: 0
				}
				pieNums.push(obj);
			}

			//end result: {option1: 0, option2: 0, option3: 0, option4: 0}
			for (var i = 0; i < results.length; i++) {
				for(var a = 0; a < pieNums.length; a++){
					if(results[i].answer === pieNums[a].name){
						pieNums[a].count++;
					}
				}
			};
			console.log('pienums: ' + pieNums)
			deferred.resolve(pieNums)
		})
		return deferred.promise
	}
});

