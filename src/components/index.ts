/**
 * @file: index.ts All components list
 * !NOTICE: This file will be overwrite by build/build.js or build/dev.js
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
import {VueApp} from 'utils/types';

// !DO NOT DELETE the comment below
// codeHolder
import Button from './button';

const components = [Button];
// holderEnd
// !DO NOT DELETE the comment above

// todo: install components
const install = function(app: VueApp) {
    components.forEach(component => {
        const comp = component as any;
        app.component(comp.name, comp);
    });
};
export default {
    Button,
    components,
    install
};
