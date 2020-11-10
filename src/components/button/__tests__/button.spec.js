/**
 * @file: button.spec.js
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import Button from '../index';
import {mount} from '@vue/test-utils';

describe('HButton', () => {
    it('content', () => {
        const Comp = {
            template: '<div><Button>Hello, HButton!</Button></div>'
        };

        const wrapper = mount(Comp, {
            global: {
                components: {
                    Button
                }
            }
        });

        expect(wrapper.findComponent({name: 'HButton'}).text()).toContain(
            'Hello, HButton!'
        );
    });
});
