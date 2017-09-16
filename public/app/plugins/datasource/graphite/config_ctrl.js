/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a){this.graphiteVersions=[{name:"0.9.x",value:"0.9"},{name:"1.0.x",value:"1.0"}],this.current.jsonData=this.current.jsonData||{},this.current.jsonData.graphiteVersion=this.current.jsonData.graphiteVersion||"0.9"}return a.$inject=["$scope"],a.templateUrl="public/app/plugins/datasource/graphite/partials/config.html",a}(),a("GraphiteConfigCtrl",c)}}});