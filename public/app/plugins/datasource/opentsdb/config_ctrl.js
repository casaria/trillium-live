/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a){this.tsdbVersions=[{name:"<=2.1",value:1},{name:"==2.2",value:2},{name:"==2.3",value:3}],this.tsdbResolutions=[{name:"second",value:1},{name:"millisecond",value:2}],this.current.jsonData=this.current.jsonData||{},this.current.jsonData.tsdbVersion=this.current.jsonData.tsdbVersion||1,this.current.jsonData.tsdbResolution=this.current.jsonData.tsdbResolution||1}return a.$inject=["$scope"],a.templateUrl="public/app/plugins/datasource/opentsdb/partials/config.html",a}(),a("OpenTsConfigCtrl",c)}}});