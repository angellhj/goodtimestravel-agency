var app = angular.module('myApp', []);

app.controller('LoginCtrl', function($scope) {
	$scope.submitForm = function() {
		// Add your login logic here
		if ($scope.username !== 'admin' || $scope.password !== 'password') {
			$scope.error = 'Invalid username or password.';
			return;
		}
	};
});

app.controller('ForgotPasswordCtrl', function($scope) {
	$scope.submitForm = function() {
		// Add your forgot password logic here
		if ($scope.email != 'test@email.com') {
			$scope.error = 'Email address not found.';
			return;
		}
		alert('An email has been sent with instructions to reset your password.');
		$scope.dismissModal();
	};

    $scope.dismissModal = function() {
        $('#forgotModal').modal('hide');
    }
});