(function($, angular) {

	ctrl.$inject = ["$scope", "SomeOtherInfo"];
	
	function ctrl($scope, SomeOtherInfo) {
		$scope.message = SomeOtherInfo;
		console.log("Ran MyCtrl2");
	}

	angular.module("MyApp.Controllers2")
		.controller("MyCtrl2", ctrl);

})(jQuery, angular)
