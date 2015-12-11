describe("Filter Tests", function() {

	var filterInstance;

	beforeEach(angular.mock.module("App"));
	
	beforeEach(angular.mock.inject(function($filter) {
	
		filterInstance = $filter("bsuUpperCase");
	
	}));
	
	it("makes a string uppercase", function() {
	
		var
			testValue = "some value",
			expectedValue = "SOME VALUE",
			result = filterInstance(testValue);
		
		expect(result).toEqual(expectedValue);
	
	});

	it("makes a string uppercase", function() {
	
		var
			testValue = "some value",
			unexpectedValue = "some value",
			result = filterInstance(testValue);

		expect(result).not.toEqual(unexpectedValue);
	
	});

});