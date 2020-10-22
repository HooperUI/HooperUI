/**
 * @file: button.ts
 * @since: 2020-10-10
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import button from './button.vue';

button.install = (app: any) => {
    app.component(button.name, button);
}

export default button;

