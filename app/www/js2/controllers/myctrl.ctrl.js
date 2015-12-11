(function(angular) {

	controller.$inject = ["WELCOME_MESSAGE", "$scope", "Second"];

	function controller(WELCOME_MESSAGE, $scope, Second) {
		$scope.message = WELCOME_MESSAGE;
		Second.log(WELCOME_MESSAGE);
	}

	angular.module("MyApp.Controllers")
		.controller("MyCtrl", controller);

})(angular);
