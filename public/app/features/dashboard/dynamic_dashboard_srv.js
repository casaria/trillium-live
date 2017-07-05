/*! grafana - v3.1.0-1468321182 - 2016-07-12
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/core_module"],function(a){var b,c,d,e;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(){this.iteration=(new Date).getTime()}return a.prototype.init=function(a){a.snapshot||this.process(a,{})},a.prototype.update=function(a){a.snapshot||(this.iteration=this.iteration+1,this.process(a,{}))},a.prototype.process=function(a,b){if(0!==a.templating.list.length){this.dashboard=a;var d,e,f,g,h=b.cleanUpOnly;for(d=0;d<this.dashboard.rows.length;d++){if(f=this.dashboard.rows[d],f.repeat)h||this.repeatRow(f,d);else if(f.repeatRowId&&f.repeatIteration!==this.iteration){this.dashboard.rows.splice(d,1),d-=1;continue}for(e=0;e<f.panels.length;e++)g=f.panels[e],g.repeat?h||this.repeatPanel(g,f):g.repeatPanelId&&g.repeatIteration!==this.iteration?(f.panels=c["default"].without(f.panels,g),e-=1):c["default"].isEmpty(g.scopedVars)||g.repeatIteration===this.iteration||(g.scopedVars={})}}},a.prototype.getRowClone=function(a,c,d){if(0===c)return a;var e,f,g,h,i=d+1;for(e=0;e<this.dashboard.rows.length;e++)if(g=this.dashboard.rows[e],g.repeatRowId===i&&g.repeatIteration!==this.iteration){h=g;break}if(!h)for(h=b["default"].copy(a),this.dashboard.rows.splice(d+c,0,h),e=0;e<h.panels.length;e++)f=h.panels[e],f.id=this.dashboard.getNextPanelId();return h.repeat=null,h.repeatRowId=i,h.repeatIteration=this.iteration,h},a.prototype.repeatRow=function(a,b){var d=this,e=this.dashboard.templating.list,f=c["default"].findWhere(e,{name:a.repeat});if(f){var g,h,i,j;g="All"===f.current.text?f.options.slice(1,f.options.length):c["default"].filter(f.options,{selected:!0}),c["default"].each(g,function(c,e){for(h=d.getRowClone(a,e,b),h.scopedVars={},h.scopedVars[f.name]=c,i=0;i<h.panels.length;i++)j=h.panels[i],j.scopedVars={},j.scopedVars[f.name]=c,j.repeatIteration=d.iteration})}},a.prototype.getPanelClone=function(a,c,d){if(0===d)return a;var e,f,g,h;for(e=0;e<c.panels.length;e++)if(g=c.panels[e],g.repeatIteration!==this.iteration&&g.repeatPanelId===a.id){h=g;break}return h||(h={id:this.dashboard.getNextPanelId()},c.panels.push(h)),f=h.id,b["default"].copy(a,h),h.id=f,h.repeatIteration=this.iteration,h.repeatPanelId=a.id,h.repeat=null,h},a.prototype.repeatPanel=function(a,b){var d=this,e=this.dashboard.templating.list,f=c["default"].findWhere(e,{name:a.repeat});if(f){var g;g="All"===f.current.text?f.options.slice(1,f.options.length):c["default"].filter(f.options,{selected:!0}),c["default"].each(g,function(c,e){var h=d.getPanelClone(a,b,e);h.span=Math.max(12/g.length,a.minSpan),h.scopedVars=h.scopedVars||{},h.scopedVars[f.name]=c})}},a}(),a("DynamicDashboardSrv",e),d["default"].service("dynamicDashboardSrv",e)}}});