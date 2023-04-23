var app = angular.module("myApp", []);
    
app.controller("tabController", function($scope) {
    $scope.tab = 'personal-info';

    $scope.setActiveTab = function(tab) {
        $scope.activeTab = tab;
    };
});

app.controller('formController', function($scope) {
    // testing user data
    $scope.user = {
        fname: 'John',
        lname: 'Doe',
        email: 'johndoe@example.com',
        phonenum: '123-456-7890',
        dob: '01/02/1999',
        gender: 'male',
        nationality: 'Malaysia',
        address: '123 Main St, Anytown USA',
        emergency: '123-456-7890',
    };

    $scope.updatePersonalInfo = function() {
        $http.post('/update-user', $scope.user)
        .then(function(response) {
            console.log('Personal information updated successfully');
        }, function(error) {
            console.log('Error updating information');
        });
    };

    $scope.uploadFile = function() {

    };
});


app.controller('fileUploadController', ['$scope', 'Upload', function($scope, Upload) {
    $scope.submit = function() {
        if ($scope.file) {
            Upload.upload({
                url: '/upload',
                data: {file: $scope.file}
            }).then(function(response) {
                console.log('Success: ' + response.config.data.file.name + ' uploaded.');
            }, function(response) {
                console.log('Error: ' + response.status + ' ' + response.statusText);
            });
        }
    };
}]);  