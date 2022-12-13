export declare function UploadImageInterceptor(fieldName: string): {
    new (...args: any[]): {
        intercept(context: import("@nestjs/common").ExecutionContext, next: import("@nestjs/common").CallHandler<any>): import("rxjs").Observable<any> | Promise<import("rxjs").Observable<any>>;
    };
    apply(this: Function, thisArg: any, argArray?: any): any;
    call(this: Function, thisArg: any, ...argArray: any[]): any;
    bind(this: Function, thisArg: any, ...argArray: any[]): any;
    toString(): string;
    readonly length: number;
    arguments: any;
    caller: Function;
    readonly name: string;
    [Symbol.hasInstance](value: any): boolean;
};
