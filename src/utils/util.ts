import {VueApp, VuePlugin} from 'utils/types';
export const wrapInstall = <T>(comp: T, installCb?: {<T>(c: T): T}) => {
    const c = comp as any;
    if (installCb) {
        installCb(c);
    }
    else {
        c.install = function(app: VueApp) {
            app.component(c.name, comp);
        };
    }
    return c as T & VuePlugin;
};
