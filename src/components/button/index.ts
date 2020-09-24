/**
 * @file: index.ts hoo-button component
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const template = require('./button.pug');
const style = require('./button.scss');

function greeter(person) {
    return "Hello,aaa " + person;
}

let user = "Jane User2";

document.body.innerHTML = greeter(user);

export default {
    greeter
}