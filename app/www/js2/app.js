(function(angular) {

	angular.module("MyApp.Constants", []);
	angular.module("MyApp.Controllers", ["MyApp.Constants"]);
	angular.module("MyApp.Controllers2", ["MyApp.Constants"]);
	angular.module("MyApp", ["MyApp.Controllers", "MyApp.Controllers2"]);

})(angular);
