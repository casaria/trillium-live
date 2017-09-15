/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { DashboardExporter } from './exporter';
export declare class DashExportCtrl {
    private backendSrv;
    private dashboardSrv;
    private $scope;
    dash: any;
    exporter: DashboardExporter;
    dismiss: () => void;
    /** @ngInject */
    constructor(backendSrv: any, dashboardSrv: any, datasourceSrv: any, $scope: any);
    save(): void;
    saveJson(): void;
}
export declare function dashExportDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof DashExportCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        dismiss: string;
    };
};
