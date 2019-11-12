<template>

        <div class="radial-menu-main" :style="mainStyle()">
            <transition name='fade'>
                <div class="wrapper" v-show='visible'>

                    <text-component 
                        :titleText="text"
                        :size="menushape[0].inrad*1.7"
                    />

                    <svg class="svg-main" 
                        :viewBox="boxToSvgPath(box)"
                        :style="transformStyle()"
                        :weight="box.w"
                        :height="box.h"
                    >   
                        <button-group
                            @setText="setText"
                            @rotate="rotate"
                            :buttons="menushape"
                            :box="box"
                        />
                    </svg>
                </div>
            </transition>
        </div>

</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";
import CircularMenuBuilder from "./circular-menu-builder";
import ButtonsGroup from "./RadialMenuComponentButtonGroup.vue";
import TextComponent from "./TextComponent.vue";

export default {
    name: "radial-menu",

    components: {
        "button-group":ButtonsGroup,
        "text-component":TextComponent,
    },
    props: {
        conf: Object,
        pos: Object,
        visible:Boolean,
    },
    data() {
        let menushape = this.shape();
        let box = this.mainViewBox(menushape);

        return {
            box,
            menushape,
            shiftVector: new Victor(0,0),
            text: null,
        };
    },
    methods: {

        setText(text){
            this.text = text;
        },

        rotate(vector){
            this.shiftVector = vector || new Victor(0,0);
        },

        shape(){
            console.log("BUILD RADIAL-MENU");
            return new CircularMenuBuilder(Object.assign({},this.conf)).build();
        },

        mainStyle(){
            if(this.pos == null) this.pos = {x: 0, y: 0};
            return `
                transform: translate(${this.pos.x+this.box.x}px, ${this.pos.y+this.box.y}px);
                width: ${this.box.w}px; 
                height: ${this.box.h}px;
            `
        },

        transformStyle(){
            return this.shiftVector 
                    ? ` transform: ${this.rotateStyle(this.shiftVector)} ${this.translateStyle(this.shiftVector)}; `
                    : ``;
        },

        rotateStyle(vec){
            return vec
                    ? (vec.x != 0 ? ` rotateX(${vec.y}deg) ` : ``)+
                      (vec.y != 0 ? ` rotateY(${-vec.x}deg) ` : ``) 
                    : ``;
        },

        translateStyle(vec){
            return vec
                    ? ` translate(${-vec.x}px, ${-vec.y}px); `
                    : ``;
        },

        //TODO move to utility funcs
        boxToSvgPath(box){
            return `${box.x} ${box.y} ${box.w} ${box.h}`
        },

        mainViewBox(shape){
            let box = {};
            box.w = box.h = 2*this._maxRadius(shape);
            box.x = -.5*box.w;
            box.y = -.5*box.h;
            return box;
        },

        _maxRadius(btns){
            let cmax,max = 0;
            for (let btn of btns){
                if(btn.children != null)
                    max = max > (cmax = this._maxRadius(btn.children)) ? max : cmax;
                else 
                    max = (max < btn.radius ? btn.radius : max);
            }
            return max;
        },
    },
    computed: {
        
    },
    mounted: function() {

    },
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

    body{
        margin: 0;
    } 

    .radial-menu-main{
        visibility: hidden;
        position: absolute;
    }

    .wrapper{
        perspective: 20cm;
        transform-origin: center center;
        width: inherit;
        height: inherit;
    }

    .svg-main{
        overflow: visible;
        transition-duration: .4s;
        transition-property: transform;
        position:absolute;
        filter: blur(.4px);
    }
    
    .fade-enter-active, .fade-leave-active {
        transition: all .1s ease-in;
    }

    .fade-enter, .fade-leave-to {
        opacity: .1;
        transform: scale(.1);
    }

</style>
