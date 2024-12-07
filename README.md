## 项目介绍

本项目修改自[marsview](https://github.com/JackySoft/marsview)，修改内容如下：

changelog: 2024.12.07

1，新建SQL表<br/>
2，插入一条users表的记录，创建管理员账户<br/>
3，修改主题色为蓝色<br/>
4，解决导入自定义组件时，报错问题<br/>
5，解决，创建项目，项目不显示的问题<br/>
6，解决自定义组件只能创建两个的限制<br/>
7，将OSS对象存储服务改为本地存储，不花一分钱<br/>


marsview是一个低代码开发平台，具有自定义组件，开发页面，保存页面的功能，发布预览默认会发布到marsview作者的自由域名系统下，且会报500错误。我目前正在考虑将页面发布到本地，方面调试。

## 如何搭建项目

1，下载[x-lowcode](https://github.com/qtencent7/x-lowcode)和[x-lowcode-server](https://github.com/qtencent7/x-lowcode-server)的代码<br/>
2，pnpm i<br/>
3，找到server项目的sql文件夹，把里面的SQL脚本在navicat里面执行一下<br/>
4，修改server项目根目录下的config.js文件中的数据库账户密码<br/>
5，启动后端项目：pnpm run dev<br/>
6，启动前端项目：pnpm run start:editor<br/>
7，使用admin@qq.com/admin123这个账号密码进行登录<br/>

## star 一下
魔改不易，请start鼓励一下作者

### 联系我
对于使用过程中的任何想法，都可以跟我联系。联系请备注“x-lowcode”
![alt text](c6643ec5ae992683d0e3b8a4b796d9d.jpg)




