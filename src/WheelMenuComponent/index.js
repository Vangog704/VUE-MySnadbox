import RadialMenuComponent from "./RadialMenuComponent.vue";

export default {
    install(Vue, params={}) {
        
        console.log('Component included: ',RadialMenuComponent.name);
        Vue.component(RadialMenuComponent.name, RadialMenuComponent);
    }
};