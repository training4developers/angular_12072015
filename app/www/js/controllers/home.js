(function($, angular) {

	"use strict";

	ctrl.$inject = ["$scope", "widgets", "$state"];

	function ctrl($scope, widgets, $state) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		$scope.viewWidget = function(widgetId) {
			$state.go("view", { widgetId: widgetId });
		};

		$scope.editWidget = function(widgetId) {
			$state.go("edit", { widgetId: widgetId });
		};

		$scope.createWidget = function() {
			$state.go("create");
		}

	}

	angular.module("MyApp.Controllers")
		.controller("HomeCtrl", ctrl);

})(jQuery, angular);
