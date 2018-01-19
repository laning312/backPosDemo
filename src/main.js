// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
// import Swiper from './components/Swiper.vue'
import Home from './components/Home.vue';
import News from './components/News';
import App from './App';
import Detail from './components/Detail.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
