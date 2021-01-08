/**
 * @file: demo.js
 * @since: 2020-09-27
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const Counter = {
    template: `
    {{counter}}
    <h-button @click="plus">Hello, Hooper!</h-button>
    <h-button @click="plus">Hello, Hooper!</h-button>
    <h-button @click="plus">Hello, Hooper!</h-button>
    `,
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        plus() {
            console.log(1);
            this.counter++;
        }
    }
};

const app = window.Vue.createApp(Counter);
app.use(window.HooperUI.Button);
app.mount('#app');
console.log(app);
