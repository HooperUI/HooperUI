export declare const wrapInstall: <T>(comp: T, installCb?: (<T_1>(c: T_1) => T_1) | undefined) => (T & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | (T & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
});
