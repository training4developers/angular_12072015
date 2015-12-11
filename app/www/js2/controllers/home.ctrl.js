(function(angular) {

	controller.$inject = ["$scope"];

	function controller($scope) {
		$scope.message = "Home";
	}

	angular.module("MyApp.Controllers")
		.controller("Home", controller);

})(angular);
