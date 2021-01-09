/**
 * @file: demo.js
 * @since: 2020-09-27
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const Counter = {
    template: `
    {{counter}}
    <br/>
    <h-button v-for="color in colors" :type="color" @click="plus">{{color.toUpperCase()}}</h-button>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" shallow>{{color.toUpperCase()}}</h-button>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" round shadow>{{color.toUpperCase()}}</h-button>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" dashed shadow>{{color.toUpperCase()}}</h-button>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" square shallow shadow>
        {{color.toUpperCase()}}
        </h-button>
    <br/><br/>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" disabled shadow>
        {{color.toUpperCase()}}
    </h-button>
    <br/><br/>
    <h-button v-for="color in colors" :type="color" @click="plus" disabled dashed round shadow>
        {{color.toUpperCase()}}
    </h-button>
    `,
    data() {
        return {
            counter: 0,
            colors: ['normal', 'primary', 'success', 'danger', 'warning', 'info', 'link']
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
window.app = app;
console.log(app);
