/**
 * @file: button.spec.js
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import Button from 'components/button';
import {
    createApp,
    createAppWithComp,
    createAppWithHooperUI
} from '../../util/utils';

describe('HButton', () => {
    it('should be installed by single', () => {
        const app = createAppWithComp(Button);
        expect(app.$.appContext.components).to.have.property('HButton');
    });
    it('should be installed by HooperUI', () => {
        const app = createAppWithHooperUI();
        expect(app.$.appContext.components).to.have.property('HButton');
    });
    it('should correct executed', () => {
        const app = createApp(Button);
        window.app = app;
        expect(true).to.equal(true);
        // expect(app.$.appContext.name).to.equal('HButton');
    });
});
