/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(a){this.target=a}return a.prototype.subscribe=function(a){var b=c.liveSrv.subscribe(this.target.stream);return b.subscribe(function(a){console.log("grafana stream ds data!",a)})},a}(),e=function(){function a(){}return a.prototype.query=function(a){if(0===a.targets.length)return Promise.resolve({data:[]});var b=a.targets[0],c=new d(b);return Promise.resolve(c)},a}(),a("GrafanaStreamDS",e)}}});