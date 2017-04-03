resume = angular.module("resume", ['ngSanitize']);

//Taskbar
resume.controller("navbarCtrl",['$scope', function($scope){
	$scope.navLinks = ["ABOUT","EDUCATION","EXPERIANCE","SKILLS"];
}]);

resume.controller("aboutMeCtrl",['$scope','$http',function($scope,$http){
	$scope.panelClass = 'fadeOut';
	 $http.get('templates/code.html')
            .then(function(response) {
                $scope.aboutCode = response.data;
                $scope.panelClass = 'fadeIn';
            });
}]);