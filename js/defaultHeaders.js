var app = angular.module('fairPolls');

	app.factory('httpRequestInterceptor', function () {
	  return {
	    request: function (config) {
	      config.headers = {'X-Parse-Application-Id': '7UaUAI1OeFixksVIkHDYvns592IGuf6a1BS1HDPH', 'X-Parse-REST-API-Key': 'HjVDGubfwXvwYGuWr6wqHXIi1YHp3BPjVASR4QvD'}
	      return config;
	    }
	  };
	});