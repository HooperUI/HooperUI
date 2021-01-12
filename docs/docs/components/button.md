# Button

基础的按钮组件，可以方便的进行表单和页面搭建。

## 基础用法

<div id="app">
    <h-button>普通按钮</h-button>
    <h-button type="primary">主题色按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="info">信息按钮</h-button>
</div>
<script>
Demo(function () {
    const app = Vue.createApp({});
    app.use(HooperUI);
    app.mount('#app');
});
</script>

=== "示例代码"
    ```html
    <div id="app">
        <h-button>普通按钮</h-button>
        <h-button type="primary">主题色按钮</h-button>
        <h-button type="success">成功按钮</h-button>
        <h-button type="danger">危险按钮</h-button>
        <h-button type="warning">警告按钮</h-button> 
        <h-button type="info">信息按钮</h-button> 
    </div>
    ```
    ```js
    const app = Vue.createApp();
    app.use(HooperUI);
    app.mount('#app');
    ```

## 风格按钮

<div id="app2">
    <h-button v-for="color in colors" :type="color" @click="plus" shadow>{{color.toUpperCase()}}</h-button>
    <br/>
    <h-button v-for="color in colors" :type="color" @click="plus" shallow>{{color.toUpperCase()}}</h-button>
    <br/>
    <h-button v-for="color in colors" :type="color" @click="plus" round>{{color.toUpperCase()}}</h-button>
    <br/>
    <h-button v-for="color in colors" :type="color" @click="plus" dashed>{{color.toUpperCase()}}</h-button>
    <br/>
    <h-button v-for="color in colors" :type="color" @click="plus" square>{{color.toUpperCase()}}</h-button>
    <br/>
</div>
<script>
Demo(function () {
    const app = Vue.createApp({
        data() {
            return {
                colors: ['normal', 'primary', 'success', 'danger', 'warning', 'info']
            };
        }
    });
    app.use(HooperUI);
    app.mount('#app2');
});
</script>
