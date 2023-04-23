var app = angular.module('myApp', []);

app.directive('matchPassword', function() {
  return {
    require: 'ngModel',
    scope: {
      otherModelValue: '=matchPassword'
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.matchPassword = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };
});

app.controller('SignupController', function($scope) {
	$scope.username = '';
	$scope.email = '';
	$scope.password = '';
	$scope.confirmPassword = '';
	$scope.error = '';

	$scope.submitForm = function() {
		if ($scope.password !== $scope.confirmPassword) {
			$scope.error = 'Passwords do not match.';
			return;
		}
		// Add your signup logic here
		alert('Signup successful!');
	};
});
