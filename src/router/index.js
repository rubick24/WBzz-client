import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import SearchUser from '@/components/SearchUser'
import UidCircle from '@/components/UidCircle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:name?',
      name: 'SearchUser',
      component: SearchUser
    },
    {
      path: '/uid/:uid?',
      name: 'UidCircle',
      component: UidCircle
    }
  ]
})
