# 平台介绍

Marsview 是一款中后台方向的低代码可视化搭建平台，**面向前后端开发者**，开发者可以在平台上创建项目、页面和组件，支持事件交互、接口调用、数据联动和逻辑编排等，开发者还可通过微服务快速集成到自己的业务系统中。开发者通过 Marsview 可以完成页面或项目闭环。

![菜单关联页面](/home/platform.png)

## 特性

- 项目： 项目创建、项目配置（主题色、菜单布局、系统 Logo、面包屑...）、配置菜单、角色和用户； 基于 RBAC 的权限管理。创建项目后，可以直接通过 https://admin.marsview.com.cn 去访问配置的项目。
- 页面： 页面可以独立存在或配合项目使用。页面包含属性配置、组件拖拽、`JSON` 源码、组件大纲、全局变量、接口管理、页面权限。 页面同时支持其他传统系统通过微服务集成，不管你的系统是 `Vue` 还是 `React`。
- 组件： 目前开发的组件有 60+，支持大部分常用的组件，包含：表单、图表、容器、布局、数据展示和场景等几大类组件。
- 自定义组件： 当系统组件无法满足需求时，可通过自定义组件实现，支持在线编译，可以实现基于`Antd`构建的任意元素以及使用`G2Plots`实现的图表功能。
- 接口： 完整页面功能离不开接口的支持，支持 GET、POST、PUT、PATCH、DELETE 等请求方式，支持接口参数传递。
- 事件流： 通过事件流可以完成高难度的业务逻辑编排，比如：组件联动、组件显隐、组件禁用、脚本运行、变量赋值、表单操作等。
- 图片云：在搭建页面过程中，涉及到背景图片等，可直接上传到图片云中，获取`CDN`链接。

## 项目介绍

1. `editor`项目是面向开发者使用的。提供可视化搭建功能，对应`https://www.marsview.com.cn`。
2. `admin` 项目是面向普通用户访问的。在编辑器端搭建完页面后，点击发布，可通过`https://admin.marsview.com.cn`访问页面效果。
3. `doc` 对应开发者文档。
4. 后端提供`Java`和`Koa`两套服务，可自由选择。

## 环境解释

1. `stg` 对应测试环境，主要用于开发期间使用。
2. `pre` 对应预览环境，主要用于测试人员使用。
3. `prd` 对应生产环境，主要用于正式发布使用。

在 admin 中访问的项目或者页面，必须提前发布后，才能在对应环境中访问。

## 项目和页面关系

1. 项目是主体，页面是内容载体，项目会包含多个页面，项目创建完以后可以通过`https://admin.marsview.com.cn`访问。

2. 如果你要开发一个全新的项目，你可以考虑在平台创建一个项目，然后创建菜单，最后给菜单关联页面。

3. 如果你本身已经有一个传统`Vue`项目，此时你只需要在平台创建页面即可，最后通过微服务集成到你的业务系统中。

![菜单关联页面](/home/page.png)

## 社群

欢迎对低代码感兴趣的兄弟们加入 `Marsview` 社群，一起交流学习。

可添加我个人微信，备注：`Marsview` 我会拉你进群。

<img src="/my_qrcode.jpg" width="200" height="200" />
