import Vue from 'vue'
import App from './App.vue'
import Wheel from './WheelMenuComponent/WheelMenu.vue'
import WheelMenu from './Wheel-Menu.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.component('wheel-menu',Wheel);

new Vue({
  el: '#app',
  render: h => h(WheelMenu),
})
