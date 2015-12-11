(function($, angular) {

	"use strict";

	ctrl.$inject = ["$scope", "widgets", "$stateParams", "$state"];

	function ctrl($scope, widgets, $stateParams, $state) {

		widgets.get($stateParams.widgetId).then(function(results) {
			$scope.widget = results.data;
		});

		$scope.editWidget = function() {
			$state.go("edit", { widgetId: $scope.widget._id });
		};

		$scope.returnToList = function() {
			$state.go("home");
		};
	}

	angular.module("MyApp.Controllers")
		.controller("ViewCtrl", ctrl);

})(jQuery, angular);
