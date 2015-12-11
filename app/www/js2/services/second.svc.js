(function(angular) {

	provider.$inject = [];

	function provider() {

		var prefix = "";

		return {
			setPrefix: function(p) {
				prefix = p
			},
			$get: ["$log", function($log) {
				return {
					log: function(entry) {
						$log.log(prefix + entry);
					}
				}
			}]
		}

	}

	angular.module("MyApp.Services")
		.provider("Second", provider);

})(angular);
