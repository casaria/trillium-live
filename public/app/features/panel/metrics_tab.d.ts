/// <reference path="../../../../public/app/headers/common.d.ts" />
import { DashboardModel } from '../dashboard/model';
export declare class MetricsTabCtrl {
    private $sce;
    private datasourceSrv;
    private backendSrv;
    private $timeout;
    dsName: string;
    panel: any;
    panelCtrl: any;
    datasources: any[];
    current: any;
    nextRefId: string;
    dashboard: DashboardModel;
    panelDsValue: any;
    addQueryDropdown: any;
    queryTroubleshooterOpen: boolean;
    helpOpen: boolean;
    optionsOpen: boolean;
    hasQueryHelp: boolean;
    helpHtml: string;
    queryOptions: any;
    /** @ngInject */
    constructor($scope: any, $sce: any, datasourceSrv: any, backendSrv: any, $timeout: any);
    updateDatasourceOptions(): void;
    getOptions(includeBuiltin: any): Promise<{
        value: any;
        text: any;
        datasource: any;
    }[]>;
    datasourceChanged(option: any): void;
    addMixedQuery(option: any): void;
    addQuery(): void;
    toggleHelp(): void;
    toggleOptions(): void;
    toggleQueryTroubleshooter(): void;
}
/** @ngInject **/
export declare function metricsTabDirective(): {
    restrict: string;
    scope: boolean;
    templateUrl: string;
    controller: typeof MetricsTabCtrl;
};
