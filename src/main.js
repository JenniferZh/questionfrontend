import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/css/reset.scss';
import router from './router'
Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    components: {App},
    render: h => h(App)
})
