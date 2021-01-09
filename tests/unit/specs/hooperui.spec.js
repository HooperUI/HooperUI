/**
 * @file: button.spec.js global test for hooperui
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import Button from 'components/button';
import {
    createAppWithComp,
    createAppWithHooperUI,
    createApp
} from 'tests/utils';

describe('HButton', () => {
    it('should be installed by single', () => {
        const app = createAppWithComp({
            template: '<div><h-button>Hello,HooperUI!</h-button></div>'
        }, Button);
        expect(app.findComponent('.hoo-btn').exists()).toBe(true);
        expect(app.text()).toContain('Hello,HooperUI!');
    });
    it('should be installed by HooperUI', () => {
        const app = createAppWithHooperUI({
            template: '<div><h-button>Hello,HooperUI!</h-button></div>'
        });
        expect(app.findComponent('.hoo-btn').exists()).toBe(true);
        expect(app.text()).toContain('Hello,HooperUI!');
    });
    it('should correct executed', () => {
        const app = createApp(Button);
        expect(app.findComponent('.hoo-btn').exists()).toBe(true);
    });
});
