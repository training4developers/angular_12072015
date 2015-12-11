angular.module('MyApp.Templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("edit.tpl.html",
    "<div><div><label>Name: <input ng-model=widget.name></label></div><div><label>Description: <input ng-model=widget.description></label></div><div><label>Color: <input ng-model=widget.color></label></div><div><label>Size: <input ng-model=widget.size></label></div><div><label>Quantity: <input ng-model=widget.quantity></label></div></div><button ng-click=saveWidget()>Save</button> <button ng-click=deleteWidget() ng-if=widget._id>Delete</button> <button ng-click=returnToList()>Return to List</button>");
  $templateCache.put("home.tpl.html",
    "<table class=\"table table-striped\"><thead><tr><th>Name</th><th>Color</th><th>Size</th><th>Quantity</th><th>Action</th></tr></thead><tbody><tr ng-repeat=\"widget in widgets\"><td>{{widget.name}}</td><td>{{widget.color}}</td><td>{{widget.size}}</td><td>{{widget.quantity}}</td><td><button class=btn ng-click=editWidget(widget._id)>Edit</button> <button class=btn ng-click=viewWidget(widget._id)>View</button></td></tr></tbody></table><button ng-click=createWidget()>Create Widget</button>");
  $templateCache.put("view.tpl.html",
    "<div><div>Name: {{widget.name}}</div><div>Description: {{widget.description}}</div><div>Color: {{widget.color}}</div><div>Size: {{widget.size}}</div><div>Quantity: {{widget.quantity}}</div></div><button ng-click=editWidget()>Edit</button> <button ng-click=returnToList()>Return to List</button>");
}]);
