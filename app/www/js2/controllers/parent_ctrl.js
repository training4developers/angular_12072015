(function(angular) {

	parentCtrl.$inject = ["$scope"];

	function parentCtrl($scope) {
		$scope.o = {};
	}

	angular.module("MyApp.Controllers")
		.controller("ParentCtrl", parentCtrl);

})(angular);
