<template>
  <div class="search">
    <!-- $route.params 用于访问URL中的动态片段 -->
    <p>搜索关键字: {{ $route.params.words }}</p>
    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyFriend',
  created(){
    //在create中，获取路由参数
    //可以写成 this.$route.query

    /*
      在跳转路由的时候，进行传值
      1、查询参数传值
        to="/path?参数名=值"
      2、对应页面组件接受传递过来的值
        $route.query.参数名
    */
   // this.$route.query.参数名 获取查询参数
   // this.$route.params.参数名 获取动态路由参数

   // /search/:words表示，必须要传参数，如果不传参数，也希望匹配，可以加个可选符“?”
    console.log(this.$route.params.words)
    
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>