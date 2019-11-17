import Vue from 'vue'
// import RadialMenu from './WheelMenuComponent/RadialMenuComponent.vue'
import WheelMenu from './Wheel-Menu.vue'
// import RadialMenu from 'vue-wheel-menu-component/wheelmenu'
// import RadialMenu from "./WheelMenuComponent/index.js"
import RadialMenu from "./../radial-menu/radial-menu-component.common.js"

// import BootstrapVue from 'bootstrap-vue'
// import VueRecource from 'vue-resource'

// Vue.use(BootstrapVue);
// Vue.use(VueRecource);
Vue.component('radial-menu', RadialMenu)
// Vue.use(Wheel);
// Vue.use(RadialMenu);

new Vue({
  el: '#app',
  render: h => h(WheelMenu)
})
