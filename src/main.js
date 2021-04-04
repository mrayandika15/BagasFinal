import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFuse from 'vue-fuse'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.use(VueFuse)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
