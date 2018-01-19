<template>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>//
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </template>

  <script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      components: {
        swiper,
        swiperSlide
      }
    }
    // swiper options example:
    export default {
      name: 'carrousel',
      data() {
        return {
          swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br data-filtered="filtered">　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            autoplay: 3000,
            direction : 'vertical',
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',//上一张
            nextButton:'.swiper-button-next',//下一张
            scrollbar:'.swiper-scrollbar',//滚动条
            mousewheelControl : true
          }
        }
      },

    }
  </script>



<style>
</style>
