<template>
    
    <a :href="'http://localhost:8080?a='+btnbody.id" @contextmenu.prevent="showMenu($event)">
    <g class="btn-wheel" 
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >   
        <filter id="blurHalf">
            <feGaussianBlur stdDeviation="0.5"/>
        </filter>

        <path :d="
            ' M '+btnbody.ps[0].x+' '+btnbody.ps[0].y+
            ' A '+btnbody.outrad+' '+btnbody.outrad+' 0 0 1 '+btnbody.ps[2].x+' '+btnbody.ps[2].y+ 
            ' L '+btnbody.ps[3].x+' '+btnbody.ps[3].y+
            ' A '+btnbody.inrad+' '+btnbody.inrad+' 1 0 0 '+btnbody.ps[1].x+' '+btnbody.ps[1].y+
            ' z '"
            filter="url(#blurHalf)"
        />

        <circle class="square"
            cx=0 cy=0 r=23  
            :style="'transform: translate('+(btnbody.center.x)+'px,'+(btnbody.center.y)+'px);'"
            filter="url(#blurHalf)" 
        />
        <!--TODO icon scale-->
        <path class="wheel-icon"
            :style="'transform: translate('+(btnbody.center.x-16)+'px,'+(btnbody.center.y-16)+'px) scale(1,1);'"
            :d="btnbody.icon"    
        />
    </g></a>

</template>

<!--=================================================================================================-->

<script>
import Victor from './../../node_modules/victor';
import WheelBtn from './WheelBtnClass.js';

export default {
    name:'wheelmenubtn',
    data(){
        return{
            
        }
    },
    props: {
        btnbody:WheelBtn,
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
                
                vec.multiply(new Victor(2,2));
                
                this.$emit('rotate3d',rvec,vec,coef*2);
                this.$emit('setTitle',this.btnbody.name);
        },

        btnOnOut(event){
            event.target.parentElement.style.transform = "";
            this.$emit('rotate3d');
            this.$emit('setTitle','');
        },
    }
}

</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import './../colorScheme.scss';

    .btn-wheel{
        fill: $main-color;
        stroke: $main-color;
        visibility: visible;
        
        transition-duration: 1s, 1.2s, 0.4s;
        transition-property: transform, stroke, fill;
        
        width: 100px;
        
        transform-origin: center center;
        transform: scale(1.01);
        position: absolute;

        &:hover{
            fill: lighten($main-color, 10%);
            stroke: darken($main-color, 15%);
            stroke-width: 2px;
            
            transition-duration: .3s; 
            
            transform: scale(1.04);
            /* transform: translate(5px,5px); */
            position: absolute;
        
            .square{
                fill: $icon-color;
                stroke: $light-shadow;
                stroke-width: 3px; 
                // stroke:gold;
            }
            
            .wheel-icon{
                fill: $light-shadow;
                stroke: rgba($light-shadow, 50%);
                
                transition-duration: 0s, 0s;
                transition-property: stroke, fill;
            }
        }
        
        .square{
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

        transition-duration: .2s, .7s;
        transition-property: stroke, fill;
        
        align-content: center;
    }

</style>
