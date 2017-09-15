/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(){}return a.prototype.init=function(a,b){this.dashboard=a,this.alerts=b||[]},a}(),a("AlertingSrv",d),c.default.service("alertingSrv",d)}}});