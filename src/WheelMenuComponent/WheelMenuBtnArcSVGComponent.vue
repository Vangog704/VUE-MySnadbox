<template>

    <!-- :href="'/a?id='+btnbody.id" -->
    <a 
        @contextmenu.prevent="showMenu($event)"
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >
       <svg class="wheel-svg"
           xmlns="http://www.w3.org/2000/svg" version="1.1"
           :viewBox="'0 0 '+ btnbody.outrad*2 +' '+ btnbody.outrad*2" 
           :width='btnbody.outrad*2' 
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
                    :style="'transform: translate('+(btnbody.center.x)+'px,'+(btnbody.center.y)+'px);'"
                    filter="url(#blurHalf)"
                />

                <path class="wheel-icon"
                    :style="' transform: translate('+(btnbody.center.x-iconsize/2)+'px,'+(btnbody.center.y-iconsize/2)+'px) scale('+iconWidth+','+iconHeight+') '"
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
import Victor from './../../node_modules/victor';
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

        return{
            iconsize:(this.btnbody.outrad - this.btnbody.inrad)/2.2,
            iconcirclesize:(this.btnbody.outrad - this.btnbody.inrad)/2.8,
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

        btnOnhover(event){

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
                                          
                // console.log(this.btnbody.center);
                // console.log(rvec);
                vec.multiply(new Victor(2,2));
                
                this.$emit('rotate3d',rvec,vec,coef*2);
                this.$emit('setTitle',1+this.btnbody.id + '. '+ this.btnbody.name);
        },

        btnOnOut(event){
            // console.log('text');
            event.target.parentElement.style.transform = "";
            this.$emit('rotate3d');
            this.$emit('setTitle','');
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
        visibility: visible;
        
        transition-duration: .7s, .2s, .5s;
        transition-property: transform, stroke, fill;
        
        width: 100px;
        
        transform-origin: center;
        transform: scale(1.01);
        position: absolute;

        &:hover {
            fill: rgba(lighten( $main-color, 10%), .2);
            stroke: $light-shadow;
            stroke-width: 2px;
            
            transform: scale(1.06);
            position: absolute;
            
            .icon-circle{
                fill: $icon-color;
                stroke: $light-shadow;
                stroke-width: 3px; 
                z-index: 5;
            }
            
            .wheel-icon{
                fill: $light-shadow;
                stroke: rgba($light-shadow, 50%);
                
                transition-duration: 0s, 0s;
                transition-property: stroke, fill;
            }
        }
        
        .icon-circle{
            fill: $extra-color;
            stroke: $icon-color;
            stroke-width: 1px;
            background-color: black;
        }
    }

    .wheel-icon { 
        fill:$icon-color;
        stroke: $icon-color;
        stroke-width: 1px;

        width: 10px;
        height: 10px;

        transition-duration: .2s, .7s;
        transition-property: stroke, fill;
        
        align-content: center;
    }

</style>
