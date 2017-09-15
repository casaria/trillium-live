/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",controller:f,controllerAs:"ctrl",bindToController:!0,scope:{checked:"=",label:"@",labelClass:"@",tooltip:"@",switchClass:"@",onChange:"&"},template:e}}b&&b.id;a("switchDirective",c);var d,e,f;return{setters:[function(a){d=a}],execute:function(){e='\n<label for="check-{{ctrl.id}}" class="gf-form-label {{ctrl.labelClass}} pointer" ng-show="ctrl.label">\n  {{ctrl.label}}\n  <info-popover mode="right-normal" ng-if="ctrl.tooltip" position="top center">\n    {{ctrl.tooltip}}\n  </info-popover>\n</label>\n<div class="gf-form-switch {{ctrl.switchClass}}" ng-if="ctrl.show">\n  <input id="check-{{ctrl.id}}" type="checkbox" ng-model="ctrl.checked" ng-change="ctrl.internalOnChange()">\n  <label for="check-{{ctrl.id}}" data-on="Yes" data-off="No"></label>\n</div>\n',f=function(){function a(a,b){this.$timeout=b,this.show=!0,this.id=a.$id}return a.$inject=["$scope","$timeout"],a.prototype.internalOnChange=function(){var a=this;return this.$timeout(function(){return a.onChange()})},a}(),a("SwitchCtrl",f),d.default.directive("gfFormSwitch",c)}}});