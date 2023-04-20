var app = angular.module('myApp', []);

app.controller('LoginController', function($scope) {
	$scope.username = '';
	$scope.password = '';
	$scope.error = '';

	$scope.submitForm = function() {
		if ($scope.username === 'admin' && $scope.password === 'password') {
			alert('Login successful!');
		} else {
			$scope.error = 'Incorrect username or password.';
		}
	};
});
app.controller('ForgotPasswordController', function($scope) {
	$scope.email = '';
	$scope.error = '';

	$scope.submitForm = function() {
		// Add your forgot password logic here
		if ($scope.email !== 'example@example.com') {
			$scope.error = 'Email address not found.';
			return;
		}
		alert('An email has been sent with instructions to reset your password.');
	};
});
