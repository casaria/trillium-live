/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","jquery","app/core/core_module","app/core/config"],function(a,b,c,d){"use strict";c.default.service("googleAnalyticsSrv",["$rootScope","$location",function(a,c){function e(){b.getScript("https://www.google-analytics.com/analytics.js");var a=window.ga=window.ga||function(){(a.q=a.q||[]).push(arguments)};return a.l=+new Date,a("create",d.googleAnalyticsId,"auto"),a}this.init=function(){a.$on("$viewContentLoaded",function(){var a={page:c.url()},b=window.ga||e();b("set",a),b("send","pageview")})}}]).run(["googleAnalyticsSrv",function(a){d.googleAnalyticsId&&a.init()}])});