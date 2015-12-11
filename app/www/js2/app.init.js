(function(angular) {

	angular.module("MyApp.Constants", []);
	angular.module("MyApp.Services", []);
	angular.module("MyApp.Filters", []);
	angular.module("MyApp.Controllers", ["MyApp.Constants", "MyApp.Services"]);
	angular.module("MyApp", ["MyApp.Controllers","MyApp.Filters"])
		.config(function(SecondProvider) {
			SecondProvider.setPrefix("MyProgram> ");
		})
		.config(function($provide) {

			$provide.decorator("$log", function($delegate) {

				var originalLog = $delegate.log;

				$delegate.log = function(entry) {
					originalLog("MyApp> " + entry);

					// send log messages over web sockets
				};

				// return $delegate;
				return null;

			});

		});

})(angular);
