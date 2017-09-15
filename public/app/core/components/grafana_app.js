/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","lodash","jquery","app/core/core_module","app/core/profiler","app/core/app_events"],function(a,b){"use strict";function c(a,b){return{restrict:"E",controller:j,link:function(c,d){function e(){m&&j.hasClass("page-dashboard")&&(new Date).getTime()-l>n&&(m=!1,j.addClass("user-activity-low"))}function g(){l=(new Date).getTime(),m||(m=!0,j.removeClass("user-activity-low"))}var h,j=f.default("body");f.default.fn.modal.Constructor.prototype.enforceFocus=function(){},c.$watch("contextSrv.sidemenu",function(a){void 0!==a&&(j.toggleClass("sidemenu-open",c.contextSrv.sidemenu),a||b.setPinnedState(!1)),b.sidemenu&&(h=!0,setTimeout(function(){h=!1},300))}),c.$watch("contextSrv.pinned",function(a){void 0!==a&&j.toggleClass("sidemenu-pinned",a)});var k;c.$on("$routeChangeSuccess",function(a,b){k&&j.removeClass(k),b.$$route&&(k=b.$$route.pageClass,k&&j.addClass(k)),f.default("#tooltip, .tooltip").remove(),b.params.kiosk&&i.default.emit("toggle-kiosk-mode")}),i.default.on("toggle-kiosk-mode",function(){j.toggleClass("page-kiosk-mode")});var l=(new Date).getTime(),m=!0,n=6e4;j.mousemove(g),j.keydown(g),document.addEventListener("visibilitychange",g),setInterval(e,2e3),i.default.on("toggle-view-mode",function(){l=0,e()}),j.click(function(e){var g=f.default(e.target);if(0!==g.parents().length){var i=g.closest("[data-click-hide]");if(i.length){var k=i.parent();i.detach(),setTimeout(function(){k.append(i)},100)}0===g.parents(".dash-playlist-actions").length&&a.stop(),j.find(".search-container").length>0&&0===g.parents(".search-results-container, .search-field-wrapper").length&&c.$apply(function(){c.appEvent("hide-dash-search")});var l=j.find(".navbar-page-btn--open");l.length>0&&0===g.parents(".navbar-page-btn--open").length&&l.removeClass("navbar-page-btn--open"),!h&&!b.pinned&&j.find(".sidemenu").length>0&&0===g.parents(".sidemenu").length&&c.$apply(function(){c.contextSrv.toggleSideMenu()});var m=d.find(".popover");m.length>0&&0===g.parents(".graph-legend").length&&m.hide()}})}}}c.$inject=["playlistSrv","contextSrv"];b&&b.id;a("grafanaAppDirective",c);var d,e,f,g,h,i,j;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){j=function(){function a(a,b,c,f,g,j){a.init=function(){a.contextSrv=j,f.appSubUrl=d.default.appSubUrl,a._=e.default,h.profiler.init(d.default,f),b.init(),c.init(),a.dashAlerts=b},a.initDashboard=function(b,c){a.appEvent("dashboard-fetch-end",b),g("DashboardCtrl",{$scope:c}).init(b)},f.onAppEvent=function(a,b,c){var d=f.$on(a,b),e=this;1!==e.$id||c||console.log("warning rootScope onAppEvent called without localscope"),c&&(e=c),e.$on("$destroy",d)},f.appEvent=function(a,b){f.$emit(a,b),i.default.emit(a,b)},f.colors=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],a.init()}return a.$inject=["$scope","alertSrv","utilSrv","$rootScope","$controller","contextSrv"],a}(),a("GrafanaCtrl",j),g.default.directive("grafanaApp",c)}}});