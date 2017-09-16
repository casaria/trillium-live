/*! grafana - v4.5.0-beta1 - 2017-09-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";function c(){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/heatmap/partials/display_editor.html",controller:e}}b&&b.id;a("heatmapDisplayEditor",c);var d,e;return{setters:[],execute:function(){d=".heatmap-color-legend",e=function(){function a(a){a.editor=this,this.panelCtrl=a.ctrl,this.panel=this.panelCtrl.panel,this.panelCtrl.render()}return a.$inject=["$scope"],a}(),a("HeatmapDisplayEditorCtrl",e)}}});