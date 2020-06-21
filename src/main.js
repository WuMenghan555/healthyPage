import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import vant from 'vant'
import 'vant/lib/index.css'

Vue.use(vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
