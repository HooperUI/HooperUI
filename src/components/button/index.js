/**
 * @file: index.ts hoo-button component
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import HooButton from './button';

/* istanbul ignore next */
HooButton.install = function (app) {
    app.component('HooButton', HooButton);
};

const Counter = {
    template: '{{counter}}<button-counter></button-counter><hoo-button></hoo-button>',
    data() {
        return {
            counter: 0
        }
    }
}

let app = Vue.createApp(Counter)

app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
  })

app.use(HooButton)
app.mount('#app')
console.log(app)

export default HooButton;