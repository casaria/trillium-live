/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","test/lib/common","../response_parser"],function(a,b){"use strict";c=this;var c,d,e,f;b&&b.id;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){e.describe("influxdb response parser",function(){c.parser=new f.default,e.describe("SHOW TAG response",function(){var a='SHOW TAG KEYS FROM "cpu"',b={results:[{series:[{name:"cpu",columns:["tagKey"],values:[["datacenter"],["hostname"],["source"]]}]}]},f=c.parser.parse(a,b);e.it("expects three results",function(){e.expect(d.default.size(f)).to.be(3)})}),e.describe("SHOW TAG VALUES response",function(){var a='SHOW TAG VALUES FROM "cpu" WITH KEY = "hostname"';e.describe("response from 0.10.0",function(){var b={results:[{series:[{name:"hostnameTagValues",columns:["hostname"],values:[["server1"],["server2"],["server2"]]}]}]},f=c.parser.parse(a,b);e.it("should get two responses",function(){e.expect(d.default.size(f)).to.be(2),e.expect(f[0].text).to.be("server1"),e.expect(f[1].text).to.be("server2")})}),e.describe("response from 0.12.0",function(){var b={results:[{series:[{name:"cpu",columns:["key","value"],values:[["source","site"],["source","api"]]},{name:"logins",columns:["key","value"],values:[["source","site"],["source","webapi"]]}]}]},f=c.parser.parse(a,b);e.it("should get two responses",function(){e.expect(d.default.size(f)).to.be(3),e.expect(f[0].text).to.be("site"),e.expect(f[1].text).to.be("api"),e.expect(f[2].text).to.be("webapi")})})}),e.describe("SHOW FIELD response",function(){var a='SHOW FIELD KEYS FROM "cpu"';e.describe("response from 0.10.0",function(){var b={results:[{series:[{name:"measurements",columns:["name"],values:[["cpu"],["derivative"],["logins.count"],["logs"],["payment.ended"],["payment.started"]]}]}]},f=c.parser.parse(a,b);e.it("should get two responses",function(){e.expect(d.default.size(f)).to.be(6)})}),e.describe("response from 0.11.0",function(){var b={results:[{series:[{name:"cpu",columns:["fieldKey"],values:[["value"]]}]}]},f=c.parser.parse(a,b);e.it("should get two responses",function(){e.expect(d.default.size(f)).to.be(1)})})})})}}});