/*! grafana - v3.1.0-1468321182 - 2016-07-12
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a){var b;return{setters:[],execute:function(){b=function(){function a(a){var b=this;this.lazy=["$q","$route","$rootScope",function(c,d,e){return b.loadingDefer?b.loadingDefer.promise:(b.loadingDefer=c.defer(),System["import"](a).then(function(){b.loadingDefer.resolve()}),b.loadingDefer.promise)}]}return a}(),a("BundleLoader",b)}}});