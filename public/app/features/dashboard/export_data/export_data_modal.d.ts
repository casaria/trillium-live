/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class ExportDataModalCtrl {
    private $scope;
    private data;
    private panel;
    asRows: Boolean;
    dateTimeFormat: String;
    excel: false;
    /** @ngInject */
    constructor($scope: any);
    export(): void;
    dismiss(): void;
}
export declare function exportDataModal(): {
    restrict: string;
    templateUrl: string;
    controller: typeof ExportDataModalCtrl;
    controllerAs: string;
    scope: {
        panel: string;
        data: string;
    };
    bindToController: boolean;
};
