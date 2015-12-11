(function($, angular) {

	"use strict";

	ctrl.$inject = ["$scope", "widgets", "$stateParams", "$state"];

	function ctrl($scope, widgets, $stateParams, $state) {

		if ($stateParams.widgetId) {
			widgets.get($stateParams.widgetId).then(function(results) {
				$scope.widget = results.data;
			});
		} else {
			$scope.widget = {};
		}

		$scope.saveWidget = function() {
			if ($stateParams.widgetId) {
				widgets.update($scope.widget).then(function() {
					$state.go("home");
				});
			} else {
				widgets.insert($scope.widget).then(function() {
					$state.go("home");
				});
			}
		};

		$scope.deleteWidget = function() {
			if (confirm("Are you sure you want to delete the widget?")) {
				widgets.delete($scope.widget._id).then(function() {
					$state.go("home");
				});
			}
		};

		$scope.returnToList = function() {
			$state.go("home");
		};

	}

	angular.module("MyApp.Controllers")
		.controller("EditCtrl", ctrl);

})(jQuery, angular);
