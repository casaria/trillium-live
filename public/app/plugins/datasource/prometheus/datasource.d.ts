/// <reference path="../../../../../public/app/headers/common.d.ts" />
import TableModel from 'app/core/table_model';
export declare class PrometheusDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    private timeSrv;
    type: string;
    editorSrc: string;
    name: string;
    supportMetrics: boolean;
    url: string;
    directUrl: string;
    basicAuth: any;
    withCredentials: any;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any, timeSrv: any);
    _request(method: any, url: any, requestId?: any): any;
    interpolateQueryExpr(value: any, variable: any, defaultFormatFn: any): any;
    targetContainsTemplate(target: any): any;
    query(options: any): any;
    adjustStep(step: any, autoStep: any, range: any): number;
    performTimeSeriesQuery(query: any, start: any, end: any): any;
    performSuggestQuery(query: any): any;
    metricFindQuery(query: any): any;
    annotationQuery(options: any): any;
    testDatasource(): any;
    calculateInterval(interval: any, intervalFactor: any): number;
    intervalSeconds(interval: any): any;
    transformMetricData(md: any, options: any, start: any, end: any): {
        target: any;
        datapoints: any[];
    };
    transformMetricDataToTable(md: any): TableModel;
    createMetricLabel(labelData: any, options: any): any;
    renderTemplate(aliasPattern: any, aliasData: any): any;
    getOriginalMetricName(labelData: any): string;
    getPrometheusTime(date: any, roundUp: any): number;
}
