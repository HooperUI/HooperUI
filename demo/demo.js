/**
 * @file: demo.js
 * @since: 2020-09-27
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const Counter = {
    template: `
    {{counter}}
    <h-button @click="plus">正常按钮</h-button>
    <h-button type="primary" @click="plus">主题色按钮</h-button>
    <h-button type="success" @click="plus">成功按钮</h-button>
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
