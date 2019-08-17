import Vue from 'vue'
// import App from './App.vue'
import Wheel from './WheelMenuComponent/WheelMenu.vue'
// import Wheel from 'vue-wheel-menu-component/wheelmenu'
import WheelMenu from './Wheel-Menu.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.component('wheel-menu', Wheel);
// Vue.use(Wheel);

new Vue({
  el: '#app',
  render: h => h(WheelMenu),
})
