/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl","./config_ctrl"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){a("Datasource",c.GraphiteDatasource),a("QueryCtrl",d.GraphiteQueryCtrl),a("ConfigCtrl",e.GraphiteConfigCtrl),f=function(){function a(){}return a.templateUrl="partials/annotations.editor.html",a}(),a("AnnotationsQueryCtrl",f)}}});