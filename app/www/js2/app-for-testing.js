(function() {

	angular.module("App", [])
		.controller("HomeCtrl", function($scope, bsuData) {

			$scope.person = {
				firstName: "Bob",
				lastName: "Smith"
			};

			$scope.update = function() {
				bsuData.update($scope.person);
			};

		})
		.directive("bsuRequired", function() {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ctrl) {

					function setValidity(value) {
						ctrl.$setValidity("bsu-required", value != null && String(value).length > 0);
						return value;
					}

					ctrl.$formatters.unshift(setValidity);
					ctrl.$parsers.unshift(setValidity);
				}
			};

		})
		.filter("bsuUpperCase", function() {

			return function(value) {
				return value.toUpperCase();
			};

		})
		.factory("bsuData", function($http) {

			return {
				getAll: function() {
					return $http.get("/js/app/data.js").then(function(result) {
						result.data.people.push({
							firstName: "Jordan",
							lastName: "Bolton"
						});
						return result;
					});
				},
				update: function(data) {
					return $http.post("/js/app/data.js", data);
				}
			};
		});

}(jQuery, angular));
