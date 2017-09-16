/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/datemath","./influx_series","./influx_query","./response_parser","./query_builder"],function(a,b){"use strict";var c,d,e,f,g,h,i;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a}],execute:function(){i=function(){function a(a,b,d,e){this.$q=b,this.backendSrv=d,this.templateSrv=e,this.type="influxdb",this.urls=c.default.map(a.url.split(","),function(a){return a.trim()}),this.username=a.username,this.password=a.password,this.name=a.name,this.database=a.database,this.basicAuth=a.basicAuth,this.withCredentials=a.withCredentials,this.interval=(a.jsonData||{}).timeInterval,this.supportAnnotations=!0,this.supportMetrics=!0,this.responseParser=new g.default}return a.$inject=["instanceSettings","$q","backendSrv","templateSrv"],a.prototype.query=function(a){var b,d,g,h=this,i=this.getTimeFilter(a),j=a.scopedVars,k=c.default.cloneDeep(a.targets),l=[],m=c.default.map(k,function(a){return a.hide?"":(l.push(a),j.interval=j.__interval,b=new f.default(a,h.templateSrv,j),b.render(!0))}).reduce(function(a,b){return""!==b&&(a+=";"+b),a});if(""===m)return this.$q.when({data:[]});var n=this.templateSrv.getAdhocFilters(this.name);return n.length>0&&(i+=" AND "+b.renderAdhocFilters(n)),j.timeFilter={value:i},m=this.templateSrv.replace(m,j),this._seriesQuery(m).then(function(b){if(!b||!b.results)return[];var c=[];for(d=0;d<b.results.length;d++){var f=b.results[d];if(f&&f.series){var i=l[d],j=i.alias;j&&(j=h.templateSrv.replace(i.alias,a.scopedVars));var k=new e.default({series:b.results[d].series,alias:j});switch(i.resultFormat){case"table":c.push(k.getTable());break;default:var m=k.getTimeSeries();for(g=0;g<m.length;g++)c.push(m[g])}}}return{data:c}})},a.prototype.annotationQuery=function(a){if(!a.annotation.query)return this.$q.reject({message:"Query missing in annotation definition"});var b=this.getTimeFilter({rangeRaw:a.rangeRaw}),c=a.annotation.query.replace("$timeFilter",b);return c=this.templateSrv.replace(c,null,"regex"),this._seriesQuery(c).then(function(b){if(!b||!b.results||!b.results[0])throw{message:"No results in response from InfluxDB"};return new e.default({series:b.results[0].series,annotation:a.annotation}).getAnnotations()})},a.prototype.targetContainsTemplate=function(a){for(var b=0,c=a.groupBy;b<c.length;b++)for(var d=c[b],e=0,f=d.params;e<f.length;e++){var g=f[e];if(this.templateSrv.variableExists(g))return!0}for(var h in a.tags)if(this.templateSrv.variableExists(a.tags[h].value))return!0;return!1},a.prototype.metricFindQuery=function(a){var b=this.templateSrv.replace(a,null,"regex");return this._seriesQuery(b).then(c.default.curry(this.responseParser.parse)(a))},a.prototype.getTagKeys=function(a){var b=new h.default({measurement:"",tags:[]},this.database),c=b.buildExploreQuery("TAG_KEYS");return this.metricFindQuery(c)},a.prototype.getTagValues=function(a){var b=new h.default({measurement:"",tags:[]},this.database),c=b.buildExploreQuery("TAG_VALUES",a.key);return this.metricFindQuery(c)},a.prototype._seriesQuery=function(a){return a?this._influxRequest("GET","/query",{q:a,epoch:"ms"}):this.$q.when({results:[]})},a.prototype.serializeParams=function(a){return a?c.default.reduce(a,function(a,b,c){return null===b||void 0===b?a:(a.push(encodeURIComponent(c)+"="+encodeURIComponent(b)),a)},[]).join("&"):""},a.prototype.testDatasource=function(){var a=this;return this.metricFindQuery("SHOW DATABASES").then(function(b){var d=c.default.find(b,{text:a.database});return d?{status:"success",message:"Data source is working",title:"Success"}:{status:"error",message:"Could not find the specified database name.",title:"DB Not found"}}).catch(function(a){return{status:"error",message:a.message,title:"Test Failed"}})},a.prototype._influxRequest=function(a,b,d){var e=this,f=e.urls.shift();e.urls.push(f);var g={};e.username&&(g.u=e.username,g.p=e.password),e.database&&(g.db=e.database),"GET"===a&&(c.default.extend(g,d),d=null);var h={method:a,url:f+b,params:g,data:d,precision:"ms",inspect:{type:"influxdb"},paramSerializer:this.serializeParams};return h.headers=h.headers||{},(this.basicAuth||this.withCredentials)&&(h.withCredentials=!0),e.basicAuth&&(h.headers.Authorization=e.basicAuth),this.backendSrv.datasourceRequest(h).then(function(a){return a.data},function(a){if(0!==a.status||a.status>=300)throw a.data&&a.data.error?{message:"InfluxDB Error: "+a.data.error,data:a.data,config:a.config}:{message:"Network Error: "+a.statusText+"("+a.status+")",data:a.data,config:a.config}})},a.prototype.getTimeFilter=function(a){var b=this.getInfluxTime(a.rangeRaw.from,!1),c=this.getInfluxTime(a.rangeRaw.to,!0),d="ms"===b[b.length-1];return"now()"!==c||d?"time >= "+b+" and time <= "+c:"time >= "+b},a.prototype.getInfluxTime=function(a,b){if(c.default.isString(a)){if("now"===a)return"now()";var e=/^now-(\d+)([d|h|m|s])$/.exec(a);if(e){var f=parseInt(e[1]),g=e[2];return"now() - "+f+g}a=d.parse(a,b)}return a.valueOf()+"ms"},a}(),a("default",i)}}});