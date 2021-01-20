# 贡献代码

想要一起建设更好的 HooperUI 吗？这里有一份 PR 指引，希望你仔细阅读一下，其中涉及到下面几个方面：

* [x] 技术栈 Vue3.0、Sass、TS、Pug
* [x] 自动化和工程化 webpack 和 Mocha、Karma、CRPress
* [x] 文档编写 mkdoc

如果你上方技能还不太掌握，建议你先去学习一下相关技能，毕竟磨刀不误砍柴工呀！

## 开发流程

首先要介绍的是 HooperUI 的整体设计思路，方便你快速的运行起来。

### 安装依赖

HooperUI 里面有非常多的依赖项，有的是全局的，有的是 npm modules。在开始之前，你需要在全局安装下面的插件：

* [x] 基础依赖 Node.js(Version mast >= 12)
* [x] 文档依赖 Python(Version must >= 3)
* [x] 文档编写组件 mkdocs & mkdocs-material

你可以参照他们的官网进行安装，这里有一份 mkdocs 的安装指引：

``` bash
python -m pip install mkdocs
python -m mkdocs
# you need python >= 3.0
python -m pip install mkdocs-material
```

之后你需要安装npm 相关依赖：

```bash
npm install
```

好了，到现在为止，你已经完全具备 HooperUI 的所有开发依赖了。

### 设计思路

HooperUI 因为目前拓展的功能不是很多，所以目前的代码结构比较规整，开发环境的配置也相对比较简单，可能后面会针对不同用途定制专门的 npm scripts，但是现在，对于开发和构建，你只需要了解下面几个命令就行了：

```bash
# 开始开发（完全构建并在 doc 模式开发）
npm run dev
# 开始开发（完全构建并在 demo 模式开发）
npm run dev:demo
# 开始构建
npm run build
# 开始自动化测试
npm run test
```

当运行 `npm run dev` 脚本时，会进行下方自动化操作：

1. 在 127.0.0.1:8001 启动 webpack-dev-serve
2. 在 127.0.0.1:8000 启动 mkdocs serve
3. 启动监听，当 src/components 目录有代码变动 或 目录变动时，会自动更新到上述两个服务，并 livereload

!!! faq "Dev 的两种模式有何区别？"
    * Demo 模式：其实就是唤起了一个简单的 webpack-dev-server，你需要到 `./demo/demo.js` 中使用你正在编写的组件，然后写文档，写测试用例。这里只体现你自己的组件内容。开发地址为：http://127.0.0.1:8001/dist/。
    * Doc 模式：在上述模式的基础上，增加了实时监控 components 变化，实时生成新的 document 文档等功能，因此可以一边测试组件表现，一边编写文档。开发地址为：http://127.0.0.1:8000/。**推荐使用该方式**
    * Demo 模式不会启动 doc 的两个 watcher 进行编译和拷贝，比较节省内存，如果你发现 `npm run dev` 之后内存消耗较大，可以使用此模式。
    * 两个模式都会启用 webpack 的 HMR 功能，你不会在 dist 目录看到编译产出。
