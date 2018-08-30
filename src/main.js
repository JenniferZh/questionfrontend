import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import './assets/css/reset.scss';

Vue.use(ElementUI);

var EventBus = new Vue();

new Vue({
  EventBus,
  router,
  render: h => h(App)
}).$mount('#app');
