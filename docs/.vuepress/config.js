module.exports = {
    // base:基础目录
    // base: '/VueDoc/',
    // 指定 vuepress build 的输出目录
    dest: 'dist',
    // 网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
    title: '前端小峰哥的学习笔记',
    // 网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
    description: '黄雪峰,前端黄雪峰,前端小峰哥,小峰哥学习笔记!包括HTML,CSS,JavaScript,jQuery,jQUery源码学习,前端工程化,前端模块化,Web安全渗透,Vue,Vue源码学习,React,微信小程序,Angular,Nodejs,webpack,React Native,iOS,Android,混合开发,CentOS等',
    // 被注入页面 HTML <head> 额外的标签。
    // 如果设置为 true，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）
    serviceWorker: false,
    // 为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同
    themeConfig: {
        // 你可以通过 themeConfig.nav 将链接添加到导航栏中
        nav: [
            {
                text: '支持我们',
                items:[
                    { text:'github点赞', link:'https://github.com/xuefeng666/webnotes'},
                    { text:'关注知乎大牛', link:'https://www.zhihu.com/people/qian-duan-xiao-feng-ge/activities'},
                    { text:'阿里云服务器', link:'https://promotion.aliyun.com/ntms/act/jianzhanquan.html?userCode=thfy2lwh'},
                ],
            },
            {
                text: '友情链接',
                items:[
                    { text:'小峰哥笔记', link:'http://www.xuefeng666.com'},
                    { text:'知乎大牛', link:'https://www.zhihu.com/people/qian-duan-xiao-feng-ge/activities'},
                ],
            }
        ],
        // 这里是是侧边栏配置
        sidebar:[
            // 用对象分组，一个对象代表一组
            {
                title: '前端开发环境',
                collapsable:true,
                children:[
                    ['WebSDE/','核心内容'],
                    ['WebSDE/WebSDE/','前端开发环境'],
                ], 
            },
            {
                title: '浏览器',
                collapsable:true,
                children:[
                    ['Browser/','核心内容'],
                    ['Browser/Browser/','浏览器'],
                ], 
            },
            {
                title: 'CSS',
                collapsable:true,
                children:[
                    ['Css/','核心内容'],
                    ['Css/Flex/','Flex'],
                ], 
            },
            {
                title: 'JavaScript',
                collapsable:true,
                children:[
                    ['JavaScript/','核心内容'],
                    ['JavaScript/JavaScript/','JavaScript'],
                ], 
            },
            {
                title: 'jQuery',
                collapsable:true,
                children:[
                    ['jQuery/','核心内容'],
                    // ['jQuery/jQuery/','jQuery'],
                    ['jQuery/jQuerySrc/','jQuery源码学习'],
                ], 
            },
            {
                title: '前端工程化',
                collapsable:true,
                children:[
                    ['WebGCH/','核心内容'],
                    ['WebGCH/WebGCH/','前端工程化'],
                ], 
            },
            {
                title: '前端模块化',
                collapsable:true,
                children:[
                    ['Module/','核心内容'],
                    ['Module/Module/','前端模块化'],
                ], 
            },
            {
                title: 'Web安全渗透',
                collapsable:true,
                children:[
                    ['WebSRC/','核心内容'],
                    ['WebSRC/WebSRC/','Web安全渗透'],
                ], 
            },
            {
                title: 'Vue',
                collapsable:true,
                children:[
                    ['Vue/','核心内容'],
                    ['Vue/Vue/','Vue'],
                    ['Vue/VueSrc/','Vue源码学习'],     
                ], 
            },
            {
                title: 'React',
                collapsable:true,
                children:[
                    ['React/','核心内容'],
                    ['React/React/','React'], 
                ], 
            },
            {
                title: '微信小程序',
                collapsable:true,
                children:[
                    ['miniprogram/','核心内容'],
                    ['miniprogram/miniprogram/','微信小程序'],
                ], 
            },
            {
                title: 'Git',
                collapsable:true,
                children:[
                    ['Git/','核心内容'],
                    ['Git/Git/','Git'],
                ], 
            },
            {
                title: 'CentOS',
                collapsable:true,
                children:[
                    ['CentOS/','核心内容'],
                    ['CentOS/CentOS/','CentOS'],
                ], 
            }
        ],
        sidebarDepth:2
    }
}
