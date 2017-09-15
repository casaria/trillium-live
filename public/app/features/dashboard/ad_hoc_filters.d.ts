/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class AdHocFiltersCtrl {
    private uiSegmentSrv;
    private datasourceSrv;
    private $q;
    private variableSrv;
    private $scope;
    private $rootScope;
    segments: any;
    variable: any;
    removeTagFilterSegment: any;
    /** @ngInject */
    constructor(uiSegmentSrv: any, datasourceSrv: any, $q: any, variableSrv: any, $scope: any, $rootScope: any);
    buildSegmentModel(): void;
    getOptions(segment: any, index: any): any;
    segmentChanged(segment: any, index: any): void;
    updateVariableModel(): void;
}
export declare function adHocFiltersComponent(): {
    restrict: string;
    template: string;
    controller: typeof AdHocFiltersCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        variable: string;
    };
};
