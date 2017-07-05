/*! grafana - v3.1.0-1468321182 - 2016-07-12
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/datemath","./influx_series","./influx_query","./response_parser"],function(a){var b,c,d,e,f,g;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,c,d,e){this.$q=c,this.backendSrv=d,this.templateSrv=e,this.type="influxdb",this.urls=b["default"].map(a.url.split(","),function(a){return a.trim()}),this.username=a.username,this.password=a.password,this.name=a.name,this.database=a.database,this.basicAuth=a.basicAuth,this.interval=(a.jsonData||{}).timeInterval,this.supportAnnotations=!0,this.supportMetrics=!0,this.responseParser=new f["default"]}return a.$inject=["instanceSettings","$q","backendSrv","templateSrv"],a.prototype.query=function(a){var c,f,g=this,h=this.getTimeFilter(a),i=[],j=b["default"].map(a.targets,function(b){if(b.hide)return"";i.push(b);var c=new e["default"](b,g.templateSrv,a.scopedVars),d=c.render(!0);return d=d.replace(/\$interval/g,b.interval||a.interval)}).reduce(function(a,b){return""!==b&&(a+=";"+b),a});return j=j.replace(/\$timeFilter/g,h),j=this.templateSrv.replace(j,a.scopedVars),this._seriesQuery(j).then(function(b){if(!b||!b.results)return[];var e=[];for(c=0;c<b.results.length;c++){var h=b.results[c];if(h&&h.series){var j=i[c],k=j.alias;k&&(k=g.templateSrv.replace(j.alias,a.scopedVars));var l=new d["default"]({series:b.results[c].series,alias:k});switch(j.resultFormat){case"table":e.push(l.getTable());break;default:var m=l.getTimeSeries();for(f=0;f<m.length;f++)e.push(m[f])}}}return{data:e}})},a.prototype.annotationQuery=function(a){if(!a.annotation.query)return this.$q.reject({message:"Query missing in annotation definition"});var b=this.getTimeFilter({rangeRaw:a.rangeRaw}),c=a.annotation.query.replace("$timeFilter",b);return c=this.templateSrv.replace(c,null,"regex"),this._seriesQuery(c).then(function(b){if(!b||!b.results||!b.results[0])throw{message:"No results in response from InfluxDB"};return new d["default"]({series:b.results[0].series,annotation:a.annotation}).getAnnotations()})},a.prototype.metricFindQuery=function(a){var c;try{c=this.templateSrv.replace(a,null,"regex")}catch(d){return this.$q.reject(d)}return this._seriesQuery(c).then(b["default"].curry(this.responseParser.parse)(a))},a.prototype._seriesQuery=function(a){return this._influxRequest("GET","/query",{q:a,epoch:"ms"})},a.prototype.serializeParams=function(a){return a?b["default"].reduce(a,function(a,b,c){return null===b||void 0===b?a:(a.push(encodeURIComponent(c)+"="+encodeURIComponent(b)),a)},[]).join("&"):""},a.prototype.testDatasource=function(){return this.metricFindQuery("SHOW MEASUREMENTS LIMIT 1").then(function(){return{status:"success",message:"Data source is working",title:"Success"}})},a.prototype._influxRequest=function(a,c,d){var e=this,f=e.urls.shift();e.urls.push(f);var g={u:e.username,p:e.password};e.database&&(g.db=e.database),"GET"===a&&(b["default"].extend(g,d),d=null);var h={method:a,url:f+c,params:g,data:d,precision:"ms",inspect:{type:"influxdb"},paramSerializer:this.serializeParams};return h.headers=h.headers||{},e.basicAuth&&(h.headers.Authorization=e.basicAuth),this.backendSrv.datasourceRequest(h).then(function(a){return a.data},function(a){if(0!==a.status||a.status>=300)throw a.data&&a.data.error?{message:"InfluxDB Error Response: "+a.data.error,data:a.data,config:a.config}:{message:"InfluxDB Error: "+a.message,data:a.data,config:a.config}})},a.prototype.getTimeFilter=function(a){var b=this.getInfluxTime(a.rangeRaw.from,!1),c=this.getInfluxTime(a.rangeRaw.to,!0),d="s"===b[b.length-1];return"now()"!==c||d?"time > "+b+" and time < "+c:"time > "+b},a.prototype.getInfluxTime=function(a,d){if(b["default"].isString(a)){if("now"===a)return"now()";var e=/^now-(\d+)([d|h|m|s])$/.exec(a);if(e){var f=parseInt(e[1]),g=e[2];return"now() - "+f+g}a=c.parse(a,d)}return(a.valueOf()/1e3).toFixed(0)+"s"},a}(),a("default",g)}}});