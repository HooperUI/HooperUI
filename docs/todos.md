# 注意

因为 webpack-dev-server 的 publicPath 写死了 dist，且不带 host 和 port，导致 hmr 的逻辑失效，请求失败。   
参见： https://github.com/webpack/webpack-dev-server/pull/2055   
目前项目中通过拦截 XHR 请求来实现，这里静等 webpack-dev-server 更新支持 public path

## todos

* [ ] Build HooperUI 的时候记得 copy 到 assets 目录一个不带 hash 的版本
* [ ] 当 webpack-dev-server 支持 publicPath 的时候，记得删除 webpack-dev-server 的 XHR 拦截
