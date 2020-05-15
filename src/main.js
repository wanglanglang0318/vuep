import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@babel/polyfill"
// vuep

import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
Vue.use(Vuep /*, { codemirror options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
