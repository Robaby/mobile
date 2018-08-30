// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'es6-promise/auto'
import vuex from 'vuex'
import 'lib-flexible/flexible'
import './assets/commonCss/index.css'
Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.use(vuex)

axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
