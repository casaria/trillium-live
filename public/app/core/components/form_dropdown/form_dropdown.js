/*! grafana - v4.4.0 - 2017-07-04
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","jquery","../../core_module"],function(a,b){"use strict";function c(a){var b=this.query;return"/"===b[0]&&(b=b.substring(1)),"/"===b[b.length-1]&&(b=b.substring(0,b.length-1)),a.toLowerCase().match(b.toLowerCase())}function d(){return{restrict:"E",template:i,controller:h,bindToController:!0,controllerAs:"ctrl",scope:{model:"=",getOptions:"&",onChange:"&",cssClass:"@",allowCustom:"@",labelMode:"@",lookupText:"@"}}}b&&b.id;a("formDropdownDirective",d);var e,f,g,h,i;return{setters:[function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(){function a(a,b,d,e,g){var h=this;this.$scope=a,this.$sce=d,this.templateSrv=e,this.$q=g,this.inputElement=b.find("input").first(),this.linkElement=b.find("a").first(),this.linkMode=!0,this.cancelBlur=null,a.$watch("ctrl.model",this.modelChanged.bind(this)),this.labelMode?this.cssClasses="gf-form-label "+this.cssClass:this.cssClasses="gf-form-input gf-form-input--dropdown "+this.cssClass,this.inputElement.attr("data-provide","typeahead"),this.inputElement.typeahead({source:this.typeaheadSource.bind(this),minLength:0,items:1e4,updater:this.typeaheadUpdater.bind(this),matcher:c});var i=this.inputElement.data("typeahead");i.lookup=function(){this.query=this.$element.val()||"";var a=this.source(this.query,f.default.proxy(this.process,this));return a?this.process(a):a},this.linkElement.keydown(function(a){40!==a.keyCode&&13!==a.keyCode||h.linkElement.click()}),this.inputElement.keydown(function(a){13===a.keyCode&&setTimeout(function(){h.inputElement.blur()},100)}),this.inputElement.blur(this.inputBlur.bind(this))}return a.$inject=["$scope","$element","$sce","templateSrv","$q"],a.prototype.getOptionsInternal=function(a){var b=this.getOptions({$query:a});return this.isPromiseLike(b)?b:this.$q.when(b)},a.prototype.isPromiseLike=function(a){return a&&"function"==typeof a.then},a.prototype.modelChanged=function(){var a=this;e.default.isObject(this.model)?this.updateDisplay(this.model.text):this.lookupText?this.getOptionsInternal("").then(function(b){var c=e.default.find(b,{value:a.model});a.updateDisplay(c?c.text:a.model)}):this.updateDisplay(this.model)},a.prototype.typeaheadSource=function(a,b){var c=this;this.getOptionsInternal(a).then(function(a){c.optionCache=a;var d=e.default.map(a,"text");c.allowCustom&&e.default.indexOf(d,c.text)===-1&&a.unshift(c.text),b(d)})},a.prototype.typeaheadUpdater=function(a){return a===this.text?(clearTimeout(this.cancelBlur),this.inputElement.focus(),a):(this.inputElement.val(a),this.switchToLink(!0),a)},a.prototype.switchToLink=function(a){this.linkMode&&!a||(clearTimeout(this.cancelBlur),this.cancelBlur=null,this.linkMode=!0,this.inputElement.hide(),this.linkElement.show(),this.updateValue(this.inputElement.val()))},a.prototype.inputBlur=function(){this.cancelBlur=setTimeout(this.switchToLink.bind(this),200)},a.prototype.updateValue=function(a){var b=this;""!==a&&this.text!==a&&this.$scope.$apply(function(){var c=e.default.find(b.optionCache,{text:a});c?(e.default.isObject(b.model)?b.model=c:b.model=c.value,b.text=c.text):b.allowCustom&&(e.default.isObject(b.model)?b.model.text=b.model.value=a:b.model=a,b.text=a),b.$scope.$$postDigest(function(){b.$scope.$apply(function(){b.onChange({$option:c})})})})},a.prototype.updateDisplay=function(a){this.text=a,this.display=this.$sce.trustAsHtml(this.templateSrv.highlightVariablesAsHtml(a))},a.prototype.open=function(){this.inputElement.show(),this.inputElement.css("width",Math.max(this.linkElement.width(),80)+16+"px"),this.inputElement.focus(),this.linkElement.hide(),this.linkMode=!1;var a=this.inputElement.data("typeahead");a&&(this.inputElement.val(""),a.lookup())},a}(),a("FormDropdownCtrl",h),i='\n<input type="text"\n  data-provide="typeahead"\n  class="gf-form-input"\n  spellcheck="false"\n  style="display:none">\n</input>\n<a ng-class="ctrl.cssClasses"\n\t tabindex="1"\n\t ng-click="ctrl.open()"\n\t give-focus="ctrl.focus"\n\t ng-bind-html="ctrl.display">\n</a>\n',g.default.directive("gfFormDropdown",d)}}});