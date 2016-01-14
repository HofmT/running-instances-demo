var app = angular.module('envVarApp', []);


app.controller('ServiceController', function($scope, $http, $location) {
	
	//Compose the URL to retrieve the environment variables http://name_of_app.ip_address.xip.io/data.json
	var serviceURL = $location.absUrl() + 'data.json';
    $http.get(serviceURL).then(function (response) {
        $scope.envVariables = response.data;
    });

});