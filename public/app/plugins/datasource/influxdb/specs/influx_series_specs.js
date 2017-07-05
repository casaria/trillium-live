/*! grafana - v3.1.0-1468321182 - 2016-07-12
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../influx_series"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("when generating timeseries from influxdb response",function(){b.describe("given multiple fields for series",function(){var a={alias:"",series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","mean","max","min"],values:[[1431946625e3,10,11,9],[1431946626e3,20,21,19]]}]};b.describe("and no alias",function(){b.it("should generate multiple datapoints for each column",function(){var d=new c["default"](a),e=d.getTimeSeries();b.expect(e.length).to.be(3),b.expect(e[0].target).to.be("cpu.mean {app: test, server: server1}"),b.expect(e[0].datapoints[0][0]).to.be(10),b.expect(e[0].datapoints[0][1]).to.be(1431946625e3),b.expect(e[0].datapoints[1][0]).to.be(20),b.expect(e[0].datapoints[1][1]).to.be(1431946626e3),b.expect(e[1].target).to.be("cpu.max {app: test, server: server1}"),b.expect(e[1].datapoints[0][0]).to.be(11),b.expect(e[1].datapoints[0][1]).to.be(1431946625e3),b.expect(e[1].datapoints[1][0]).to.be(21),b.expect(e[1].datapoints[1][1]).to.be(1431946626e3),b.expect(e[2].target).to.be("cpu.min {app: test, server: server1}"),b.expect(e[2].datapoints[0][0]).to.be(9),b.expect(e[2].datapoints[0][1]).to.be(1431946625e3),b.expect(e[2].datapoints[1][0]).to.be(19),b.expect(e[2].datapoints[1][1]).to.be(1431946626e3)})}),b.describe("and simple alias",function(){b.it("should use alias",function(){a.alias="new series";var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("new series"),b.expect(e[1].target).to.be("new series"),b.expect(e[2].target).to.be("new series")})}),b.describe("and alias patterns",function(){b.it("should replace patterns",function(){a.alias="alias: $m -> $tag_server ([[measurement]])";var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("alias: cpu -> server1 (cpu)"),b.expect(e[1].target).to.be("alias: cpu -> server1 (cpu)"),b.expect(e[2].target).to.be("alias: cpu -> server1 (cpu)")})})}),b.describe("given measurement with default fieldname",function(){var a={series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","value"],values:[["2015-05-18T10:57:05Z",10],["2015-05-18T10:57:06Z",12]]},{name:"cpu",tags:{app:"test2",server:"server2"},columns:["time","value"],values:[["2015-05-18T10:57:05Z",15],["2015-05-18T10:57:06Z",16]]}]};b.describe("and no alias",function(){b.it("should generate label with no field",function(){var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("cpu {app: test, server: server1}"),b.expect(e[1].target).to.be("cpu {app: test2, server: server2}")})})}),b.describe("given two series",function(){var a={alias:"",series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","mean"],values:[[1431946625e3,10],[1431946626e3,12]]},{name:"cpu",tags:{app:"test2",server:"server2"},columns:["time","mean"],values:[[1431946625e3,15],[1431946626e3,16]]}]};b.describe("and no alias",function(){b.it("should generate two time series",function(){var d=new c["default"](a),e=d.getTimeSeries();b.expect(e.length).to.be(2),b.expect(e[0].target).to.be("cpu.mean {app: test, server: server1}"),b.expect(e[0].datapoints[0][0]).to.be(10),b.expect(e[0].datapoints[0][1]).to.be(1431946625e3),b.expect(e[0].datapoints[1][0]).to.be(12),b.expect(e[0].datapoints[1][1]).to.be(1431946626e3),b.expect(e[1].target).to.be("cpu.mean {app: test2, server: server2}"),b.expect(e[1].datapoints[0][0]).to.be(15),b.expect(e[1].datapoints[0][1]).to.be(1431946625e3),b.expect(e[1].datapoints[1][0]).to.be(16),b.expect(e[1].datapoints[1][1]).to.be(1431946626e3)})}),b.describe("and simple alias",function(){b.it("should use alias",function(){a.alias="new series";var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("new series")})}),b.describe("and alias patterns",function(){b.it("should replace patterns",function(){a.alias="alias: $m -> $tag_server ([[measurement]])";var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("alias: cpu -> server1 (cpu)"),b.expect(e[1].target).to.be("alias: cpu -> server2 (cpu)")})})}),b.describe("given measurement with dots",function(){var a={alias:"",series:[{name:"app.prod.server1.count",tags:{},columns:["time","mean"],values:[[1431946625e3,10],[1431946626e3,12]]}]};b.it("should replace patterns",function(){a.alias="alias: $1 -> [[3]]";var d=new c["default"](a),e=d.getTimeSeries();b.expect(e[0].target).to.be("alias: prod -> count")})}),b.describe("given table response",function(){var a={alias:"",series:[{name:"app.prod.server1.count",tags:{datacenter:"Africa",server:"server2"},columns:["time","value2","value"],values:[[1431946625e3,23,10],[1431946626e3,25,12]]}]};b.it("should return table",function(){var d=new c["default"](a),e=d.getTable();b.expect(e.type).to.be("table"),b.expect(e.columns.length).to.be(5),b.expect(e.rows[0]).to.eql([1431946625e3,"Africa","server2",23,10])})})})}}});