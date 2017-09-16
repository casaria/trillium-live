/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import { PromCompleter } from './completer';
declare class PrometheusQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    metric: any;
    resolutions: any;
    formats: any;
    oldTarget: any;
    suggestMetrics: any;
    getMetricsAutocomplete: any;
    linkToPrometheus: any;
    /** @ngInject */
    constructor($scope: any, $injector: any, templateSrv: any);
    getCompleter(query: any): PromCompleter;
    getDefaultFormat(): "table" | "time_series";
    refreshMetricData(): void;
    updateLink(): void;
    getCollapsedText(): any;
}
export { PrometheusQueryCtrl };
