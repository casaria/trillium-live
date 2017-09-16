/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b){this.backendSrv=a,this.$q=b}return a.$inject=["backendSrv","$q"],a.prototype.getHistoryList=function(a,b){var c=a&&a.id?a.id:void 0;return c?this.backendSrv.get("api/dashboards/id/"+c+"/versions",b):this.$q.when([])},a.prototype.calculateDiff=function(a){return this.backendSrv.post("api/dashboards/calculate-diff",a)},a.prototype.restoreDashboard=function(a,b){var d=a&&a.id?a.id:void 0,e="api/dashboards/id/"+d+"/restore";return d&&c.default.isNumber(b)?this.backendSrv.post(e,{version:b}):this.$q.when({})},a}(),a("HistorySrv",e),d.default.service("historySrv",e)}}});