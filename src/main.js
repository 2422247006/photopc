import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import Print from './assets/plugs/print.js'
import axios from "axios";
import Print from 'vue-print-nb'
Vue.use(ElementUI);
Vue.use(Print);

const apiUrl = "http://106.12.5.191/jfxx-server-0.1"
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;
Vue.prototype.$apiUrl = apiUrl;

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
