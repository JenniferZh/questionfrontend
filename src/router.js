import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

Vue.use(Router)

function requireAuth( to, from , next) {
  let token = localStorage.getItem('token');
  console.log(token);
  console.log('+++++++++++++++++++++++++++++++++++++++++');
  if(token) {
    next();
  } else {
    next({
      path: '/login'
    });
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      component: Login
    }

  ]
})
