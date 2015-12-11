(function(angular) {

	factory.$inject = [];

	function factory() {

		return {
			doSomething: function() {
				console.log("did it...");
			}

		};

	}

	function BaseSvc() {

	}

	BaseSvc.prototype.doSomething = function() {
		console.log("did it");
	}

	function PeopleSvc() {

	}

	PeopleSvc.prototype = Object.create(BaseSvc.prototype);
	PeopleSvc.prototype.constructor = PeopleSvc;

	var a = {};
	var b = Object.create(a);


	angular.module("MyApp.Services")
		.factory("FirstServiceUsingFactory", factory);
		.service("FirstServiceUsingService", PeopleSvc);

})(angular);
