<template>
  <div>
    <router-link  :key="index" v-for="(news,index) in newsData"
                  :to="{name: 'detail', params: {id: news.docid}}">
      <h5>{{news.title}}</h5>
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        newsData: []
      }
    },
    created() {
      console.log("home created....");
      let that = this;
      axios({
        type: 'get',
        url: 'static/newsData.json'
      }).then(res=>{
        console.log(res);
        that.newsData = res.data.T1348647853363;
      }, err=>{
        console.log(err);
      });
    },

  }
</script>

<style>

  h5{
    color:#999;
  }

</style>
