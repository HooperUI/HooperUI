# Install 安装

通过多种方式来安装

## npm 引入

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

``` bash
npm i hooperui -S
```

在此之前，你可能还需要引入 Vue3.0：

```bash
npm install vue@next
```

## 全局配置

HooperUI 目前支持全局配置，你可以通过一次配置将该项应用全局。该配置目前支持 size 与 zIndex 字段。

* size 用于改变组件的默认尺寸
* zIndex 用于设置弹框的初始 z-index（默认值：9999）

您可以通过两种方式使用该功能，当您将 HooperUI 全部引入时，可以通过：

```js
import Vue from 'vue';
import HooperUI from 'hooperui';
const app = Vue.createApp({});
app.use(HooperUI, {
    size: 'small',
    zIndex: 1000
});
app.mount('#wrapper');
```

通过 Vue3.0，你还可以直接将这两项配置通过 `app.config.globalProperties` 写入 HooperUI：

```js hl_lines="2 4 5 6"
import Vue from 'vue';
import {Button, Nav} from 'hooperui';
const app = Vue.createApp({});
app.use(Button);
app.use(Nav);
app.config.globalProperties.$HooperUIConfig = {
    size: 'small',
    zIndex: 1000
};
app.mount('#wrapper');
```

## 开始使用

通过上面的配置，你已经可以使用 HooperUI 的组件了，比如简单的 Button 组件：

=== "JS"
    ```js
    dddddd
    ```
=== "HTML"
    ```html
    <div>bbb</div>
    ```
=== "Result"
    <div>aaa</div>