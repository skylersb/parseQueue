// 	Parse.initialize("7UaUAI1OeFixksVIkHDYvns592IGuf6a1BS1HDPH", "FPvHcwSqx1Rv9Kx6TGMrekaUqNH7k9MmbnDdqx2I");


// var app = angular.module('fairPolls');

// app.controller('loginControl', function($scope, $location){
// 	// $scope.test = "It's working";


// 	$scope.currentUser = Parse.User.current();
 
//   $scope.signUp = function(form) {
//     var user = new Parse.User();
//     user.set("email", form.email);
//     user.set("username", form.username);
//     user.set("password", form.password);
 
//     user.signUp(null, {
//       success: function(user) {
//         $scope.currentUser = user;
//         $scope.$apply(); // Notify AngularJS to sync currentUser
//       },
//       error: function(user, error) {
//         alert("Unable to sign up:  " + error.code + " " + error.message);
//       }
//     });    
//   };
 
//   $scope.logOut = function(form) {
//     Parse.User.logOut();
//     $scope.currentUser = null;
//   };
// });