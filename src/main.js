import Vue from 'vue'
import axios from 'axios'

import router from './router/index.js';
import store from './store/index.js'

import App from './App.vue';

import Util from './util/index'

import 'mint-ui/lib/style.css';

//设置请求头
Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
    config.headers.common['X-Dola-Time'] = Util.getSeconds();
    config.headers.common['X-Dola-ClientID'] = Util.getGuid();
    return config;
}, function (error) {
    return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
