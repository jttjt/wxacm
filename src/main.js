// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import "./font/iconfont.css"
import "./css/reset.css"

import router from './router'
import axios from 'axios';
import qs from 'qs';
Vue.config.productionTip = false
import '../static/utf8-jsp/ueditor.config.js'
import '../static/utf8-jsp/ueditor.all.min.js'
import '../static/utf8-jsp/lang/zh-cn/zh-cn.js'
import '../static/utf8-jsp/ueditor.parse.min.js'
/* eslint-disable no-new */
Vue.use(MintUI);
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://cf.swustacm.cn:8080/';
//axios.defaults.baseURL = 'https://www.splayx.com:10443/jfinal-weixin';
//axios.interceptors.request.use((config) => {
//if(config.method  === 'post'){
//  config.data = qs.stringify(config.data);
//}
//return config;
//},(error) =>{
//return Promise.reject(error);
//});
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
