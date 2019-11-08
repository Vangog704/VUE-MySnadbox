<template>

        <div class="main" :style="mainStyle()">
            <transition name='fade'>
                <div class="wrapper" v-if='visible' >
                    <transition name='textframe'>
                        <div class="text-wraper" v-if='!!text'>
                            <div class="text">
                                <div>
                                    <p>{{text}}</p>
                                </div>
                            </div>
                        </div>
                    </transition>
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

export default {
    name: "radial-menu",

    components: {
        "button-group":ButtonsGroup,
    },
    props: {
        conf: Object,
        pos: Object,
        visible:Boolean,
    },
    data() {
        let shape = this.shape();
        let svgbox = this.mainViewBox(shape);

        return {
            box: svgbox,
            menushape: shape,
            transformParam: null,
            text: null,
        };
    },
    mounted: function() {

    },
    methods: {
        setText(text){
            this.text = text;
            console.log('settext',text);
        },
        rotate(vector){
            if(vector != null){
                this.transformParam = {
                    rotate:vector,
                    move:vector,
                }
            }else{
                this.transformParam = null;
            }
        },

        shape(){
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
            return this.transformParam != null 
                ?   ` transform: `+this.rotateStyle(this.transformParam)+` `+this.translateStyle(this.transformParam)
                :   ``;
        },

        rotateStyle(t){
            return t.rotate != null
                ?   (t.rotate.x != 0 ? ` rotateX(${t.rotate.y}deg) ` : ``)+
                    (t.rotate.y != 0 ? ` rotateY(${-t.rotate.x}deg) ` : ``) 
                :   ``;
        },

        translateStyle(t){
            return t.move != null
                ?   ` translate(${-t.move.x}px, ${-t.move.y}px);`
                :   ``;
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
            for (let i = 0; i < btns.length; i++){
                if(btns[i].children != null)
                    max = max > (cmax = this._maxRadius(btns[i].children)) ? max : cmax;
                else 
                    max = (max < btns[i].radius ? btns[i].radius : max);
            }
            return max;
        },
    },
    computed: {
        
    },
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

    .test{
        width: 0px;
        height: 0px;
    }


    .main{
        visibility: hidden;
        position: absolute;
    }

    .wrapper{
        perspective: 20cm;
        transform-origin: center center;
        width: inherit;
        height: inherit;
        // transform: rotateX(30deg) rotateY(30deg);
        // top: 0px;
        // left: 0px;
    }

    .text-wraper{
        position: absolute;
        visibility: visible;
        width: 100%;
        height: 100%;
    }

    .text{
        text-shadow: 0 0 1em $light-shadow;
        color: white;
        font-weight: bold;
        font-size: 1.2em;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        
        div{
        display: flex;
        justify-content: center;
        align-items: center;
            text-align: center;
            margin: 0;
            width: 25%;
            height: 25%;
            border-radius: 50%;
            border: 5px solid $light-shadow;
            box-shadow: 0 0 4em $light-shadow;
            background-color: rgba($light-shadow, .4);
            // transform: scale(.5);
            opacity: 1;
            &:hover{
                // background-color: rgba(white, .5);
            }
            p{
                margin: 0;
            }
        }
    }

    .svg-main{
        overflow: visible;
        transition-duration: .4s;
        transition-property: transform;
        position:absolute;
        // filter: url('#disturbtion');
        filter: blur(.4px);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(.1);
        // transform: scale(.1) rotateZ(90deg);
    }

</style>
