/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(a){this.$q=a}return a.prototype.processQueryResult=function(a){var b=[];if(!a.data.results)return{data:b};for(var c in a.data.results){var d=a.data.results[c];if(d.series)for(var e=0,f=d.series;e<f.length;e++){var g=f[e];b.push({target:g.name,datapoints:g.points,refId:d.refId,meta:d.meta})}if(d.tables)for(var h=0,i=d.tables;h<i.length;h++){var j=i[h];j.type="table",j.refId=d.refId,j.meta=d.meta,b.push(j)}}return{data:b}},a.prototype.parseMetricFindQueryResult=function(a,b){if(!b||0===b.data.length||0===b.data.results[a].meta.rowCount)return[];var c=b.data.results[a].tables[0].columns,d=b.data.results[a].tables[0].rows,e=this.findColIndex(c,"__text"),f=this.findColIndex(c,"__value");return 2===c.length&&e!==-1&&f!==-1?this.transformToKeyValueList(d,e,f):this.transformToSimpleList(d)},a.prototype.transformToKeyValueList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)this.containsKey(d,a[e][b])||d.push({text:a[e][b],value:a[e][c]});return d},a.prototype.transformToSimpleList=function(a){for(var b=[],d=0;d<a.length;d++)for(var e=0;e<a[d].length;e++){var f=a[d][e];b.indexOf(f)===-1&&b.push(f)}return c.default.map(b,function(a){return{text:a}})},a.prototype.findColIndex=function(a,b){for(var c=0;c<a.length;c++)if(a[c].text===b)return c;return-1},a.prototype.containsKey=function(a,b){for(var c=0;c<a.length;c++)if(a[c].text===b)return!0;return!1},a.prototype.transformAnnotationResponse=function(a,b){for(var c=b.data.results[a.annotation.name].tables[0],d=-1,e=-1,f=-1,g=-1,h=0;h<c.columns.length;h++)"time_sec"===c.columns[h].text?d=h:"title"===c.columns[h].text?e=h:"text"===c.columns[h].text?f=h:"tags"===c.columns[h].text&&(g=h);if(d===-1)return this.$q.reject({message:"Missing mandatory time column (with time_sec column alias) in annotation query."});for(var i=[],h=0;h<c.rows.length;h++){var j=c.rows[h];i.push({annotation:a.annotation,time:1e3*Math.floor(j[d]),title:j[e],text:j[f],tags:j[g]?j[g].trim().split(/\s*,\s*/):[]})}return i},a}(),a("default",d)}}});