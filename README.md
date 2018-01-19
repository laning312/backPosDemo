# backPosDemo

> 这个示例演示的是：在使用vue-router切换路由时，如何在返回前一页时定位到上次的滚动位置。

## Build Setup

``` bash
# 安装依赖
npm install

# 运行
npm run dev
```

## 具体方法
``` bash
# 1. 在路由配置中修改
    const router = new VueRouter({
      mode: 'history',
      routes: [
        {path: '/home', component: Home,
          meta: {
            title: 'home',
            keepAlive: true
          }},
        {path: '/news', component: News},
        {path: '/detail/:id', component: Detail, name: 'detail'}
      ],
      scrollBehavior (to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
    });
  
  scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。

# 2. 在App.vue中对<router-view>修改
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    
# 3. 在Detail.vue中添加返回链接以对应的点击方法
   <a href="#" @click.prevent="back">back</a>
   ...
   methods: {
      back(){
        window.history.back();
      }
    }
    
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
