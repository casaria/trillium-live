/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",controller:f,bindToController:!0,controllerAs:"ctrl",template:g,scope:{mode:"@"}}}b&&b.id;a("prefsControlDirective",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b){this.backendSrv=a,this.$location=b,this.timezones=[{value:"",text:"Default"},{value:"browser",text:"Local browser time"},{value:"utc",text:"UTC"}],this.themes=[{value:"",text:"Default"},{value:"dark",text:"Dark"},{value:"light",text:"Light"}]}return a.$inject=["backendSrv","$location"],a.prototype.$onInit=function(){var a=this;return this.backendSrv.get("/api/"+this.mode+"/preferences").then(function(b){a.prefs=b,a.oldTheme=b.theme})},a.prototype.updatePrefs=function(){var a=this;if(this.prefsForm.$valid){var b={theme:this.prefs.theme,timezone:this.prefs.timezone,homeDashboardId:this.prefs.homeDashboardId};this.backendSrv.put("/api/"+this.mode+"/preferences",b).then(function(){window.location.href=d.default.appSubUrl+a.$location.path()})}},a}(),a("PrefsControlCtrl",f),g='\n<form name="ctrl.prefsForm" class="section gf-form-group">\n  <h3 class="page-heading">Preferences</h3>\n\n  <div class="gf-form">\n    <span class="gf-form-label width-10">UI Theme</span>\n    <div class="gf-form-select-wrapper max-width-20">\n      <select class="gf-form-input" ng-model="ctrl.prefs.theme" ng-options="f.value as f.text for f in ctrl.themes"></select>\n    </div>\n  </div>\n\n  <div class="gf-form">\n    <span class="gf-form-label width-10">Home Dashboard</span>\n    <dashboard-selector class="gf-form-select-wrapper max-width-20 gf-form-select-wrapper--has-help-icon"\n                        model="ctrl.prefs.homeDashboardId">\n    </dashboard-selector>\n  </div>\n\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Timezone</label>\n    <div class="gf-form-select-wrapper max-width-20">\n      <select class="gf-form-input" ng-model="ctrl.prefs.timezone" ng-options="f.value as f.text for f in ctrl.timezones"></select>\n    </div>\n  </div>\n\n  <div class="gf-form-button-row">\n    <button type="submit" class="btn btn-success" ng-click="ctrl.updatePrefs()">Update</button>\n  </div>\n</form>\n',e.default.directive("prefsControl",c)}}});