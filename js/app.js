var app = angular.module('fairPolls', ['ngRoute'])

app.config(function($routeProvider,$httpProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');

	//router here
	$routeProvider
	.when('/', {
		templateUrl: 'views/createPoll.html',
		controller: 'mainControl'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginControl'
	})
	.when('/poll/:pollid', {
		templateUrl: 'views/poll.html',
		controller: 'pollControl',
		resolve: {
			poll: function(parseService, $route) {
				return parseService.getPoll($route.current.params.pollid)
			}
		}
	})
	//create a /poll/:pollid/stats route that grabs the answers and sends them to your ctrler in a resolve
	.when('/poll/:pollid/stats', {
		templateUrl: 'views/stats.html',
		controller: 'statsControl',
		resolve: {
			poll: function(parseService, $route) {
				return parseService.getPoll($route.current.params.pollid)
			},
			// data: function(parseService, $route){
			// 	return parseService.getResults($route.current.params.pollid)
			// }
		}
	})
	.otherwise({
		redirectTo: '/'
	})


});