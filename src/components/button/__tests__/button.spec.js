/**
 * @file: button.spec.js
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import Button from '../index';
import {mount} from '@vue/test-utils';

const Comp = {
    template: '<div><Button>Hello,HooperUI!</Button></div>'
};
describe('HButton', () => {
    const app = mount(Comp, {
        global: {
            components: {
                Button
            }
        }
    });
    it('should have right content', () => {
        expect(app.findComponent({name: 'HButton'}).text()).toContain(
            'Hello,HooperUI!'
        );
    });
});
