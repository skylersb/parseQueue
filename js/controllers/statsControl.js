var app = angular.module('fairPolls')

app.controller('statsControl', function($scope, $location, poll){

	$scope.poll = poll;
	// console.log(poll)
	// parseService.getResults(poll)
	// .then (function(stats){
	// 	$scope.stats = stats;
	// 	// console.log($scope.stats)

	// })




});