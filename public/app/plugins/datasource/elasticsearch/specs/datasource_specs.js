/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","test/lib/common","moment","angular","test/specs/helpers","../datasource"],function(a,b){"use strict";var c,d,e,f,g,h;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a}],execute:function(){d.describe("ElasticDatasource",function(){function a(a){a.jsonData=a.jsonData||{},b.ds=b.$injector.instantiate(h.ElasticDatasource,{instanceSettings:a})}var b=new g.default.ServiceTestContext;d.beforeEach(d.angularMocks.module("grafana.core")),d.beforeEach(d.angularMocks.module("grafana.services")),d.beforeEach(b.providePhase(["templateSrv","backendSrv","timeSrv"])),d.beforeEach(d.angularMocks.inject(function(a,c,d,e){b.$q=a,b.$httpBackend=d,b.$rootScope=c,b.$injector=e,d.when("GET",/\.html$/).respond("")})),d.describe("When testing datasource with index pattern",function(){d.beforeEach(function(){a({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily",esVersion:"2"}})}),d.it("should translate index pattern to current day",function(){var a;b.backendSrv.datasourceRequest=function(c){return a=c,b.$q.when({data:{}})},b.ds.testDatasource(),b.$rootScope.$apply();var c=e.default.utc().format("YYYY.MM.DD");d.expect(a.url).to.be("http://es.com/asd-"+c+"/_mapping")})}),d.describe("When issueing metric query with interval pattern",function(){var c,g,h;d.beforeEach(function(){a({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily",esVersion:"2"}}),b.backendSrv.datasourceRequest=function(a){return c=a,b.$q.when({data:{responses:[]}})},b.ds.query({range:{from:e.default.utc([2015,4,30,10]),to:e.default.utc([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[{type:"raw_document"}],query:"escape\\:test"}]}),b.$rootScope.$apply(),g=c.data.split("\n"),h=f.default.fromJson(g[0])}),d.it("should translate index pattern to current day",function(){d.expect(h.index).to.eql(["asd-2015.05.30","asd-2015.05.31","asd-2015.06.01"])}),d.it("should json escape lucene query",function(){var a=f.default.fromJson(g[1]);d.expect(a.query.bool.filter[1].query_string.query).to.be("escape\\:test")})}),d.describe("When issueing document query",function(){var c,g,h;d.beforeEach(function(){a({url:"http://es.com",index:"test",jsonData:{esVersion:"2"}}),b.backendSrv.datasourceRequest=function(a){return c=a,b.$q.when({data:{responses:[]}})},b.ds.query({range:{from:e.default([2015,4,30,10]),to:e.default([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[{type:"raw_document"}],query:"test"}]}),b.$rootScope.$apply(),g=c.data.split("\n"),h=f.default.fromJson(g[0])}),d.it("should set search type to query_then_fetch",function(){d.expect(h.search_type).to.eql("query_then_fetch")}),d.it("should set size",function(){var a=f.default.fromJson(g[1]);d.expect(a.size).to.be(500)})}),d.describe("When getting fields",function(){var e;d.beforeEach(function(){a({url:"http://es.com",index:"metricbeat"}),b.backendSrv.datasourceRequest=function(a){return e=a,b.$q.when({data:{metricbeat:{mappings:{metricsets:{_all:{},properties:{"@timestamp":{type:"date"},beat:{properties:{name:{fields:{raw:{type:"keyword"}},type:"string"},hostname:{type:"string"}}},system:{properties:{cpu:{properties:{system:{type:"float"},user:{type:"float"}}},process:{properties:{cpu:{properties:{total:{type:"float"}}},name:{type:"string"}}}}}}}}}}})}}),d.it("should return nested fields",function(){b.ds.getFields({find:"fields",query:"*"}).then(function(a){var b=c.default.map(a,"text");d.expect(b).to.eql(["@timestamp","beat.name.raw","beat.name","beat.hostname","system.cpu.system","system.cpu.user","system.process.cpu.total","system.process.name"])}),b.$rootScope.$apply()}),d.it("should return fields related to query type",function(){b.ds.getFields({find:"fields",query:"*",type:"number"}).then(function(a){var b=c.default.map(a,"text");d.expect(b).to.eql(["system.cpu.system","system.cpu.user","system.process.cpu.total"])}),b.ds.getFields({find:"fields",query:"*",type:"date"}).then(function(a){var b=c.default.map(a,"text");d.expect(b).to.eql(["@timestamp"])}),b.$rootScope.$apply()})}),d.describe("When issuing aggregation query on es5.x",function(){var c,g,h;d.beforeEach(function(){a({url:"http://es.com",index:"test",jsonData:{esVersion:"5"}}),b.backendSrv.datasourceRequest=function(a){return c=a,b.$q.when({data:{responses:[]}})},b.ds.query({range:{from:e.default([2015,4,30,10]),to:e.default([2015,5,1,10])},targets:[{bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"2"}],metrics:[{type:"count"}],query:"test"}]}),b.$rootScope.$apply(),g=c.data.split("\n"),h=f.default.fromJson(g[0])}),d.it("should not set search type to count",function(){d.expect(h.search_type).to.not.eql("count")}),d.it("should set size to 0",function(){var a=f.default.fromJson(g[1]);d.expect(a.size).to.be(0)})}),d.describe("When issuing metricFind query on es5.x",function(){var c,e,g,h,i;d.beforeEach(function(){a({url:"http://es.com",index:"test",jsonData:{esVersion:"5"}}),b.backendSrv.datasourceRequest=function(a){return c=a,b.$q.when({data:{responses:[{aggregations:{1:{buckets:[{doc_count:1,key:"test"},{doc_count:2,key:"test2",key_as_string:"test2_as_string"}]}}}]}})},b.ds.metricFindQuery('{"find": "terms", "field": "test"}').then(function(a){i=a}),b.$rootScope.$apply(),e=c.data.split("\n"),g=f.default.fromJson(e[0]),h=f.default.fromJson(e[1])}),d.it("should get results",function(){d.expect(i.length).to.eql(2)}),d.it("should use key or key_as_string",function(){d.expect(i[0].text).to.eql("test"),d.expect(i[1].text).to.eql("test2_as_string")}),d.it("should not set search type to count",function(){d.expect(g.search_type).to.not.eql("count")}),d.it("should set size to 0",function(){d.expect(h.size).to.be(0)}),d.it("should not set terms aggregation size to 0",function(){d.expect(h.aggs[1].terms.size).to.not.be(0)})})})}}});