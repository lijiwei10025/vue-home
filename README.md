# app-ljw

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 上传到github
查看: git status
1. git add .
2. git commit -m "提示信息"
3. git push

### 制作首页App组件
1. 完成Header区域，使用VantUI的NavBar组件
2. 制作底部的Tabbar区域，使用的是VantUI的Tabbar组件
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

### 点击tabbar中的路由链接，展示对应的路由组件

### 制作首页轮播图

### 制作九宫格区域的样式

### 改造新闻列表路由链接

### 新闻资讯页面制作
1. 绘制界面
2. 使用vue-axios获取数据
3. 渲染真实数据

### 实现新闻列表点击跳转到新闻详情
1. 把列表中的每一项改造为router-link，同时在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面NewsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

### 实现新闻详情的页面布局和数据渲染

### 单独封装一个comment.vue评论子组件

### 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getComments()方法重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况。我们在点击加载更多的时候，每当获取到的新数据应该让老数据调用数组的concat方法拼接新数组

### 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则toast提示用户评论内容不能为空
4. 通过vue-axios发送一个请求，把评论内容提交给服务器
5. 当发表评论OK后，重新刷新列表，以查看最新的评论
6. 如果调用getComments方法重新刷新评论的话，可能只能得到最后一页的评论，前几页的评论获取不到
+ 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论，追加到data中comments的开头，这样就能完美实现刷新评论列表的需求

### 改造图片分析按钮为路由的链接并对应的组件页面

### 绘制图片列表组件页面结构并美化
1. 制作顶部的滑动条
2. 制作底部的图片列表

### 实现了图片列表的懒加载改造和样式美化

### 实现了点击图片跳转到图片详情页面

### 实现图片详情中缩略图的功能
1. 使用插件vue-preview缩略图插件

### 尝试在手机上去进行项目的预览和测试
1. 要保证自己的手机可以正常晕行
2. 要保证手机和开发项目的电脑处于同一个WIFI环境中
3. 打开自己的项目package.json文件，在dev脚本中添加一个--host指令，把当前电脑的WIFI IP地址设置为 --host的指令值