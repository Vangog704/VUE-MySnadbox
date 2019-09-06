<template>

    <a :href="'/a?id='+btnbody.id"
        @contextmenu.prevent="showMenu($event)"
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >
        <svg class="wheel-svg"
                xmlns="http://www.w3.org/2000/svg" version="1.1"
                :viewBox="`0 0 ${center*2} ${center*2}`" 
                :width="center*2" 
                :height="center*2" 
        >
            <g class="btn-wheel">   
                <filter id="blurHalf">
                    <feGaussianBlur stdDeviation="0.5"/>
                </filter>

                <path :d="btnbody.path_d"
                    filter="url(#blurHalf)"
                />

                <circle class="icon-circle"
                    cx=0 cy=0 
                    :r="iconcirclesize"  
                    :style="`transform: translate(${btnbody.center.x}px, ${btnbody.center.y}px);`"
                    filter="url(#blurHalf)"
                />

                <path class="wheel-icon"
                    :style="`transform: translate(${btnbody.center.x-iconsize/2}px, ${btnbody.center.y-iconsize/2}px) scale(${iconWidth}, ${iconHeight})`"
                    :d="btnbody.icon.d"
                />
                <!-- debuging stuff -->
                <!-- <circle
                    :cx="btnbody.vecp1.x" 
                    :cy="btnbody.vecp1.y"
                    r="10"  
                    filter="url(#blurHalf)"
                /> -->
            </g>
        </svg>
    </a>

</template>

<!--=================================================================================================-->

<script>
import Victor from 'victor';
import WheelBtn from './WheelBtnClass.js';
import { returnStatement } from 'babel-types';

export default {
    name:'wheelmenubtn',
    data(){

        let btn_h = (1-(this.btnbody.inrad/this.btnbody.outrad))*5;
        let btn_w = (this.btnbody.angle/Math.PI*12);

        return{
            iconsize:(btn_h < btn_w ? btn_h : btn_w)*(this.btnbody.outrad)/9,
            iconcirclesize:(btn_h < btn_w ? btn_h : btn_w)*(this.btnbody.outrad/12),
        }
    },
    props: {
        btnbody:WheelBtn,
        center:Number
    },
    computed:{
        iconWidth(){
            if(this.btnbody.icon.size.w){
                return this.iconsize/this.btnbody.icon.size.w;
            }
            return 1;
        },
        iconHeight(){
            if(this.btnbody.icon.size.w){
                return this.iconsize/this.btnbody.icon.size.h;
            }
            return 1;
        },
    },
    methods:{

        showMenu(e){
            e.stopPropagation();
        },

        btnOnhover(event,id){

            let w,h, coef;
                w = h = this.center;
                coef = h / 50;

            let vec = this.btnbody.center.clone()
                .subtract(new Victor(w,h))
                .normalize()
                .multiply(new Victor(coef*1.5,coef*1.5))

                // event.target.parentElement.style.transform = "translate("+vec.x+"px,"+vec.y+"px)";
            

            let rvec = this.btnbody.center.clone()
                                          .subtract(new Victor(w,h))
                                          .normalize()
                                          .multiply(new Victor(10,10));
                                          
                vec.multiply(new Victor(2,2));
                
                this.$emit('rotate3d',rvec,vec,coef*2);
                this.$emit('setTitle',1+this.btnbody.id + '. '+ this.btnbody.name);
            
            // let list = this.$el.parentElement.childNodes
            // let a = (list.length < (this.btnbody.id) ? 0 : this.btnbody.id);
            // let b = (0 <= (this.btnbody.id) ? this.btnbody.id : list.length);
            // for(let i = 0; i < list.length/2;i++){
            //     list[(list.length <= (++a) ? a=0 : a)].getElementsByClassName('btn-wheel')[0].style = ` opacity: ${.4-(i/list.length)}; `;
            //     list[(0 <= (--b) ? b : b=list.length-1)].getElementsByClassName('btn-wheel')[0].style = ` opacity: ${.4-(i/list.length)}; `;
            // }                
        },

        btnOnOut(event){            
            event.target.parentElement.style.transform = "";
            this.$emit('rotate3d');
            this.$emit('setTitle','');
            
            // let list = this.$el.parentElement.childNodes
            // let a = (list.length < (this.btnbody.id) ? 0 : this.btnbody.id);
            // let b = (0 <= (this.btnbody.id) ? this.btnbody.id : list.length);
            // for(let i = 0; i < list.length/2;i++){
            //     list[(list.length <= (++a) ? a=0 : a)].getElementsByClassName('btn-wheel')[0].style = `  `;
            //     list[(0 <= (--b) ? b : b=list.length-1)].getElementsByClassName('btn-wheel')[0].style = `  `;
            // }  
        },
    }
}

</script>

<!--=================================================================================================-->
//TODO do all css fitures switchable
<style lang="scss" subtract>
@import './../colorScheme.scss';

    .wheel-svg{
        position: absolute;
        z-index: 1;
        &:hover {
            z-index: 2;
            filter: drop-shadow(0 0 .30rem $selected-shodow);
        }
    }

    .btn-wheel{
        fill: rgba($main-color, 1);
        stroke: $main-color;
        stroke-width: 2px;

        visibility: visible;

        transition-duration: .4s, .4s, .3s;
        transition-property: transform, stroke, fill;
        transform-origin: center;
        
        width: 100px;
        
        transform: scale(.9);
        position: absolute;
        
        &:hover {
            stroke-width: 2px;

            fill: rgba($main-color, .2);
            stroke: $light-shadow;

            transform: scale(.95);
            position: absolute;
            
            .icon-circle{
                pointer-events: none;
                fill: $icon-color;
                stroke: $light-shadow;
                stroke-width: 1px; 
                z-index: 5;
            }
            
            .wheel-icon{
                fill: $light-shadow;
                stroke: rgba($light-shadow, 50%);
                filter: none;
                // transition-duration: 0s, 0s;
                // transition-property: stroke, fill;
            }
        }
        
        .icon-circle{
            fill: $extra-color;
            stroke: $icon-color;
            stroke-width: 1px;
        }
    }

    .wheel-icon { 
        pointer-events: none;
        fill:$icon-color;
        stroke: $icon-color;
        stroke-width: 1px;

        width: 10px;
        height: 10px;

        // transition-duration: .2s, .7s;
        // transition-property: stroke, fill;
        
        align-content: center;
    }

    // .bee{
    //     pointer-events: none;
    //     width: 400px;
    //     height: 400px;
    //     position: absolute;
    //     visibility: visible;
    //     background-color: #ce9200;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    // }

</style>
