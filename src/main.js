// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 修改了dev分支
import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)

import LEUI from '../packages/index.js'
import '../packages/lib/index.css'
Vue.use(LEUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
