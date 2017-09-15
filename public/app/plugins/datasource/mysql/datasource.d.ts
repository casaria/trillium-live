/// <reference path="../../../../../public/app/headers/common.d.ts" />
import ResponseParser from './response_parser';
export declare class MysqlDatasource {
    private backendSrv;
    private $q;
    private templateSrv;
    id: any;
    name: any;
    responseParser: ResponseParser;
    /** @ngInject **/
    constructor(instanceSettings: any, backendSrv: any, $q: any, templateSrv: any);
    interpolateVariable(value: any): any;
    query(options: any): any;
    annotationQuery(options: any): any;
    metricFindQuery(query: any, optionalOptions: any): any;
    testDatasource(): any;
}
