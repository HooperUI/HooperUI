# Hi, HooperUI

准备好使用 HooperUI 了吗？在此之前你最好掌握下方技能来更加灵活的使用：

* [x] Javascript、ES6 and [Vue3.0](https://v3.vuejs.org/guide/introduction.html#what-is-vue-js){:target="_blank"}
* [x] CSS、SASS
* [x] HTML5
* [x] 模块化、ES module

!!! tip
    不掌握上方技能，你也可以参照我们的文档来使用 HooperUI，但我们仍然建议你详细的学习和理解上方技能，便于你深入理解和学习 HooperUI 的运作机理。

## npm 引入

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

``` bash
npm i hooperui -S
```

在此之前，你可能还需要引入 Vue3.0：

```bash
npm install vue@next
```

## 全局安装

HooperUI 目前支持全局安装，当您将 HooperUI 全部引入时，可以通过：

```js hl_lines="2 4"
import Vue from 'vue';
import HooperUI from 'hooperui';
const app = Vue.createApp({});
app.use(HooperUI);
app.mount('#wrapper');
```

更多全局配置项和按需引入，请参见：[安装](./install.md)

## 开始使用

现在你已经可以使用 HooperUI 的组件了，比如简单的 Button 组件：

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

在 CodePen 你还可以自行体验其他 HooperUI 的组件：

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="ziyoung" data-slug-hash="rRKYpd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Element demo">
  <span>See the Pen <a href="https://codepen.io/ziyoung/pen/rRKYpd">
  Element demo</a> by hetech (<a href="https://codepen.io/ziyoung">@ziyoung</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

恭喜，你可以继续深入的了解 HooperUI 了！ :partying_face:

