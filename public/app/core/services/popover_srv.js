/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module","tether-drop"],function(a,b){"use strict";function c(a,b,c){var e=null;this.close=function(){e&&e.close()},this.show=function(g){e&&(e.close(),e=null);var h,i=d.default.extend(b.$new(!0),g.model),j=function(){setTimeout(function(){i.$destroy(),h.tether&&h.destroy(),g.onClose&&g.onClose()}),e=null};i.dismiss=function(){h.close()};var k=document.createElement("div");k.innerHTML=g.template,a(k)(i),c(function(){h=new f.default({target:g.element,content:k,position:g.position,classes:g.classNames||"drop-popover",openOn:g.openOn,hoverCloseDelay:200,tetherOptions:{constraints:[{to:"scrollParent",attachment:"none both"}]}}),h.on("close",function(){j()}),e=h,e.open()},100)}}c.$inject=["$compile","$rootScope","$timeout"];var d,e,f;b&&b.id;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){e.default.service("popoverSrv",c)}}});