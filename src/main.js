import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

//共用文件掛載
import "@/assets/css/app.scss";

//axios掛載
import axios from 'axios'
Vue.prototype.$axios = axios

//共用組件掛載
import mainfooter from "@/components/mainFooter.vue"
import mainheader from "@/components/mainHeader.vue"

Vue.component("mainfooter",mainfooter);
Vue.component("mainheader",mainheader);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
