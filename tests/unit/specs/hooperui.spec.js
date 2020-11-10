/**
 * @file: button.spec.js
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import Button from 'components/button';
import {mount} from '@vue/test-utils';

describe('HButton', () => {
    it('should correctly executed', () => {
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
    // it('should be installed by single', () => {
    //     const app = createAppWithComp(Button);
    //     expect(app.$.appContext.components).to.have.property('HButton');
    // });
    // it('should be installed by HooperUI', () => {
    //     const app = createAppWithHooperUI();
    //     expect(app.$.appContext.components).to.have.property('HButton');
    // });
    // it('should correct executed', () => {
    //     const app = createApp(Button);
    //     window.app = app;
    //     expect(true).to.equal(true);
    //     // expect(app.$.appContext.name).to.equal('HButton');
    // });
});
