<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="https://github.com/it-zhile/zhile-ui/blob/5ed67098bd7f08272254f78d557aacf318353528/src/assets/img/logo.png?raw=true">
  </a>
</p>

# 公告
这个 `UI` 库的核心想法是想教大家如何搭建一个基于`Vue`的组件库。市面上已经有很多成熟的中后台组件库，比如`element-ui`和`iview`。

这个组件库也是由个人维护开发，不建议使用到生产环境，如果有兴趣，可以 `fork` 下来作为自己技术探索的一个部分。

感谢大家的支持。

# LEUI

`zhile-ui` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品
[演示地址](https://it-zhile.github.io/zhile-ui/#/)

<p align="center">
  <a href="https://github.com/feross/standard">
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" alt="Standard - JavaScript Style">
  </a>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/vvui"><img src="https://img.shields.io/badge/npm-1.0.4-brightgreen.svg" alt="npm version"></a> 
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <a href="https://www.npmjs.com/package/vvui"><img src="https://img.shields.io/badge/licence-MIT-blue.svg"></a> 
</p>

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## 安装

- npm 

```bash
npm install zhile-ui --save
```

## 使用

```js
// 引入组件库
import LEUI from 'zhile-ui' 
// 引入样式库
import 'zhile-ui/lib/index.css' 

Vue.use(LEUI)
```