(function(angular) {

	"use strict";

	config.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];

	function config($stateProvider, $locationProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "home.tpl.html",
				controller: "HomeCtrl"
			})
			.state("create", {
				url: "/widget//edit",
				templateUrl: "edit.tpl.html",
				controller: "EditCtrl"
			})
			.state("edit", {
				url: "/widget/:widgetId/edit",
				templateUrl: "edit.tpl.html",
				controller: "EditCtrl"
			})
			.state("view", {
				url: "/widget/:widgetId",
				templateUrl: "view.tpl.html",
				controller: "ViewCtrl"
			});
	}

	angular.module("MyApp.Configs").config(config);

})(angular);
