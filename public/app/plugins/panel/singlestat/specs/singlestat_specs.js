/*! grafana - v4.4.0 - 2017-07-04
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../../../../test/lib/common","../../../../../test/specs/helpers","../module"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("SingleStatCtrl",function(){function a(a,d){c.describe(a,function(){b.setup=function(a){c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module(function(a){a.preAssignBindingsEnabled(!0)})),c.beforeEach(b.providePhase()),c.beforeEach(b.createPanelController(e.SingleStatCtrl)),c.beforeEach(function(){a(),b.ctrl.onDataReceived(b.data),b.data=b.ctrl.data})},d(b)})}var b=new d.default.ControllerTestContext;a("with defaults",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[10,1],[20,2]]}]}),c.it("Should use series avg as default main value",function(){c.expect(a.data.value).to.be(15),c.expect(a.data.valueRounded).to.be(15)}),c.it("should set formatted falue",function(){c.expect(a.data.valueFormatted).to.be("15")})}),a("showing serie name instead of value",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[10,1],[20,2]]}],a.ctrl.panel.valueName="name"}),c.it("Should use series avg as default main value",function(){c.expect(a.data.value).to.be(0),c.expect(a.data.valueRounded).to.be(0)}),c.it("should set formatted value",function(){c.expect(a.data.valueFormatted).to.be("test.cpu1")})}),a("MainValue should use same number for decimals as displayed when checking thresholds",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[99.999,1],[99.99999,2]]}]}),c.it("Should be rounded",function(){c.expect(a.data.value).to.be(99.999495),c.expect(a.data.valueRounded).to.be(100)}),c.it("should set formatted value",function(){c.expect(a.data.valueFormatted).to.be("100")})}),a("When value to text mapping is specified",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[9.9,1]]}],a.ctrl.panel.valueMaps=[{value:"10",text:"OK"}]}),c.it("value should remain",function(){c.expect(a.data.value).to.be(9.9)}),c.it("round should be rounded up",function(){c.expect(a.data.valueRounded).to.be(10)}),c.it("Should replace value with text",function(){c.expect(a.data.valueFormatted).to.be("OK")})}),a("When range to text mapping is specifiedfor first range",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[41,50]]}],a.ctrl.panel.mappingType=2,a.ctrl.panel.rangeMaps=[{from:"10",to:"50",text:"OK"},{from:"51",to:"100",text:"NOT OK"}]}),c.it("Should replace value with text OK",function(){c.expect(a.data.valueFormatted).to.be("OK")})}),a("When range to text mapping is specified for other ranges",function(a){a.setup(function(){a.data=[{target:"test.cpu1",datapoints:[[65,75]]}],a.ctrl.panel.mappingType=2,a.ctrl.panel.rangeMaps=[{from:"10",to:"50",text:"OK"},{from:"51",to:"100",text:"NOT OK"}]}),c.it("Should replace value with text NOT OK",function(){c.expect(a.data.valueFormatted).to.be("NOT OK")})}),c.describe("When table data",function(){var b=[{columns:[{text:"Time",type:"time"},{text:"test1"},{text:"mean"},{text:"test2"}],rows:[[1492759673649,"ignore1",15,"ignore2"]],type:"table"}];a("with default values",function(a){a.setup(function(){a.data=b,a.ctrl.panel.tableColumn="mean"}),c.it("Should use first rows value as default main value",function(){c.expect(a.data.value).to.be(15),c.expect(a.data.valueRounded).to.be(15)}),c.it("should set formatted value",function(){c.expect(a.data.valueFormatted).to.be("15")})}),a("When table data has multiple columns",function(a){a.setup(function(){a.data=b,a.ctrl.panel.tableColumn=""}),c.it("Should set column to first column that is not time",function(){c.expect(a.ctrl.panel.tableColumn).to.be("test1")})}),a("MainValue should use same number for decimals as displayed when checking thresholds",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",99.99999,"ignore2"],a.ctrl.panel.tableColumn="mean"}),c.it("Should be rounded",function(){c.expect(a.data.value).to.be(99.99999),c.expect(a.data.valueRounded).to.be(100)}),c.it("should set formatted falue",function(){c.expect(a.data.valueFormatted).to.be("100")})}),a("When value to text mapping is specified",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",9.9,"ignore2"],a.ctrl.panel.tableColumn="mean",a.ctrl.panel.valueMaps=[{value:"10",text:"OK"}]}),c.it("value should remain",function(){c.expect(a.data.value).to.be(9.9)}),c.it("round should be rounded up",function(){c.expect(a.data.valueRounded).to.be(10)}),c.it("Should replace value with text",function(){c.expect(a.data.valueFormatted).to.be("OK")})}),a("When range to text mapping is specified for first range",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",41,"ignore2"],a.ctrl.panel.tableColumn="mean",a.ctrl.panel.mappingType=2,a.ctrl.panel.rangeMaps=[{from:"10",to:"50",text:"OK"},{from:"51",to:"100",text:"NOT OK"}]}),c.it("Should replace value with text OK",function(){c.expect(a.data.valueFormatted).to.be("OK")})}),a("When range to text mapping is specified for other ranges",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",65,"ignore2"],a.ctrl.panel.tableColumn="mean",a.ctrl.panel.mappingType=2,a.ctrl.panel.rangeMaps=[{from:"10",to:"50",text:"OK"},{from:"51",to:"100",text:"NOT OK"}]}),c.it("Should replace value with text NOT OK",function(){c.expect(a.data.valueFormatted).to.be("NOT OK")})}),a("When value is string",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",65,"ignore2"],a.ctrl.panel.tableColumn="test1"}),c.it("Should replace value with text NOT OK",function(){c.expect(a.data.valueFormatted).to.be("ignore1")})}),a("When value is zero",function(a){a.setup(function(){a.data=b,a.data[0].rows[0]=[1492759673649,"ignore1",0,"ignore2"],a.ctrl.panel.tableColumn="mean"}),c.it("Should return zero",function(){c.expect(a.data.value).to.be(0)})})})})}}});