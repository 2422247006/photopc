import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Print from './assets/plugs/print.js'
Vue.use(ElementUI);
Vue.use(Print);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
