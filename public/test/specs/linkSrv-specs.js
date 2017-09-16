/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash","app/features/dashboard/all","app/features/panellinks/linkSrv"],function(a){"use strict";describe("linkSrv",function(){var b;beforeEach(module("grafana.core")),beforeEach(module("grafana.services")),beforeEach(inject(function(a){b=a})),describe("when appending query strings",function(){it("add ? to URL if not present",function(){var a=b.appendToQueryString("http://example.com","foo=bar");expect(a).to.be("http://example.com?foo=bar")}),it("do not add & to URL if ? is present but query string is empty",function(){var a=b.appendToQueryString("http://example.com?","foo=bar");expect(a).to.be("http://example.com?foo=bar")}),it("add & to URL if query string is present",function(){var a=b.appendToQueryString("http://example.com?foo=bar","hello=world");expect(a).to.be("http://example.com?foo=bar&hello=world")}),it("do not change the URL if there is nothing to append",function(){a.each(["",void 0,null],function(a){var c=b.appendToQueryString("http://example.com",a);expect(c).to.be("http://example.com");var d=b.appendToQueryString("http://example.com?",a);expect(d).to.be("http://example.com?");var e=b.appendToQueryString("http://example.com?foo=bar",a);expect(e).to.be("http://example.com?foo=bar")})})})})});