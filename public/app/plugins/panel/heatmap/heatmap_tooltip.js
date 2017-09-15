/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["d3","jquery","lodash","app/core/utils/kbn","./heatmap_data_converter"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=30,i=5,j=160,k=40,l=function(){function a(a,b){this.scope=b,this.dashboard=b.ctrl.dashboard,this.panelCtrl=b.ctrl,this.panel=b.ctrl.panel,this.heatmapPanel=a,this.mouseOverBucket=!1,this.originalFillColor=null,a.on("mouseover",this.onMouseOver.bind(this)),a.on("mouseleave",this.onMouseLeave.bind(this))}return a.prototype.onMouseOver=function(a){this.panel.tooltip.show&&this.scope.ctrl.data&&!e.default.isEmpty(this.scope.ctrl.data.buckets)&&(this.tooltip||(this.add(),this.move(a)))},a.prototype.onMouseLeave=function(){this.destroy()},a.prototype.onMouseMove=function(a){this.panel.tooltip.show&&this.move(a)},a.prototype.add=function(){this.tooltip=c.default.select("body").append("div").attr("class","heatmap-tooltip graph-tooltip grafana-tooltip")},a.prototype.destroy=function(){this.tooltip&&this.tooltip.remove(),this.tooltip=null},a.prototype.show=function(a,b){if(this.panel.tooltip.show&&b&&!a.panelRelY){var c=this.getBucketIndexes(a,b),d=c.xBucketIndex,f=c.yBucketIndex;if(!b.buckets[d]||!this.tooltip)return void this.destroy();var g,h,i,j,k=b.buckets[d],l=e.default.find(k.buckets,function(a,b){return a.bounds.bottom===f||b===f}),m="YYYY-MM-DD HH:mm:ss",n=this.dashboard.formatDate(k.x,m);if(e.default.isNumber(this.panel.tooltipDecimals))j=this.valueFormatter(this.panel.tooltipDecimals,null);else{var o=(this.panelCtrl.decimals||-1)+1;j=this.valueFormatter(o,this.panelCtrl.scaledDecimals+2)}var p='<div class="graph-tooltip-time">'+n+'</div>\n      <div class="heatmap-histogram"></div>';if(l)if(l.bounds){var q=l.y?l.bounds.bottom:0;g=j(q),h=j(l.bounds.top),i=l.count,p+="<div>\n          bucket: <b>"+g+" - "+h+"</b> <br>\n          count: <b>"+i+"</b> <br>\n        </div>"}else p+="<div>count: <b>"+l.count+"</b><br></div>";else{if(!this.panel.tooltip.showHistogram)return void this.destroy();g=f,h="",i=0}this.tooltip.html(p),this.panel.tooltip.showHistogram&&this.addHistogram(k),this.move(a)}},a.prototype.getBucketIndexes=function(a,b){var c=this.getXBucketIndex(a.offsetX,b),d=this.getYBucketIndex(a.offsetY,b);return{xBucketIndex:c,yBucketIndex:d}},a.prototype.getXBucketIndex=function(a,b){var c=this.scope.xScale.invert(a-this.scope.yAxisWidth).valueOf(),d=g.getValueBucketBound(c,b.xBucketSize,1);return d},a.prototype.getYBucketIndex=function(a,b){var c=this.scope.yScale.invert(a-this.scope.chartTop),d=g.getValueBucketBound(c,b.yBucketSize,this.panel.yAxis.logBase);return d},a.prototype.getSharedTooltipPos=function(a){return a.pageX=this.heatmapPanel.offset().left+this.scope.xScale(a.x),a.pageY=this.heatmapPanel.offset().top+this.scope.chartHeight*a.panelRelY,a},a.prototype.addHistogram=function(a){var b=this.scope.ctrl.data.buckets[a.x],d=this.scope.ctrl.data.yBucketSize,f=this.scope.ctrl.data.yAxis,g=f.min,h=f.max,i=f.ticks,l=e.default.map(b.buckets,function(a){return[a.bounds.bottom,a.values.length]});l=e.default.filter(l,function(a){return a[0]>=g&&a[0]<=h});var m,n=this.scope.yScale.copy(),o=n.domain([g,h]).range([0,j]);if(1===this.panel.yAxis.logBase)m=Math.floor(j/(h-g)*d*.9);else{var p=d?d:1;m=Math.floor(j/i/p*.9)}m=Math.max(m,1);var q=e.default.reduce(e.default.map(l,function(a){return a[1]}),function(a,b){return a+b},0),r=c.default.scaleLinear().domain([0,q]).range([0,k]),s=this.tooltip.select(".heatmap-histogram").append("svg").attr("width",j).attr("height",k);s.selectAll(".bar").data(l).enter().append("rect").attr("x",function(a){return o(a[0])}).attr("width",m).attr("y",function(a){return k-r(a[1])}).attr("height",function(a){return r(a[1])})},a.prototype.move=function(a){if(this.tooltip){var b=d.default(this.tooltip.node())[0],c=b.clientWidth,e=b.clientHeight,f=a.pageX+h,g=a.pageY+i;return a.pageX+c+40>window.innerWidth&&(f=a.pageX-c-h),a.pageY-window.pageYOffset+e+20>window.innerHeight&&(g=a.pageY-e-i),this.tooltip.style("left",f+"px").style("top",g+"px")}},a.prototype.valueFormatter=function(a,b){void 0===b&&(b=null);var c=this.panel.yAxis.format;return function(d){return f.default.valueFormats[c](d,a,b)}},a}(),a("HeatmapTooltip",l)}}});