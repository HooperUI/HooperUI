---
classfiy: 'comps_basic'
weight: 1
---

# Button 按钮组件

基础的按钮组件，可以方便的进行表单和页面搭建。

## 基础用法

<div id="app">
    <!-- <h-button>普通按钮</h-button>
    <h-button type="primary">主题色按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="info">信息按钮</h-button> -->
</div>
<!-- <script>
Demo(function () {
    const app = Vue.createApp({});
    app.use(HooperUI);
    app.mount('#app');
    console.log('a');
});
</script> -->

=== "示例代码"
```html
<div id="app">
    <!-- <h-button>普通按钮</h-button>
    <h-button type="primary">主题色按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
    <h-button type="warning">警告按钮</h-button> 
    <h-button type="info">信息按钮</h-button>  -->
</div>
```
```js
const app = Vue.createApp();
app.use(HooperUI);
app.mount('#app');
```

## 风格按钮

在 `h-button` 组件上添加对应属性即可获得不同的按钮风格。

| 属性 | 含义 | 用法 |
|----|----|----|
| shadow | 按钮添加阴影 | `<h-button shadow>我有阴影</h-button>` |
| shallow | 浅色按钮 | `<h-button shallow>我是半透明按钮</h-button>` |
| round | 圆形按钮（注意按钮会适当加宽） | `<h-button round>我圆了</h-button>` |
| square | 方形按钮 | `<h-button square>我方了</h-button>` |
| dashed | 虚线按钮 | `<h-button dashed>我有虚线描边</h-button>` |

<div id="app2">
    <h-button shadow>我有阴影</h-button>
    <h-button type="primary" shallow>我是半透明按钮</h-button>
    <h-button type="success" round>我圆了</h-button>
    <h-button type="danger" square>我方了</h-button>
    <h-button type="warning" dashed>我有虚线描边</h-button>
</div>
<!-- <script>
Demo(function () {
    const app = Vue.createApp({});
    app.use(HooperUI);
    app.mount('#app2');
});
</script> -->

=== "示例代码"
```html
<h-button shadow>我有阴影</h-button>
<h-button type="primary" shallow>我是半透明按钮</h-button>
<h-button type="success" round>我圆了</h-button>
<h-button type="danger" square>我方了</h-button>
<h-button type="warning" dashed>我有虚线描边</h-button>
```

<div id="app3">
</div>

<script>
// import {createApp} from 'vue'
// const app = createApp({});
// app.use(window.HooperUI);
// app.mount('#app');
// // console.log('a');
// const app2 = createApp({
//     data() {
//         return {
//             colors: {
//                 normal: '普通按钮',
//                 primary: '主题色按钮',
//                 success: '成功按钮',
//                 danger: '危险按钮',
//                 warning: '警告按钮',
//                 info: '信息按钮',
//             }
//         };
//     }
// });
// app2.use(window.HooperUI);
// app2.mount('#app3');
// const app3 = createApp({
//     template: `<div>
//     <div><h-button v-for="(name, color) in colors" :type="color" @click="plus" shadow>{{name}}</h-button></div>
//     <div><h-button v-for="(name, color) in colors" :type="color" @click="plus" shallow>{{name}}</h-button></div>
//     <div><h-button v-for="(name, color) in colors" :type="color" @click="plus" round>{{name}}</h-button></div>
//     <div><h-button v-for="(name, color) in colors" :type="color" @click="plus" dashed>{{name}}</h-button></div>
//     <div><h-button v-for="(name, color) in colors" :type="color" @click="plus" square>{{name}}</h-button></div>
//     </div>`
// });
// app3.use(window.HooperUI);
// app3.mount('#app2');
// console.log(this.use)
</script>

!!! danger "使用注意"
    `type=normal` 类型的按钮，在设置 `shallow` 和 `dashed` 之后，不具备半透明效果，这在黑色主题的网站上表现较为特殊，请注意使用。
