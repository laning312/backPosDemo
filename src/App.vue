<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo{
    width: 30px;
    height: 30px;
  }
</style>
