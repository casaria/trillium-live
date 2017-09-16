/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

ace.define("ace/snippets/prometheus",["require","exports","module"],function(a,b,c){"use strict";b.snippets=[{content:"rate(${1:metric}[${2:range}])",name:"rate()",scope:"prometheus",tabTrigger:"r"}],b.scope="prometheus"});