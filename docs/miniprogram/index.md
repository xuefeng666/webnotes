# 小程序笔记简介

:::tip

**最后更新时间：2018年10月11日**

**字数：4458**

:::


**微信小程序**

**主要内容**

* 写在最前
    * 小程序内存（性能或体验）限制
    * Android内存限制
        * OOM
        * 为什么会有OOM
        * 内存限制的原因
    * iOS内存限制
        * 内存警告didReceiveMemoryWarning
        * iOS单个应用程序的最大可用内存

* 小程序介绍
    * 什么是小程序
    * 传统小程序
    * 小程序优点
    * 小程序缺点
    * 小程序对比
    * 小程序局限性

* 小程序开发须知
    * 小程序之前须知的坑
    * 小程序开发的坑
        * wx.navigateTo
        * storage
        * openid和unionid
        * 虚拟支付
        * 域名校监
        * 预览和体验版
        * 类目
        * 虚拟支付

* 关于虚拟支付
    * 虚拟支付现状
    * 问题原因
    * 苹果的防止套利
    * 微信的不妥协
    * 虚拟支付整改
    * 后续影响
    * 是否重新开放虚拟支付
    * 最新规则
    * 三大解决方案
        * 关闭支付渠道
        * 付费改为免费
        * 直接提示不可服务

* 小程序与React Native

* 第一个小程序
    * 体验小程序
    * 注册开发账号
    * 开发工具
    * 创建第一个程序

* 小程序文档结构
    * 项目目录
    * app.json
    * 页面json
    * app.wxss
    * 页面wxss
    * wxml结构
    * 项目配置文件
    * 开发域名配置
    * 模拟器缺陷

* 小程序基础
    * 常用组件
        * 基础内容
        * 视图组件
        * 表单组件
        * 导航
        * 媒体组件
        * 地图
        * 画布
        * webview
        * ad

    * wxss
        * 尺寸单位rpx
        * 样式导入
        * 内联样式
        * 选择器
        * 全局样式和局部样式

    * 数据绑定
    * 数据绑定回掉函数
    * 条件渲染
        * wx:if
        * hidden
        * block

    * 列表渲染
    * 触控事件
        * 什么是事件
        * 事件分类
        * 事件绑定
        * 模拟双击事件
    * touch 事件

* 应用的生命周期
    * 应用的生命周期函数
    * 前台和后台
    * 小程序运行机制
    * 小程序更新机制
    * 小程序运行

* 页面的生命周期
    * 页面生命周期函数
    * data
    * 生命周期函数
    * 页面相关事件处理函数
    * 应用的生命周期对页面生命周期的影响

* 小程序运行原理
    * 小程序运行环境
    * 小程序性能优化
    * 小程序打包机制
        * nwjs
        * React
        * 小程序打包后目录
    * 小程序两大线程
    * 小程序技术实现
        * 视图线程（AppView）
            * 视图线程功能
            * 机制
            * View - WXML
            * View - WXSS
            * View – WXSS Selectors
            * View - Component
            * View - Native Component
            * WebView预加载
            * 视图线程四大状态
        * 服务线程（AppService
            * 服务线程功能
            * 机制
            * App Service - Binding
            * App Service - Life Cylce
            * App Service - API
            * App Service - Router 
            * 服务线程五大状态
        * Service和View通信
        * 微信组件
        * 代码运行
    * 预先加载数据
    * 总结

* 小程序登陆
    * 登陆示意图
    * 注意事项
    * 后台校检
    * https
    * 请求参数
    * openid
    * session_key

* UnionID
    * UnionID介绍
    * 获取UnionID
    * 返回值说明
    * 解决unionid获取不到的问题

* 用户授权
    * 用户授权发展历史
    * 之前的授权
    * 接口更新历史
    * 授权检测
    * 授权返回的数据
    * 授权解决方案
    * 用户拒绝解决方案

* 导航navigator
    * 导航属性
    * open-type类型
    * wx.navigateTo
    * wx.redirectTo
    * wx.reLaunch
    * wx.switchTab
    * wx.navigateBack

* 缓存Storage
    * 设置缓存
    * 获取缓存
    * 获取Storage
    * 删除指定缓存
    * 删除全部缓存
    * 缓存使用注意事项
    * 同步读取缓存问题
    * 缓存和版本的关系（缓存的坑）

* 网络请求
    * api列表
    * api使用说明
        * 服务器配置域名
        * 配置流程
        * HTTPS证书
        * 
    * 封装request
    * 配置流程
    * https
    * 关于请求
    * 关于服务器返回

* DOM操作
    * wx.createSelectorQuery()
    * selectorQuery
        * in
        * select
        * selectAll
        * selectViewport
        * exec
        * nodesRef.boundingClientRect([callback])
        * nodesRef.scrollOffset([callback])
        * nodesRef.fields(fields, [callback])

* 微信支付

* 设备相关信息
    * 获取设备信息
    * 判断API是否可用
    * 设备网络类型
    * 剪贴板

* 发布版本
    * 版本分类
        * 开发版
        * 体验版
        * 正式版
    * 版本之间的关系
    * 点击审核版发布
        * 全量发布
        * 分阶段发布
        * 发布比例
        * 分阶段发布小程序规则

* 兼容版本处理
    * 兼容问题
    * 兼容方式 - 版本比较
    * 兼容方式 - 接口
    * 兼容方式 - 参数
    * 兼容方式 - 组件

