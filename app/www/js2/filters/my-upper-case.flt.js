(function(angular) {

	filter.$inject = [];

	function filter() {
		return function(value) {
			return String(value).toUpperCase();
		};
	}

	angular.module("MyApp.Filters")
		.filter("myUpperCase", filter);

})(angular);
