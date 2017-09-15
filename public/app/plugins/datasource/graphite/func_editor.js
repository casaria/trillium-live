/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","jquery"],function(a,b,c){"use strict";a.module("grafana.directives").directive("graphiteFuncEditor",["$compile","templateSrv",function(a,d){var e='<a ng-click="">{{func.def.name}}</a><span>(</span>',f='<input type="text" style="display:none" class="input-mini tight-form-func-param"></input>',g='<div class="tight-form-func-controls"><span class="pointer fa fa-arrow-left"></span><span class="pointer fa fa-question-circle"></span><span class="pointer fa fa-remove" ></span><span class="pointer fa fa-arrow-right"></span></div>';return{restrict:"A",link:function(h,i){function j(a){var b=c(this),d=b.next();d.val(y.params[a]),d.css("width",b.width()+16+"px"),b.hide(),d.show(),d.focus(),d.select();var e=d.data("typeahead");e&&(d.val(""),e.lookup())}function k(){B!==y.params.length&&(A||(A=!0,setTimeout(function(){u(),A=!1},200)))}function l(a){var b=c(this),e=b.prev(),f=b.val();(""!==f||y.def.params[a].optional)&&(e.html(d.highlightVariablesAsHtml(f)),y.updateParam(b.val(),a),k(),h.$apply(function(){x.targetChanged()}),b.hide(),e.show())}function m(a,b){13===b.which&&l.call(this,a)}function n(){this.style.width=8*(3+this.value.length)+"px"}function o(a,c){a.attr("data-provide","typeahead");var d=z.params[c].options;"int"===z.params[c].type&&(d=b.map(d,function(a){return a.toString()})),a.typeahead({source:d,minLength:0,items:20,updater:function(b){return setTimeout(function(){l.call(a[0],c)},0),b}});var e=a.data("typeahead");e.lookup=function(){return this.query=this.$element.val()||"",this.process(this.source)}}function p(){var a=i.closest(".tight-form");return i.hasClass("show-function-controls")?(i.removeClass("show-function-controls"),a.removeClass("has-open-function"),void w.hide()):(i.addClass("show-function-controls"),a.addClass("has-open-function"),void w.show())}function q(){w.appendTo(i),v.appendTo(i),b.each(z.params,function(a,e){if(!(a.optional&&y.params.length<=e)){e>0&&c("<span>, </span>").appendTo(i);var g=d.highlightVariablesAsHtml(y.params[e]),h=c('<a ng-click="" class="graphite-func-param-link">'+g+"</a>"),k=c(f);B++,h.appendTo(i),k.appendTo(i),k.blur(b.partial(l,e)),k.keyup(n),k.keypress(b.partial(m,e)),h.click(b.partial(j,e)),z.params[e].options&&o(k,e)}}),c("<span>)</span>").appendTo(i),a(i.contents())(h)}function r(){h.func.added&&(h.func.added=!1,setTimeout(function(){i.find(".graphite-func-param-link").first().click()},10))}function s(){v.click(p)}function t(){w.click(function(a){var d=c(a.target);return d.hasClass("fa-remove")?(p(),void h.$apply(function(){x.removeFunction(h.func)})):d.hasClass("fa-arrow-left")?void h.$apply(function(){b.move(x.functions,h.$index,h.$index-1),x.targetChanged()}):d.hasClass("fa-arrow-right")?void h.$apply(function(){b.move(x.functions,h.$index,h.$index+1),x.targetChanged()}):d.hasClass("fa-question-circle")?void window.open("http://graphite.readthedocs.org/en/latest/functions.html#graphite.render.functions."+z.name,"_blank"):void 0})}function u(){i.children().remove(),q(),r(),s(),t()}var v=c(e),w=c(g),x=h.ctrl,y=h.func,z=y.def,A=!1,B=0;u()}}}])});