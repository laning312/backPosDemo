<template>
  <div>
    <a href="#" @click.prevent="back">back</a>
    <h4>detail, {{$route.params.id}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    methods: {
      back(){
        window.history.back();
      }
    }
  }
</script>

<style>
</style>
