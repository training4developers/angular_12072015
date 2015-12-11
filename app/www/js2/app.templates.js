angular.module('MyApp.Templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("test.tpl.html",
    "<span>{{message}}</span>");
}]);
