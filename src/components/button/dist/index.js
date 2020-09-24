"use strict";
/**
 * @file: index.ts hoo-button component
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
exports.__esModule = true;
var template = require('./button.pug');
var style = require('./button.scss');
function greeter(person) {
    return "Hello,aaa " + person;
}
var user = "Jane User2";
document.body.innerHTML = greeter(user);
exports["default"] = {
    greeter: greeter
};
