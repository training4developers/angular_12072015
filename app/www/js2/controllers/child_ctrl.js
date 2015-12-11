(function(angular) {

	childCtrl.$inject = ["$scope"];

	function childCtrl($scope) {
		
	}

	angular.module("MyApp.Controllers")
		.controller("ChildCtrl", childCtrl);

})(angular);
