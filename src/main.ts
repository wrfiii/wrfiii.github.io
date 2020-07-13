import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './icons/index.js'
import elDialog from '@/components/dialog.vue'
// Vue.use(elDialog);
Vue.component('el-dialog', elDialog); //初始化


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
