/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { PrometheusDatasource } from "./datasource";
export declare class PromCompleter {
    private datasource;
    identifierRegexps: RegExp[];
    constructor(datasource: PrometheusDatasource);
    getCompletions(editor: any, session: any, pos: any, prefix: any, callback: any): any;
}
