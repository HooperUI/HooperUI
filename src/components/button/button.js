/**
 * @file: index.ts hoo-button component
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

// import HooButton from './button';

// /* istanbul ignore next */
// HooButton.install = function (app) {
//     app.component('HooButton', HooButton);
// };

// export default HooButton;

export default {
    data() {
         return {
            count: 100,
            aaa: 123
        }
    },
    mounted() {
        setInterval(() => {
            this.count++;
        }, 1000);
    },
};
