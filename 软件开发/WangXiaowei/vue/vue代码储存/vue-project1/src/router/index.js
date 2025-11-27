import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  //注意：一旦采用了history模式，地址栏就没有# ，需要在后台配置访问规则
  mode:'history',
  routes: [
    /*
     问题:网页打开，url默认是/路径，未匹配到组件时，会出现空白
     说明重定向匹配path后，强制跳转path路径
     语法:{path:匹配路径,redirect:重定向到的路径}
     */
    { path: '/', redirect:'/home'},
    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search },
    /*
        作用:当路径找不到匹配时，给个提示页面
        位置:配在路由最后
        语法:path:"*"(任意路径)-前面不匹配就命中最后这个
    */
    { path: '*',  component: NotFound }
  ]
})

export default router