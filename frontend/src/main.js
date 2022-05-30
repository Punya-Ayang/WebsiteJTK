import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@/plugins/apexcharts'
import lightbox from 'vlightbox'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  lightbox,
  render: h => h(App)
}).$mount('#app')
