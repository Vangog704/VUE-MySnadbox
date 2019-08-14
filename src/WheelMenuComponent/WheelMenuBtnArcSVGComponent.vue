<template>
    
    <a :href="'http://localhost:8080?a='+btnbody.id">
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

        <circle
                cx=0 cy=0 r=23  
                :style="'transform: translate('+(btnbody.center.x)+'px,'+(btnbody.center.y)+'px);'"
                class="square"
                filter="url(#blurHalf)" 
        />
        <!--TODO icon scale-->
        <path
            class="wheel-icon"
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
        },

        btnOnOut(event){
            event.target.parentElement.style.transform = "";
            this.$emit('rotate3d');
        },
    }
}

</script>

<!--=================================================================================================-->

<style>

    .btn-wheel{
        fill: #a321af;
        stroke: #a41eb1;
        position: absolute;
        transition-duration: 1s, 2s, 0.1s;
        transition-property: transform, stroke, fill;
        width: 100px;
        transform-origin: center center;
        visibility: visible;
        /* transform: none; */
    }
    .btn-wheel:hover{
        transform: scale(1.04);
        fill: #d341c7;
        /* stroke: #cc58b9; */
        stroke: #85066f;
        /* stroke: rgb(5, 240, 228); */
        /* stroke-width: 3px; */
        transition-duration: 0.5s;
        stroke-width: 2px;
        position: absolute;
        /* transform: translate(5px,5px); */
    }

    .square{
        fill: #cc15b4;
        stroke: rgba(0, 0, 0, 0.705);
        stroke-width: 1px;
        background-color: rgb(0, 0, 0);
    }
    .btn-wheel:hover .square{
        stroke:rgb(5, 240, 228);
        /* stroke:rgb(255, 176, 255); */
        stroke-width: 3px; 
    }

    .wheel-icon { 
        transition-duration: 1s;
        transition-property: fill;
        font: italic 13px sans-serif;
        fill:rgb(0, 0, 0);
        stroke: rgba(0, 0, 0, 0.3);
        stroke-width: 1px;
        align-content: center;
    }

    .btn-wheel:hover .wheel-icon{
        transition-duration: 0s, 0s;
        transition-property: stroke, fill;

        fill:rgb(79, 255, 246);
        stroke:rgba(117, 239, 255, 0.8);
        /* fill:rgb(255, 216, 253);
        stroke:rgba(255, 140, 230, 0.8); */
        /* stroke: rgb(0, 165, 165); */
    }

</style>
