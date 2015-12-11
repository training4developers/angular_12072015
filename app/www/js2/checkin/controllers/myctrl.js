(function($, angular) {

	ctrl.$inject = ["$scope", "HeaderText", "$log"];

	function ctrl($scope, HeaderText, $log) {
		$scope.message = HeaderText.message;
		console.log("Ran MyCtrl");
	}

	angular.module("MyApp.Controllers")
		.controller("MyCtrl", ctrl);

})(jQuery, angular);
