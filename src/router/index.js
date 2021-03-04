import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/init'
import chatLayout from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    },
    {
      path: '/channels',
      name: 'channels',
      components: {
        default: chatLayout
      },
      props: {
        default: true,
        messageInput: route => ({ name: route.params.name }),
      },
      beforeEnter: (to, from, next) => {
        if(to.params.name) {
          next()
        }
        else {
          next({ 'name': 'init' })
        }
      }
    },
  ],
  mode: "history"
})
