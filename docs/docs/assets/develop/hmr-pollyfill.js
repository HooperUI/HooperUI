/**
 * @file: hmr-pollyfill.js
 * @since: 2020-09-28
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

// if (MutationObserver) {
//     // 选择需要观察变动的节点
//     const targetNode = document.getElementsByTagName('head')[0];

//     // 观察器的配置（需要观察什么变动）
//     const config = {
//         attributes: true,
//         childList: true,
//         subtree: true
//     };

//     // 当观察到变动时执行的回调函数
//     const callback = function (mutationsList, observer) {
//         // Use traditional 'for loops' for IE 11
//         for (let mutation of mutationsList) {
//             if (mutation.type === 'childList') {
//                 console.log(mutation);
//             } else if (mutation.type === 'attributes') {
//                 console.log('The ' + mutation.attributeName + ' attribute was modified.');
//             }
//         }
//     };

//     // 创建一个观察器实例并传入回调函数
//     const observer = new MutationObserver(callback);

//     // 以上述配置开始观察目标节点
//     observer.observe(targetNode, config);
// }

// for hmr json
window.ah.proxy({
    onRequest: (config, handler) => {
        config.url.match(/^\/dist\//) && (config.url = 'http://127.0.0.1:8001' + config.url);
        handler.next(config);
        // if (!MutationObserver) {
        setTimeout(function () {
            if (config.url.match(/\/dist\/(.*)\.hot\-update/)) {
                let myScript = document.createElement('script');
                myScript.type = 'text/javascript';
                myScript.src = 'http://127.0.0.1:8001/dist/scripts.' + config.url.match(/\/dist\/(.*)\.hot\-update/)[1] + '.hot-update.js';
                document.body.appendChild(myScript);
            }
        }, 0);
        // }
    },
    onError: (err, handler) => {
        handler.next(err);
    },
    onResponse: (response, handler) => {
        handler.next(response);
    }
});
