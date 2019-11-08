import Vue from 'vue'
// import App from './App.vue'
// import Wheel from './WheelMenuComponent/WheelMenu.vue'
// import CircularMenu from './WheelMenuComponent/CircularMenu.vue'
import RadialMenu from './WheelMenuComponent/RadialMenuComponent.vue'
import WheelMenu from './Wheel-Menu.vue'
// import Wheel from 'vue-wheel-menu-component/wheelmenu'
// import RadialMenu from 'vue-wheel-menu-component/wheelmenu'

import BootstrapVue from 'bootstrap-vue'
import VueRecource from 'vue-resource'

Vue.use(BootstrapVue);
Vue.use(VueRecource);
// Vue.component('wheel-menu', Wheel);
// Vue.component('circular-menu', CircularMenu);
Vue.component('radial-menu', RadialMenu);
// Vue.use(Wheel);
// Vue.use(RadialMenu);

new Vue({
  el: '#app',
  render: h => h(WheelMenu),
})
