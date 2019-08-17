import Wheel from "./WheelMenu.vue";

export default {
    install(Vue, params={}) {
        
        console.log('Wheel Menu Instalation');
        Vue.component(Wheel.name, Wheel);
    
    }
};