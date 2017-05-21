// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Axios from 'axios'
import IO from 'socket.io-client'
Vue.config.productionTip = false

/* eslint-disable no-new */
/**
 * 插件调用
 */
Vue.use(iView);
import 'iview/dist/styles/iview.css';
import '../static/css/animate.css'
Vue.prototype.$http=Axios;
// const socket=IO('localhost:3000');
Vue.prototype.$socket=IO('localhost:3000');
let vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
