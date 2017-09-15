/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare function codeEditorDirective(): {
    restrict: string;
    template: string;
    scope: {
        content: string;
        onChange: string;
        getCompleter: string;
    };
    link: (scope: any, elem: any, attrs: any) => void;
};
