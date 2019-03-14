import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export const bus= new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
