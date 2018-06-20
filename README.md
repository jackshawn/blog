> 澳门皇家赌场...哦不对, 弄的网站上线啦, 详情请访问: [wang.xiang.ws](http://wang.xiang.ws)

### WHY A BLOG

很早之前就有想过搭个博客, 但是那时我是拒绝的。

原因很简单: 没有必要。个人认为博客的主要作用就两点, 记录与分享。

* 记录

每次在学习新东西时我都会把过程, 心得写下来, 算是个好习惯, 更多是因为无奈。因为我深刻体会到, 即便是当时理解了, 不久以后再次用到这个东西时, 你懂的。所以当初写的越详细, 可能节省的时间就越多。脑子是个好东西, 有却不好使, 不知如此反复多久才能算是掌握。总之记录需要一个载体, 不论是之前用的[OneNote](https://products.office.com/zh-CN/onenote), 还是后来转投的[Bear](http://www.bear-writer.com/), 都很好用, 至于写到博客上我觉得真的没必要。

* 分享

看大佬的博客确实能学到不少东西, 比如说[阮一峰的个人网站](http://www.ruanyifeng.com/) , [张鑫旭](http://www.zhangxinxu.com/ "出了新书第一时间就支持了, 嘻嘻")。作为技术菜鸟, 要学的太多, 分享还不至于。

所以说了那么多, 那为什么还是搭了这个博客

<del>因为爱情<del>

上学那会开始刷微博, 多数碎片化的时间都花在上面了, 确实有不少乐子。前些天把微博卸了, 尽管还有好几年的年费会员。所以接下来我要说, 卸了之后时间利用的更充分生活更有意义了？并不是。

只是我在想, 从开始的天网论坛, 空间, 人人, 朋友圈, 微博, Ins。折腾那么多还不如动手自己撸一个。如果能坚持更下去, **那多年以后回忆往事也算是有所线索吧**

### 动手之前

不论是后台业务功能, 还是前台的展示效果, 原则就是**简单**。所以能想到的正常博客该有的注册, 评论, 检索, 归档, 等等功能全都没有。只有简单的发布与展示。内容主要就是**记录生活, 无关技术**。至于代码, **不求优雅, 但求能用**。
目前想到的栏目主要有:

* Home

前段时间一直不在状态(好吧现在也是), 上班除了对电脑发呆啥也不会。chrome装了个插件[flavr](https://flavrbackgrounds.com/), 于是乎就打开浏览器开个标签, 看图, 神游。反复直到标签栏密密麻麻。看源码发现用的是[unsplash](https://unsplash.com/)的图。所以首页设计就有了, 一个图片背景, 一段文字导航, 还有几个权衡了下最终还是加上去的icon链接, 其他不能再多了。

* Blog

这栏就很简单了, 把Bear里写的东西选择性放到这边。

* Movie

「一部电影 一次震憾, 一本胶片 一串记忆, 一个人物 一段历程」是摘自《第十放映室》。喜欢看电影唉, 没啥专业眼光就是单纯的喜欢。电影这个造梦工厂确实可以满足你对美好的所有向往。

* Destination

「世界那么大, 我想去看看」, 虽说是红极一时的网络语, 但是道理确实是哪个道理。很想多出去溜溜, 也应该多出去溜溜, 唉, 希望以后可以吧

* Hehe

在路上看到阿猫阿狗就有点走不动路了, 希望以后能养个吧。

* Drawing

这个显然就是个flag了, 只能说希望以后不会被删掉吧。




### 环境

* 开发环境: macOS 10.12.6 + Node 8.2.1 + MySQL 5.7.21

* 线上环境: CentOS 6.9 + Node 8.2.1 + MySQL 5.7.22

### 技术栈

* 后台: Node.js + Koa2.js + MySQL

* 前端: Vue.js + Vue Router

### 数据库

![db](http://wang.xiang.ws/album/compressed/MARKDOWNONLY-2018-5-20-2:31:29.png)

### 开始

下拉仓库

```
git clone https://github.com/jackshawn/blog.git
```

执行数据库脚本

```
// 连接MySQL
mysql -u root -p;

// 新建数据库wx
create database wx;

// 选择数据库wx
use wx;

// 执行数据库脚本, 注意路径替换为实际路径
source /blog/server/wx.sql;

```

进入项目安装依赖

```
cd blog

npm install

```


配置数据库连接

```
vim server/utils/config.js

// 配置相应的地址, 端口, 数据库, 用户名与密码
db: {
  database: 'wx',
  username: 'root',
  password: '123',
  host: 'localhost',
  port: 3306
}

```

编译前端代码

```
npm run build
```

启动

```
npm start
```

### 项目结构

#### blog/

典型的使用vue-cli脚手架搭的项目。其中多了一个server, 便是后台相关代码了。

```
blog
├── build/
├── config/
├── node_modules/
├── server/
├── src/
├── static/
├── .babelrc
├── .editorconfig
├── .gitignore
├── .postcssrc.js
├── index.html
├── package.json
├── package-lock.json
└── README.md

```
思路就是`npm run build`编译前端代码到`server/view/`中, 然后用`koa-static`托管静态页面, 前后交互使用`AJAX (axios)`;


#### blog/server/

服务端没有使用Express, 用了koa2.js。看见结构典型的MVC了, 主要参考了[koa2 进阶学习笔记 ](https://chenshenhai.github.io/koa2-note/),[koa入门 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000), [Koa 框架教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2017/08/koa.html)。按部就班, 遇到问题解决问题, 花了时间但没花太多心思。

```
server
├── controllers                                          # 控制层
│   ├── blog.js
│   ├── destination.js
│   ├── photo.js
│   └── user.js
├── models                                               # 模型层
│   ├── blog.js
│   ├── destination.js
│   ├── photo.js
│   └── user.js
├── utils
│   ├── check.js                                         # 检测用户登录状态
│   ├── compress.js                                      # 压缩图片
│   ├── config.js                                        # 配置文件
│   ├── controller.js                                    # 扫描controllers并注册URL
│   ├── db.js                                            # 数据库连接
│   └── upload.js                                        # 处理上传图片
├── view                                                 # 视图层
│   └── album                                            # 上传的图片目录
│       └── compressed                                   # 启用压缩后图片目录
│           └── icon.jpg
├── app.js                                               # 程序入口
└── wx.sql                                               # 数据库脚本
```

#### blog/src/

前端源码

```
src
├── assets
│   ├── API.js                                           # 前后台交互接口文档
│   ├── github-markdown.css                              # github markdown 样式表
│   └── mockData.js                                      # 模拟后端数据
├── components
│   ├── Admin.vue                                        # 后台管理
│   ├── AdminAdd.vue                                     # 后台内容添加发布
│   ├── AdminRemove.vue                                  # 后台内容删除
│   ├── Blog.vue                                         # 文章
│   ├── Destination.vue                                  # 地图
│   ├── Footer.vue                                       # 页脚微博 Ins Github EMail
│   ├── Header.vue                                       # 首页背景图
│   ├── Home.vue                                         # 首页
│   ├── Login.vue                                        # 登录
│   ├── More.vue                                         # 更多按钮
│   ├── Photo.vue                                        # 图片组件, 包括Life Movie Hehe Drawing
│   └── Subtitle.vue                                     # 标题
├── router
│   └── index.js                                         # 路由
├── App.vue
└── main.js

```

几个主要页面的组件关系

![](http://wang.xiang.ws/album/compressed/MARKDOWNONLY-2018-5-9-2:29:13.jpg)

开发: 编辑`src/main.js`取消注释`import './assets/mockData'`, 执行`npm run dev`

打包: 注释掉模拟数据, 执行`npm run build`

没了

