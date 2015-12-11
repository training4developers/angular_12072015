(function(angular) {

	svc.$inject = ["$http"];

	function svc($http) {

		return {
			getAll: function() {
				return $http.get("http://localhost:8090/widgets");
			},
			get: function(widgetId) {
				return $http.get("http://localhost:8090/widgets/" +
					encodeURIComponent(widgetId));
			},
			insert: function(widget) {
				return $http.post("http://localhost:8090/widgets", widget);
			},
			update: function(widget) {
				return $http.put("http://localhost:8090/widgets/" +
					encodeURIComponent(widget._id), widget);
			},
			delete: function(widgetId) {
				return $http.delete("http://localhost:8090/widgets/" +
					encodeURIComponent(widgetId));
			}
		};

	}

	angular.module("MyApp.Services").factory("widgets", svc);


})(angular);
