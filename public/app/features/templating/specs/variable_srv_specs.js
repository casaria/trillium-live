/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../all","moment","test/specs/helpers","app/core/core"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("VariableSrv",function(){function a(a,d){c.describe(a,function(){var a={};a.setup=function(b){a.setupFn=b},c.beforeEach(function(){a.setupFn();var d={};d.metricFindQuery=c.sinon.stub().returns(b.$q.when(a.queryResult)),b.datasourceSrv.get=c.sinon.stub().returns(b.$q.when(d)),b.datasourceSrv.getMetricSources=c.sinon.stub().returns(a.metricSources),a.variable=b.variableSrv.createVariableFromModel(a.variableModel),b.variableSrv.addVariable(a.variable),b.variableSrv.updateOptions(a.variable),b.$rootScope.$digest()}),d(a)})}var b=new e.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(b.providePhase(["datasourceSrv","timeSrv","templateSrv","$location"])),c.beforeEach(c.angularMocks.inject(function(a,d,e,g){b.$q=d,b.$rootScope=a,b.$location=e,b.variableSrv=g.get("variableSrv"),b.variableSrv.init({templating:{list:[]},events:new f.Emitter,updateSubmenuVisibility:c.sinon.stub()}),b.$rootScope.$digest()})),a("interval variable without auto",function(a){a.setup(function(){a.variableModel={type:"interval",query:"1s,2h,5h,1d",name:"test"}}),c.it("should update options array",function(){c.expect(a.variable.options.length).to.be(4),c.expect(a.variable.options[0].text).to.be("1s"),c.expect(a.variable.options[0].value).to.be("1s")})}),a("interval variable with auto",function(a){a.setup(function(){a.variableModel={type:"interval",query:"1s,2h,5h,1d",name:"test",auto:!0,auto_count:10};var e={from:d.default(new Date).subtract(7,"days").toDate(),to:new Date};b.timeSrv.timeRange=c.sinon.stub().returns(e),b.templateSrv.setGrafanaVariable=c.sinon.spy()}),c.it("should update options array",function(){c.expect(a.variable.options.length).to.be(5),c.expect(a.variable.options[0].text).to.be("auto"),c.expect(a.variable.options[0].value).to.be("$__auto_interval")}),c.it("should set $__auto_interval",function(){var a=b.templateSrv.setGrafanaVariable.getCall(0);c.expect(a.args[0]).to.be("$__auto_interval"),c.expect(a.args[1]).to.be("12h")})}),a("query variable with empty current object and refresh",function(a){a.setup(function(){a.variableModel={type:"query",query:"",name:"test",current:{}},a.queryResult=[{text:"backend1"},{text:"backend2"}]}),c.it("should set current value to first option",function(){c.expect(a.variable.options.length).to.be(2),c.expect(a.variable.current.value).to.be("backend1")})}),a("query variable with multi select and new options does not contain some selected values",function(a){a.setup(function(){a.variableModel={type:"query",query:"",name:"test",current:{value:["val1","val2","val3"],text:"val1 + val2 + val3"}},a.queryResult=[{text:"val2"},{text:"val3"}]}),c.it("should update current value",function(){c.expect(a.variable.current.value).to.eql(["val2","val3"]),c.expect(a.variable.current.text).to.eql("val2 + val3")})}),a("query variable with multi select and new options does not contain any selected values",function(a){a.setup(function(){a.variableModel={type:"query",query:"",name:"test",current:{value:["val1","val2","val3"],text:"val1 + val2 + val3"}},a.queryResult=[{text:"val5"},{text:"val6"}]}),c.it("should update current value with first one",function(){c.expect(a.variable.current.value).to.eql("val5"),c.expect(a.variable.current.text).to.eql("val5")})}),a("query variable with multi select and $__all selected",function(a){a.setup(function(){a.variableModel={type:"query",query:"",name:"test",includeAll:!0,current:{value:["$__all"],text:"All"}},a.queryResult=[{text:"val5"},{text:"val6"}]}),c.it("should keep current All value",function(){c.expect(a.variable.current.value).to.eql(["$__all"]),c.expect(a.variable.current.text).to.eql("All")})}),a("query variable with numeric results",function(a){a.setup(function(){a.variableModel={type:"query",query:"",name:"test",current:{}},a.queryResult=[{text:12,value:12}]}),c.it("should set current value to first option",function(){c.expect(a.variable.current.value).to.be("12"),c.expect(a.variable.options[0].value).to.be("12"),c.expect(a.variable.options[0].text).to.be("12")})}),a("basic query variable",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.queryResult=[{text:"backend1"},{text:"backend2"}]}),c.it("should update options array",function(){c.expect(a.variable.options.length).to.be(2),c.expect(a.variable.options[0].text).to.be("backend1"),c.expect(a.variable.options[0].value).to.be("backend1"),c.expect(a.variable.options[1].value).to.be("backend2")}),c.it("should select first option as value",function(){c.expect(a.variable.current.value).to.be("backend1")})}),a("and existing value still exists in options",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.variableModel.current={value:"backend2",text:"backend2"},a.queryResult=[{text:"backend1"},{text:"backend2"}]}),c.it("should keep variable value",function(){c.expect(a.variable.current.text).to.be("backend2")})}),a("and regex pattern exists",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.variableModel.regex="/apps.*(backend_[0-9]+)/",a.queryResult=[{text:"apps.backend.backend_01.counters.req"},{text:"apps.backend.backend_02.counters.req"}]}),c.it("should extract and use match group",function(){c.expect(a.variable.options[0].value).to.be("backend_01")})}),a("and regex pattern exists and no match",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.variableModel.regex="/apps.*(backendasd[0-9]+)/",a.queryResult=[{text:"apps.backend.backend_01.counters.req"},{text:"apps.backend.backend_02.counters.req"}]}),c.it("should not add non matching items, None option should be added instead",function(){c.expect(a.variable.options.length).to.be(1),c.expect(a.variable.options[0].isNone).to.be(!0)})}),a("regex pattern without slashes",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.variableModel.regex="backend_01",a.queryResult=[{text:"apps.backend.backend_01.counters.req"},{text:"apps.backend.backend_02.counters.req"}]}),c.it("should return matches options",function(){c.expect(a.variable.options.length).to.be(1)})}),a("regex pattern remove duplicates",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test"},a.variableModel.regex="/backend_01/",a.queryResult=[{text:"apps.backend.backend_01.counters.req"},{text:"apps.backend.backend_01.counters.req"}]}),c.it("should return matches options",function(){c.expect(a.variable.options.length).to.be(1)})}),a("with include All",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",includeAll:!0},a.queryResult=[{text:"backend1"},{text:"backend2"},{text:"backend3"}]}),c.it("should add All option",function(){c.expect(a.variable.options[0].text).to.be("All"),c.expect(a.variable.options[0].value).to.be("$__all")})}),a("with include all and custom value",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",includeAll:!0,allValue:"*"},a.queryResult=[{text:"backend1"},{text:"backend2"},{text:"backend3"}]}),c.it("should add All option with custom value",function(){c.expect(a.variable.options[0].value).to.be("$__all")})}),a("without sort",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",sort:0},a.queryResult=[{text:"bbb2"},{text:"aaa10"},{text:"ccc3"}]}),c.it("should return options without sort",function(){c.expect(a.variable.options[0].text).to.be("bbb2"),c.expect(a.variable.options[1].text).to.be("aaa10"),c.expect(a.variable.options[2].text).to.be("ccc3")})}),a("with alphabetical sort (asc)",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",sort:1},a.queryResult=[{text:"bbb2"},{text:"aaa10"},{text:"ccc3"}]}),c.it("should return options with alphabetical sort",function(){c.expect(a.variable.options[0].text).to.be("aaa10"),c.expect(a.variable.options[1].text).to.be("bbb2"),c.expect(a.variable.options[2].text).to.be("ccc3")})}),a("with alphabetical sort (desc)",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",sort:2},a.queryResult=[{text:"bbb2"},{text:"aaa10"},{text:"ccc3"}]}),c.it("should return options with alphabetical sort",function(){c.expect(a.variable.options[0].text).to.be("ccc3"),c.expect(a.variable.options[1].text).to.be("bbb2"),c.expect(a.variable.options[2].text).to.be("aaa10")})}),a("with numerical sort (asc)",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",sort:3},a.queryResult=[{text:"bbb2"},{text:"aaa10"},{text:"ccc3"}]}),c.it("should return options with numerical sort",function(){c.expect(a.variable.options[0].text).to.be("bbb2"),c.expect(a.variable.options[1].text).to.be("ccc3"),c.expect(a.variable.options[2].text).to.be("aaa10")})}),a("with numerical sort (desc)",function(a){a.setup(function(){a.variableModel={type:"query",query:"apps.*",name:"test",sort:4},a.queryResult=[{text:"bbb2"},{text:"aaa10"},{text:"ccc3"}]}),c.it("should return options with numerical sort",function(){c.expect(a.variable.options[0].text).to.be("aaa10"),c.expect(a.variable.options[1].text).to.be("ccc3"),c.expect(a.variable.options[2].text).to.be("bbb2")})}),a("datasource variable with regex filter",function(a){a.setup(function(){a.variableModel={type:"datasource",query:"graphite",name:"test",current:{value:"backend4_pee",text:"backend4_pee"},regex:"/pee$/"},a.metricSources=[{name:"backend1",meta:{id:"influx"}},{name:"backend2_pee",meta:{id:"graphite"}},{name:"backend3",meta:{id:"graphite"}},{name:"backend4_pee",meta:{id:"graphite"}}]}),c.it("should set only contain graphite ds and filtered using regex",function(){c.expect(a.variable.options.length).to.be(2),c.expect(a.variable.options[0].value).to.be("backend2_pee"),c.expect(a.variable.options[1].value).to.be("backend4_pee")}),c.it("should keep current value if available",function(){c.expect(a.variable.current.value).to.be("backend4_pee")})}),a("update custom variable",function(a){a.setup(function(){a.variableModel={type:"custom",query:"hej, hop, asd",name:"test"}}),c.it("should update options array",function(){c.expect(a.variable.options.length).to.be(3),c.expect(a.variable.options[0].text).to.be("hej"),c.expect(a.variable.options[1].value).to.be("hop")})})})}}});