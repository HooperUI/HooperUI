/**
 * @file: hmr-pollyfill.js
 * @since: 2020-09-28
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

// for hmr js
let originalAppend = document.head.appendChild;
document.head.appendChild = function () {
    let url = arguments[0].src || '';
    if (url.match(/\:8000\/dist\/.*hot\-update/)) {
        arguments[0].src = url.replace(':8000', ':8001');
    }
    originalAppend.apply(document.head, arguments);
};
// for hmr json
window.ah.proxy({
    onRequest: (config, handler) => {
        config.url.match(/^\/dist\/.*hot\-update/) && (config.url = 'http://127.0.0.1:8001' + config.url);
        handler.next(config);
    },
    onError: (err, handler) => {
        handler.next(err);
    },
    onResponse: (response, handler) => {
        handler.next(response);
    }
});
