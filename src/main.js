// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 引入vux组件库的插件
// import  { ConfirmPlugin } from 'vux'
// Vue.use(ConfirmPlugin)
// Vue.prototype.$ajax = axios

// 引入mint
// import { MessageBox } from 'mint-ui';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 设置axios的baseURL 全局通用
axios.defaults.baseURL = 'api';
// 引入公共组件
import '@/assets/vue/global'
// 来关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
