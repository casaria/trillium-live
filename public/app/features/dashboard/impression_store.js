/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/store","lodash","app/core/config"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(){}return a.prototype.addDashboardImpression=function(a){var b=this.impressionKey(e.default),f=[];c.default.exists(b)&&(f=JSON.parse(c.default.get(b)),d.default.isArray(f)||(f=[])),f=f.filter(function(b){return a!==b}),f.unshift(a),f.length>50&&f.pop(),c.default.set(b,JSON.stringify(f))},a.prototype.getDashboardOpened=function(){var a=c.default.get(this.impressionKey(e.default))||"[]";return a=JSON.parse(a),a=d.default.filter(a,function(a){return d.default.isNumber(a)})},a.prototype.impressionKey=function(a){return"dashboard_impressions-"+a.bootData.user.orgId},a}(),a("ImpressionsStore",f),g=new f,a("impressions",g)}}});