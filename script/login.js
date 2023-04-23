var app = angular.module('myApp', []);

app.controller('loginCtrl', function($scope, $window) {
	$scope.error = '';
	$scope.login = function() {
		if ($scope.username == 'admin' && $scope.password == 'admin') {
			console.log('login success'); // for testing
			alert('Login successful!');
			$window.location.href = "../index.html";
		} else {
			console.log('login failed'); // for testing
			$scope.error = 'Incorrect username or password.';
		}
	};

	$scope.forgotPassword = function() {
		if ($scope.email !== 'example@example.com') {
			console.log('email unavailable'); // for testing
			$scope.error = 'Email address not found.';
			return;
		}
		alert('An email has been sent with instructions to reset your password.');
	};
});

// app.controller('ForgotPasswordController', function($scope) {
// 	$scope.email = '';
// 	$scope.error = '';

// 	$scope.submitForm = function() {
// 		// Add your forgot password logic here
// 		if ($scope.email !== 'example@example.com') {
// 			$scope.error = 'Email address not found.';
// 			return;
// 		}
// 		alert('An email has been sent with instructions to reset your password.');
// 	};

// 	$scope.showModal = false;
// 	$scope.showForgotPasswordModal = function() {
// 		$scope.showModal = true;
// 	};
// 	$scope.closeForgotPasswordModal = function() {
// 		$scope.showModal = false;
// 	};

// 	$scope.submitFormtest = function() {
// 		// Add your forgot password logic here
// 		if ($scope.email !== 'example@example.com') {
// 			$scope.error = 'Email address not found.';
// 			return;
// 		}
// 		alert('An email has been sent with instructions to reset your password.');
// 		$scope.closeForgotPasswordModal();
// 	};
// });
