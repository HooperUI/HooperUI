/**
 * @file: utils.js Utils for unit test
 * @since: 2020-09-25
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

import {
    createApp as createVueApp
} from 'vue';
import {createWrapper} from '@vue/test-utils';
import HooperUI from 'components/index';

/**
 * To create an Element with id attr into <body>
 * @date 2020-11-13
 * @returns {Element} the element just created
 */
let id = 0;
export const createElm = function() {
    const elm = document.createElement('div');

    elm.id = 'app' + ++id;
    document.body.appendChild(elm);

    return elm;
};


/**
 * To unmount an APP
 * @date 2020-11-13
 * @param {VueInstance} vm The vue instance to unmount
 */
export const destroyVM = function(vm) {
    // if it is wrapped by vue-test-util
    vm.destroy && vm.destroy();
    // or it is normal vue app instance
    vm.unmount && vm.unmount();
};


/**
 * Create a new app with props data
 * @date 2020-11-13
 * @param {VueCompnent} Comp the component options
 * @param {Object} propsData the props data
 * @param {Boolean} needMount if you want to mount this app on a dom
 * @return {VueComponentInstance} this new app
 */
export const createApp = function(Comp = {
    template: 'Hello, HooperUI!'
}, propsData = {}, needMount = true) {
    if (propsData === undefined || typeof propsData === 'boolean') {
        needMount = propsData;
        propsData = {};
    }
    let app = createVueApp({
        ...Comp,
        propsData
    });
    needMount && (app = createWrapper(app.mount(createElm())));
    return app;
};


/**
 * Create a new vue app, return this app
 * @date 2020-11-12
 * @param {VueCompnent} Comp the component options
 * @param {Boolean} needMount if you want to mount this app on a dom
 * @return {VueComponentInstance} this new app
 */
export const createAppWithHooperUI = function(Comp = {
    template: 'Hello, HooperUI!'
}, needMount = true) {
    if (Object.prototype.toString.call(Comp) === '[object String]') {
        Comp = {template: Comp};
    }
    let app = createVueApp(Comp);
    app.use(HooperUI);
    needMount && (app = createWrapper(app.mount(createElm())));
    return app;
};


/**
 * Create a new vue app, and install a component, then return this app
 * @date 2020-11-12
 * @param {VueCompnent} App the app options
 * @param {VueCompnent} Comp the component options
 * @param {Boolean} needMount if you want to mount this app on a dom
 * @return {VueComponentInstance} this new app
 */
export const createAppWithComp = function(App, Comp, needMount = true) {
    if (!Comp) {
        Comp = App;
        App = {
            template: 'Hello, HooperUI!'
        };
    }
    let app = createVueApp(App);
    app.use(Comp);
    needMount && (app = createWrapper(app.mount(createElm())));
    return app;
};


/**
 * Do nothing, but just waitting
 * @date 2020-11-13
 * @param {Number} ms How long to wait, default is 50ms
 * @return {Promise} wait promise
 */
export const wait = function(ms = 50) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};
