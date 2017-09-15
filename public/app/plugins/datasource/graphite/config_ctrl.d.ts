/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class GraphiteConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    graphiteVersions: {
        name: string;
        value: string;
    }[];
}
