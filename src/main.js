import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
