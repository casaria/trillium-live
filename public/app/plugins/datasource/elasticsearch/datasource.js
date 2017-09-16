/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","moment","app/core/utils/kbn","./query_builder","./index_pattern","./elastic_response","./query_ctrl"],function(a,b,c,d,e,f,g){"use strict";function h(d,h,i,j,k){this.basicAuth=d.basicAuth,this.withCredentials=d.withCredentials,this.url=d.url,this.name=d.name,this.index=d.index,this.timeField=d.jsonData.timeField,this.esVersion=d.jsonData.esVersion,this.indexPattern=new f(d.index,d.jsonData.interval),this.interval=d.jsonData.timeInterval,this.queryBuilder=new e({timeField:this.timeField,esVersion:this.esVersion}),this._request=function(a,b,c){var d={url:this.url+"/"+b,method:a,data:c};return(this.basicAuth||this.withCredentials)&&(d.withCredentials=!0),this.basicAuth&&(d.headers={Authorization:this.basicAuth}),i.datasourceRequest(d)},this._get=function(a){var c=k.timeRange(),d=this.indexPattern.getIndexList(c.from.valueOf(),c.to.valueOf());return b.isArray(d)&&d.length?this._request("GET",d[0]+a).then(function(a){return a.data.$$config=a.config,a.data}):this._request("GET",this.indexPattern.getIndexForToday()+a).then(function(a){return a.data.$$config=a.config,a.data})},this._post=function(a,b){return this._request("POST",a,b).then(function(a){return a.data.$$config=a.config,a.data})},this.annotationQuery=function(d){var e=d.annotation,f=e.timeField||"@timestamp",g=e.query||"*",h=e.tagsField||"tags",i=e.titleField||"desc",k=e.textField||null,l={};l[f]={from:d.range.from.valueOf(),to:d.range.to.valueOf(),format:"epoch_millis"};var m=j.replace(g,{},"lucene"),n={bool:{filter:[{range:l},{query_string:{query:m}}]}},o={query:n,size:1e4};this.esVersion<5&&(o.fields=[f,"_source"]);var p={search_type:"query_then_fetch",ignore_unavailable:!0};e.index?p.index=e.index:p.index=this.indexPattern.getIndexList(d.range.from,d.range.to);var q=a.toJson(p)+"\n"+a.toJson(o)+"\n";return this._post("_msearch",q).then(function(a){for(var d=[],g=a.responses[0].hits.hits,j=function(a,c){if(c){for(var d=c.split("."),e=a,f=0;f<d.length;f++)if(e=e[d[f]],!e)return console.log("could not find field in annotation: ",c),"";return b.isArray(e)&&(e=e.join(", ")),e}},l=0;l<g.length;l++){var m=g[l]._source,n=m[f];if("undefined"!=typeof g[l].fields){var o=g[l].fields;(b.isString(o[f])||b.isNumber(o[f]))&&(n=o[f])}var p={annotation:e,time:c.utc(n).valueOf(),title:j(m,i),tags:j(m,h),text:j(m,k)};d.push(p)}return d})},this.testDatasource=function(){return k.setTime({from:"now-1m",to:"now"},!0),this.getFields({type:"date"}).then(function(a){var c=b.find(a,{text:this.timeField});return c?{status:"success",message:"Index OK. Time field name OK.",title:"Success"}:{status:"error",message:"No date field named "+this.timeField+" found",title:"Error"}}.bind(this),function(b){if(console.log(b),b.data&&b.data.error){var c=a.toJson(b.data.error);return b.data.error.reason&&(c=b.data.error.reason),{status:"error",message:c,title:"Error"}}return{status:"error",message:b.status,title:"Error"}})},this.getQueryHeader=function(b,c,d){var e={search_type:b,ignore_unavailable:!0};return e.index=this.indexPattern.getIndexList(c,d),a.toJson(e)},this.query=function(b){for(var c,d="",e=[],f=j.getAdhocFilters(this.name),i=0;i<b.targets.length;i++)if(c=b.targets[i],!c.hide){var k=j.replace(c.query||"*",b.scopedVars,"lucene"),l=this.queryBuilder.build(c,f,k),m=a.toJson(l),n=0===l.size&&this.esVersion<5?"count":"query_then_fetch",o=this.getQueryHeader(n,b.range.from,b.range.to);d+=o+"\n",d+=m+"\n",e.push(c)}return 0===e.length?h.when([]):(d=d.replace(/\$timeFrom/g,b.range.from.valueOf()),d=d.replace(/\$timeTo/g,b.range.to.valueOf()),d=j.replace(d,b.scopedVars),this._post("_msearch",d).then(function(a){return new g(e,a).getTimeSeries()}))},this.getFields=function(a){return this._get("/_mapping").then(function(c){function d(a,b,c){return"_"!==b[0]&&(!c.type||(c.type===a.type||c.type===f[a.type]))}function e(c){for(var f in c){var i=c[f];if(b.isObject(i.properties)&&(g.push(f),e(i.properties)),b.isObject(i.fields)&&(g.push(f),e(i.fields)),b.isString(i.type)){var j=g.concat(f).join(".");d(i,f,a)&&(h[j]={text:j,type:i.type})}}g.pop()}var f={float:"number",double:"number",integer:"number",long:"number",date:"date",string:"string",text:"string",scaled_float:"number",nested:"nested"},g=[],h={};for(var i in c){var j=c[i];if(j&&j.mappings){var k=j.mappings;for(var l in k){var m=k[l].properties;e(m)}}}return b.map(h,function(a){return a})})},this.getTerms=function(c){var d=k.timeRange(),e=this.esVersion>=5?"query_then_fetch":"count",f=this.getQueryHeader(e,d.from,d.to),g=a.toJson(this.queryBuilder.getTermsQuery(c));return g=g.replace(/\$timeFrom/g,d.from.valueOf()),g=g.replace(/\$timeTo/g,d.to.valueOf()),g=f+"\n"+g+"\n",this._post("_msearch?search_type="+e,g).then(function(a){if(!a.responses[0].aggregations)return[];var c=a.responses[0].aggregations[1].buckets;return b.map(c,function(a){return{text:a.key_as_string||a.key,value:a.key}})})},this.metricFindQuery=function(b){return b=a.fromJson(b),b?"fields"===b.find?(b.field=j.replace(b.field,{},"lucene"),this.getFields(b)):"terms"===b.find?(b.query=j.replace(b.query||"*",{},"lucene"),this.getTerms(b)):void 0:h.when([])},this.getTagKeys=function(){return this.getFields({})},this.getTagValues=function(a){return this.getTerms({field:a.key,query:"*"})}}return h.$inject=["instanceSettings","$q","backendSrv","templateSrv","timeSrv"],g=g.ElasticResponse,{ElasticDatasource:h}});