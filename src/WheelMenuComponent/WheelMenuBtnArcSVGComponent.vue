<template>

    <a :href="'/a?id='+btnbody.id"
        @contextmenu.prevent="showMenu($event)"
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >
       <svg class="wheel-svg"
           xmlns="http://www.w3.org/2000/svg" version="1.1"
           :viewBox="`0 0 ${btnbody.outrad*2} ${btnbody.outrad*2}`" 
           :width="btnbody.outrad*2" 
           :height="btnbody.outrad*2" 
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

        // this.$http.get('/dist/iconfinder_wench_3553103.svg').then(
        // this.$http.get('/dist/iconfinder_98_111048.svg').then(
        //     (response) => {
        //         let vb;
        //         var doc = new DOMParser().parseFromString(response.data, "image/svg+xml");
        //         for(let i = 0; i < doc.children[0].attributes.length;i++){
        //             if(doc.children[0].attributes[i].name === 'viewBox'){
        //                 vb = doc.children[0].attributes[i].value.split(' ');
        //                 // console.log(doc.children[0].attributes);
        //                 break;
        //             }
        //         }

        //         this.iconsx = 32/vb[2];
        //         this.iconsy = 32/vb[3];
        //         console.log(this.iconsx);
        //         console.log(this.iconsy);
                
        //         this.btnbody.icon = doc.children[0].children[0].attributes.d.value;
        // });
        let btn_h = (1-(this.btnbody.inrad/this.btnbody.outrad))*5;
        let btn_w = (this.btnbody.angle/Math.PI*12);

        return{
            iconsize:(btn_h < btn_w ? btn_h : btn_w)*(this.btnbody.outrad)/9,
            iconcirclesize:(btn_h < btn_w ? btn_h : btn_w)*(this.btnbody.outrad/11),
        }
    },
    props: {
        btnbody:WheelBtn,
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
                w = h = this.btnbody.outrad;
                coef = h / 50;

            let vec = this.btnbody.center.clone()
                .subtract(new Victor(w,h))
                .normalize(h)
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
        fill:$icon-color;
        stroke: $icon-color;
        stroke-width: 1px;

        width: 10px;
        height: 10px;

        // transition-duration: .2s, .7s;
        // transition-property: stroke, fill;
        
        align-content: center;
    }

</style>
