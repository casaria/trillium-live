/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","jquery","jquery.flot","jquery.flot.gauge","app/core/utils/kbn","app/core/config","app/core/time_series2","app/plugins/sdk"],function(a,b){"use strict";function c(a,b){for(var c=a.thresholds.length;c>0;c--)if(b>=a.thresholds[c-1])return a.colorMap[c];return e.default.first(a.colorMap)}var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;a("getColorForValue",c);var e,f,g,h,i,j,k;return{setters:[function(a){e=a},function(a){f=a},function(a){},function(a){},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a}],execute:function(){k=function(a){function b(b,c,d,f){var g=a.call(this,b,c)||this;return g.$location=d,g.linkSrv=f,g.dataType="timeseries",g.valueNameOptions=["min","max","avg","current","total","name","first","delta","diff","range"],g.panelDefaults={links:[],datasource:null,maxDataPoints:100,interval:null,targets:[{}],cacheTimeout:null,format:"none",prefix:"",postfix:"",nullText:null,valueMaps:[{value:"null",op:"=",text:"N/A"}],mappingTypes:[{name:"value to text",value:1},{name:"range to text",value:2}],rangeMaps:[{from:"null",to:"null",text:"N/A"}],mappingType:1,nullPointMode:"connected",valueName:"avg",prefixFontSize:"50%",valueFontSize:"80%",postfixFontSize:"50%",thresholds:"",colorBackground:!1,colorValue:!1,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],sparkline:{show:!1,full:!1,lineColor:"rgb(31, 120, 193)",fillColor:"rgba(31, 118, 189, 0.18)"},gauge:{show:!1,minValue:0,maxValue:100,thresholdMarkers:!0,thresholdLabels:!1},tableColumn:""},e.default.defaults(g.panel,g.panelDefaults),g.events.on("data-received",g.onDataReceived.bind(g)),g.events.on("data-error",g.onDataError.bind(g)),g.events.on("data-snapshot-load",g.onDataReceived.bind(g)),g.events.on("init-edit-mode",g.onInitEditMode.bind(g)),g}return d(b,a),b.$inject=["$scope","$injector","$location","linkSrv"],b.prototype.onInitEditMode=function(){this.fontSizes=["20%","30%","50%","70%","80%","100%","110%","120%","150%","170%","200%"],this.addEditorTab("Options","public/app/plugins/panel/singlestat/editor.html",2),this.addEditorTab("Value Mappings","public/app/plugins/panel/singlestat/mappings.html",3),this.unitFormats=g.default.getUnitFormats()},b.prototype.setUnitFormat=function(a){this.panel.format=a.value,this.render()},b.prototype.onDataError=function(a){this.onDataReceived([])},b.prototype.onDataReceived=function(a){var b={};if(a.length>0&&"table"===a[0].type){this.dataType="table";var c=a.map(this.tableHandler.bind(this));this.setTableValues(c,b)}else this.dataType="timeseries",this.series=a.map(this.seriesHandler.bind(this)),this.setValues(b);this.data=b,this.render()},b.prototype.seriesHandler=function(a){var b=new i.default({datapoints:a.datapoints,alias:a.target});return b.flotpairs=b.getFlotPairs(this.panel.nullPointMode),b},b.prototype.tableHandler=function(a){var b=[],c={};return a.columns.forEach(function(a,b){c[b]=a.text}),this.tableColumnOptions=c,e.default.find(a.columns,["text",this.panel.tableColumn])||this.setTableColumnToSensibleDefault(a),a.rows.forEach(function(a){var d={};a.forEach(function(a,b){var e=c[b];d[e]=a}),b.push(d)}),b},b.prototype.setTableColumnToSensibleDefault=function(a){1===this.tableColumnOptions.length?this.panel.tableColumn=this.tableColumnOptions[0]:this.panel.tableColumn=e.default.find(a.columns,function(a){return"time"!==a.type}).text},b.prototype.setTableValues=function(a,b){if(a&&0!==a.length&&0!==a[0].length&&void 0!==a[0][0][this.panel.tableColumn]){var c=(Number.MAX_VALUE,a[0][0]);if(b.value=c[this.panel.tableColumn],e.default.isString(b.value))b.valueFormatted=e.default.escape(b.value),b.value=0,b.valueRounded=0;else{var d=this.getDecimalsForValue(b.value),f=g.default.valueFormats[this.panel.format];b.valueFormatted=f(c[this.panel.tableColumn],d.decimals,d.scaledDecimals),b.valueRounded=g.default.roundValue(b.value,this.panel.decimals||0)}this.setValueMapping(b)}},b.prototype.setColoring=function(a){a.background?(this.panel.colorValue=!1,this.panel.colors=["rgba(71, 212, 59, 0.4)","rgba(245, 150, 40, 0.73)","rgba(225, 40, 40, 0.59)"]):(this.panel.colorBackground=!1,this.panel.colors=["rgba(50, 172, 45, 0.97)","rgba(237, 129, 40, 0.89)","rgba(245, 54, 54, 0.9)"]),this.render()},b.prototype.invertColorOrder=function(){var a=this.panel.colors[0];this.panel.colors[0]=this.panel.colors[2],this.panel.colors[2]=a,this.render()},b.prototype.getDecimalsForValue=function(a){if(e.default.isNumber(this.panel.decimals))return{decimals:this.panel.decimals,scaledDecimals:null};var b,c=a/2,d=-Math.floor(Math.log(c)/Math.LN10),f=Math.pow(10,-d),g=c/f;g<1.5?b=1:g<3?(b=2,g>2.25&&(b=2.5,++d)):b=g<7.5?5:10,b*=f,Math.floor(a)===a&&(d=0);var h={};return h.decimals=Math.max(0,d),h.scaledDecimals=h.decimals-Math.floor(Math.log(b)/Math.LN10)+2,h},b.prototype.setValues=function(a){if(a.flotpairs=[],this.series.length>1){var b=new Error;throw b.message="Multiple Series Error",b.data="Metric query returns "+this.series.length+" series. Single Stat Panel expects a single series.\n\nResponse:\n"+JSON.stringify(this.series),b}if(this.series&&this.series.length>0){var c=e.default.last(this.series[0].datapoints),d=e.default.isArray(c)?c[0]:null;if("name"===this.panel.valueName)a.value=0,a.valueRounded=0,a.valueFormatted=this.series[0].alias;else if(e.default.isString(d))a.value=0,a.valueFormatted=e.default.escape(d),a.valueRounded=0;else{a.value=this.series[0].stats[this.panel.valueName],a.flotpairs=this.series[0].flotpairs;var f=this.getDecimalsForValue(a.value),h=g.default.valueFormats[this.panel.format];a.valueFormatted=h(a.value,f.decimals,f.scaledDecimals),a.valueRounded=g.default.roundValue(a.value,f.decimals)}a.scopedVars=e.default.extend({},this.panel.scopedVars),a.scopedVars.__name={value:this.series[0].label}}this.setValueMapping(a)},b.prototype.setValueMapping=function(a){if(1===this.panel.mappingType)for(var b=0;b<this.panel.valueMaps.length;b++){var c=this.panel.valueMaps[b];if("null"!==c.value){var d=parseFloat(c.value);if(d===a.valueRounded)return void(a.valueFormatted=c.text)}else if(null===a.value||void 0===a.value)return void(a.valueFormatted=c.text)}else if(2===this.panel.mappingType)for(var b=0;b<this.panel.rangeMaps.length;b++){var c=this.panel.rangeMaps[b];if("null"!==c.from||"null"!==c.to){var e=parseFloat(c.from),f=parseFloat(c.to);if(f>=a.valueRounded&&e<=a.valueRounded)return void(a.valueFormatted=c.text)}else if(null===a.value||void 0===a.value)return void(a.valueFormatted=c.text)}null!==a.value&&void 0!==a.value||(a.valueFormatted="no value")},b.prototype.removeValueMap=function(a){var b=e.default.indexOf(this.panel.valueMaps,a);this.panel.valueMaps.splice(b,1),this.render()},b.prototype.addValueMap=function(){this.panel.valueMaps.push({value:"",op:"=",text:""})},b.prototype.removeRangeMap=function(a){var b=e.default.indexOf(this.panel.rangeMaps,a);this.panel.rangeMaps.splice(b,1),this.render()},b.prototype.addRangeMap=function(){this.panel.rangeMaps.push({from:"",to:"",text:""})},b.prototype.link=function(a,b,d,e){function g(){b.css("height",e.height+"px")}function i(a,b){if(!v.colorValue)return b;var d=c(q,a);return d?'<span style="color:'+d+'">'+b+"</span>":b}function j(a,b,c){return c=w.replace(c,q.scopedVars),'<span class="'+a+'" style="font-size:'+b+'">'+c+"</span>"}function k(){var a='<div class="singlestat-panel-value-container">';v.prefix&&(a+=j("singlestat-panel-prefix",v.prefixFontSize,v.prefix));var b=i(q.value,q.valueFormatted);return a+=j("singlestat-panel-value",v.valueFontSize,b),v.postfix&&(a+=j("singlestat-panel-postfix",v.postfixFontSize,v.postfix)),a+="</div>"}function l(){var a=v.prefix?w.replace(v.prefix,q.scopedVars):"";return a+=q.valueFormatted,a+=v.postfix?w.replace(v.postfix,q.scopedVars):""}function m(){var a=b.width(),d=b.height(),g=Math.min(a,d);if(e.invalidGaugeRange=!1,v.gauge.minValue>v.gauge.maxValue)return void(e.invalidGaugeRange=!0);var i=f.default("<div></div>"),j={top:"10px",margin:"auto",position:"relative",height:.9*d+"px",width:g+"px"};i.css(j);for(var k=[],m=0;m<q.thresholds.length;m++)k.push({value:q.thresholds[m],color:q.colorMap[m]});k.push({value:v.gauge.maxValue,color:q.colorMap[q.colorMap.length-1]});var n=h.default.bootData.user.lightTheme?"rgb(230,230,230)":"rgb(38,38,38)",o=parseInt(v.valueFontSize)/100,p=Math.min(g/5,100)*o,r=Math.min(g/6,60),s=r/5,t={series:{gauges:{gauge:{min:v.gauge.minValue,max:v.gauge.maxValue,background:{color:n},border:{color:null},shadow:{show:!1},width:r},frame:{show:!1},label:{show:!1},layout:{margin:0,thresholdWidth:0},cell:{border:{width:0}},threshold:{values:k,label:{show:v.gauge.thresholdLabels,margin:8,font:{size:18}},show:v.gauge.thresholdMarkers,width:s},value:{color:v.colorValue?c(q,q.valueRounded):null,formatter:function(){return l()},font:{size:p,family:'"Helvetica Neue", Helvetica, Arial, sans-serif'}},show:!0}}};b.append(i);var u={data:[[0,q.valueRounded]]};f.default.plot(i,[u],t)}function n(){var a=b.width()+20;if(a<30)return void setTimeout(n,30);var c=e.height,d=f.default("<div></div>"),g={};if(g.position="absolute",v.sparkline.full){g.bottom="5px",g.left="-5px",g.width=a-10+"px";var h=c<=100?5:15*Math.round(c/100)+5;g.height=c-h+"px"}else g.bottom="0px",g.left="-5px",g.width=a-10+"px",g.height=Math.floor(.25*c)+"px";d.css(g);var i={legend:{show:!1},series:{lines:{show:!0,fill:1,lineWidth:1,fillColor:v.sparkline.fillColor}},yaxes:{show:!1},xaxis:{show:!1,mode:"time",min:e.range.from.valueOf(),max:e.range.to.valueOf()},grid:{hoverable:!1,show:!1}};b.append(d);var j={data:q.flotpairs,color:v.sparkline.lineColor};f.default.plot(d,[j],i)}function o(){if(e.data){q=e.data,q.thresholds=v.thresholds.split(",").map(function(a){return Number(a.trim())}),q.colorMap=v.colors,g();var d=v.gauge.show?"":k();if(v.colorBackground&&!isNaN(q.value)){var f=c(q,q.value);f&&(x.css("background-color",f),a.fullscreen?b.css("background-color",f):b.css("background-color",""))}else x.css("background-color",""),b.css("background-color","");b.html(d),v.sparkline.show&&n(),v.gauge.show&&m(),b.toggleClass("pointer",v.links.length>0),r=v.links.length>0?t.getPanelLinkAnchorInfo(v.links[0],q.scopedVars):null}}function p(){var a=f.default('<div id="tooltip" class="">hello</div>"');b.mouseleave(function(){0!==v.links.length&&u(function(){a.detach()})}),b.click(function(b){if(r&&!(f.default(b).parents(".panel-header").length>0)){if("_blank"===r.target){var c=window.open(r.href,"_blank");return void c.location}0===r.href.indexOf("http")?window.location.href=r.href:u(function(){s.url(r.href)}),a.detach()}}),b.mousemove(function(b){r&&(a.text("click to go to: "+r.title),a.place_tt(b.pageX,b.pageY-50))})}var q,r,s=this.$location,t=this.linkSrv,u=this.$timeout,v=e.panel,w=this.templateSrv,x=b.find(".panel-container");b=b.find(".singlestat-panel"),p(),this.events.on("render",function(){o(),e.renderingCompleted()})},b.templateUrl="module.html",b}(j.MetricsPanelCtrl),a("SingleStatCtrl",k),a("PanelCtrl",k)}}});