(function(angular) {

	"use strict";

	angular.module("MyApp.Constants", []);
	angular.module("MyApp.Services", ["MyApp.Constants"]);
	angular.module("MyApp.Configs", ["MyApp.Constants", "MyApp.Services"]);
	angular.module("MyApp.Controllers", ["MyApp.Constants", "MyApp.Services"]);

	angular.module("MyApp", [
		"ui.router", "MyApp.Configs", "MyApp.Controllers", "MyApp.Templates"
	]);

})(angular);
