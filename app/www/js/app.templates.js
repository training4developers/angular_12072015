angular.module('MyApp.Templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("home.tpl.html",
    "<table class=\"table table-striped\"><thead><tr><th>Name</th><th>Color</th><th>Size</th><th>Quantity</th><th>Action</th></tr></thead><tbody><tr ng-repeat=\"widget in widgets\"><td>{{widget.name}}</td><td>{{widget.color}}</td><td>{{widget.size}}</td><td>{{widget.quantity}}</td><td><button class=btn>Edit</button> <button class=btn>View</button></td></tr></tbody></table>");
}]);
