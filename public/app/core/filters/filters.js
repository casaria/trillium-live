/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","angular","moment","../core_module"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){f.default.filter("stringSort",function(){return function(a){return a.sort()}}),f.default.filter("slice",function(){return function(a,b,d){if(!c.default.isUndefined(a))return a.slice(b,d)}}),f.default.filter("stringify",function(){return function(a){return c.default.isObject(a)&&!c.default.isArray(a)?d.default.toJson(a):c.default.isNull(a)?null:a.toString()}}),f.default.filter("moment",function(){return function(a,b){switch(b){case"ago":return e.default(a).fromNow()}return e.default(a).fromNow()}}),f.default.filter("noXml",function(){var a=function(a){return c.default.isString(a)?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;"):a};return function(b){return c.default.isArray(b)?c.default.map(b,a):a(b)}}),f.default.filter("interpolateTemplateVars",["templateSrv",function(a){var b=function(b,c){var d;return d=c.ctrl?(c.ctrl.panel||c.ctrl.row).scopedVars:c.row.scopedVars,a.replaceWithText(b,d)};return b.$stateful=!0,b}]),a("default",{})}}});