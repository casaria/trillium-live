/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","jquery","lodash","app/core/utils/kbn","./panel_ctrl","app/core/utils/rangeutil","app/core/utils/datemath","./metrics_tab"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a}],execute:function(){k=function(a){function b(b,c){var d=a.call(this,b,c)||this;return d.editorTabIndex=1,d.$q=c.get("$q"),d.datasourceSrv=c.get("datasourceSrv"),d.timeSrv=c.get("timeSrv"),d.templateSrv=c.get("templateSrv"),d.scope=b,d.panel.targets||(d.panel.targets=[{}]),d.events.on("refresh",d.onMetricsPanelRefresh.bind(d)),d.events.on("init-edit-mode",d.onInitMetricsPanelEditMode.bind(d)),d.events.on("panel-teardown",d.onPanelTearDown.bind(d)),d}return l(b,a),b.prototype.onPanelTearDown=function(){this.dataSubscription&&(this.dataSubscription.unsubscribe(),this.dataSubscription=null)},b.prototype.onInitMetricsPanelEditMode=function(){this.addEditorTab("Metrics",j.metricsTabDirective),this.addEditorTab("Time range","public/app/features/panel/partials/panelTime.html")},b.prototype.onMetricsPanelRefresh=function(){var a=this;if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();var b=this.panel.snapshotData;return e.default.isArray(b)||(b=b.data),void this.events.emit("data-snapshot-load",b)}this.dataStream||(delete this.error,this.loading=!0,this.setTimeQueryStart(),this.datasourceSrv.get(this.panel.datasource).then(this.updateTimeRange.bind(this)).then(this.issueQueries.bind(this)).then(this.handleQueryResult.bind(this)).catch(function(b){return b.cancelled?void console.log("Panel request cancelled",b):(a.loading=!1,a.error=b.message||"Request Error",a.inspector={error:b},b.data&&(b.data.message&&(a.error=b.data.message),b.data.error&&(a.error=b.data.error)),a.events.emit("data-error",b),void console.log("Panel data error:",b))}))}},b.prototype.setTimeQueryStart=function(){this.timing.queryStart=(new Date).getTime()},b.prototype.setTimeQueryEnd=function(){this.timing.queryEnd=(new Date).getTime()},b.prototype.updateTimeRange=function(a){return this.datasource=a||this.datasource,this.range=this.timeSrv.timeRange(),this.applyPanelTimeOverrides(),this.panel.maxDataPoints?this.resolution=this.panel.maxDataPoints:this.resolution=Math.ceil(d.default(window).width()*(this.panel.span/12)),this.calculateInterval(),this.datasource},b.prototype.calculateInterval=function(){var a=this.panel.interval;a?a=this.templateSrv.replace(a,this.panel.scopedVars):this.datasource&&this.datasource.interval&&(a=this.datasource.interval);var b=f.default.calculateInterval(this.range,this.resolution,a);this.interval=b.interval,this.intervalMs=b.intervalMs},b.prototype.applyPanelTimeOverrides=function(){if(this.timeInfo="",this.panel.timeFrom){var a=this.templateSrv.replace(this.panel.timeFrom,this.panel.scopedVars),b=h.describeTextRange(a);if(b.invalid)return void(this.timeInfo="invalid time override");if(e.default.isString(this.range.raw.from)){var c=i.parse(b.from);this.timeInfo=b.display,this.range.from=c,this.range.to=i.parse(b.to),this.range.raw.from=b.from,this.range.raw.to=b.to}}if(this.panel.timeShift){var d=this.templateSrv.replace(this.panel.timeShift,this.panel.scopedVars),f=h.describeTextRange(d);if(f.invalid)return void(this.timeInfo="invalid timeshift");var g="-"+d;this.timeInfo+=" timeshift "+g,this.range.from=i.parseDateMath(g,this.range.from,!1),this.range.to=i.parseDateMath(g,this.range.to,!0),this.range.raw={from:this.range.from,to:this.range.to}}this.panel.hideTimeOverride&&(this.timeInfo="")},b.prototype.issueQueries=function(a){if(this.datasource=a,!this.panel.targets||0===this.panel.targets.length)return this.$q.when([]);var b=Object.assign({},this.panel.scopedVars,{__interval:{text:this.interval,value:this.interval},__interval_ms:{text:this.intervalMs,value:this.intervalMs}}),c={panelId:this.panel.id,range:this.range,rangeRaw:this.range.raw,interval:this.interval,intervalMs:this.intervalMs,targets:this.panel.targets,format:"png"===this.panel.renderer?"png":"json",maxDataPoints:this.resolution,scopedVars:b,cacheTimeout:this.panel.cacheTimeout};return a.query(c)},b.prototype.handleQueryResult=function(a){return this.setTimeQueryEnd(),this.loading=!1,a&&a.subscribe?void this.handleDataStream(a):(this.dashboard.snapshot&&(this.panel.snapshotData=a.data),a&&a.data||(console.log("Data source query result invalid, missing data field:",a),a={data:[]}),void this.events.emit("data-received",a.data))},b.prototype.handleDataStream=function(a){var b=this;return this.dataStream?void console.log("two stream observables!"):(this.dataStream=a,void(this.dataSubscription=a.subscribe({next:function(a){console.log("dataSubject next!"),a.range&&(b.range=a.range),b.events.emit("data-received",a.data)},error:function(a){b.events.emit("data-error",a),console.log("panel: observer got error")},complete:function(){console.log("panel: observer got complete"),b.dataStream=null}})))},b.prototype.setDatasource=function(a){var b=this;a.meta.mixed?e.default.each(this.panel.targets,function(a){a.datasource=b.panel.datasource,a.datasource||(a.datasource=c.default.defaultDatasource)}):this.datasource&&this.datasource.meta.mixed&&e.default.each(this.panel.targets,function(a){delete a.datasource}),this.panel.datasource=a.value,this.datasourceName=a.name,this.datasource=null,this.refresh()},b.prototype.addQuery=function(a){a.refId=this.dashboard.getNextQueryLetter(this.panel),this.panel.targets.push(a),this.nextRefId=this.dashboard.getNextQueryLetter(this.panel)},b.prototype.removeQuery=function(a){var b=e.default.indexOf(this.panel.targets,a);this.panel.targets.splice(b,1),this.nextRefId=this.dashboard.getNextQueryLetter(this.panel),this.refresh()},b.prototype.moveQuery=function(a,b){var c=e.default.indexOf(this.panel.targets,a);e.default.move(this.panel.targets,c,c+b)},b}(g.PanelCtrl),a("MetricsPanelCtrl",k)}}});