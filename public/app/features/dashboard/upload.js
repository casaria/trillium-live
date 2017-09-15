/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";function c(a,b,c){return{restrict:"E",template:e,scope:{onUpload:"&"},link:function(a){function c(b){for(var c,d=b.target.files,e=function(){return function(b){var c;try{c=JSON.parse(b.target.result)}catch(b){return console.log(b),void a.appEvent("alert-error",["Import failed","JSON -> JS Serialization failed: "+b.message])}a.$apply(function(){a.onUpload({dash:c})})}},f=0;c=d[f];f++){var g=new FileReader;g.onload=e(),g.readAsText(c)}}var d=window;d.File&&d.FileReader&&d.FileList&&d.Blob?document.getElementById("dashupload").addEventListener("change",c,!1):b.set("Oops","Sorry, the HTML5 File APIs are not fully supported in this browser.","error")}}}c.$inject=["timer","alertSrv","$location"];var d,e;b&&b.id;return{setters:[function(a){d=a}],execute:function(){e='\n<input type="file" id="dashupload" name="dashupload" class="hide"/>\n<label class="btn btn-secondary" for="dashupload">\n  <i class="fa fa-upload"></i>\n  Upload .json File\n</label>\n',d.default.directive("dashUpload",c)}}});