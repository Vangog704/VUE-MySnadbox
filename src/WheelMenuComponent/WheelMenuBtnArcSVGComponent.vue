<template>

    <a :href="'http://localhost:8080?a='+btnbody.id">
    <g class="btn-wheel"
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >   
        <filter id="blurMe">
            <feGaussianBlur stdDeviation="0.4"/>
        </filter>

        <path :d="
            ' M '+btnbody.ps[0].x+' '+btnbody.ps[0].y+
            ' A '+btnbody.outrad+' '+btnbody.outrad+' 0 0 1 '+btnbody.ps[2].x+' '+btnbody.ps[2].y+ 
            ' L '+btnbody.ps[3].x+' '+btnbody.ps[3].y+
            ' A '+btnbody.inrad+' '+btnbody.inrad+' 1 0 0 '+btnbody.ps[1].x+' '+btnbody.ps[1].y+
            ' z '"
            filter="url(#blurMe)"
        />

        <circle
                cx=0 cy=0 r=23  
                :style="'transform: translate('+(btnbody.center.x)+'px,'+(btnbody.center.y)+'px);'"
                class="square"
                filter="url(#blurMe)" 
        />
        
        <path
            class="wheel-icon"
            :style="'transform: translate('+(btnbody.center.x-16)+'px,'+(btnbody.center.y-16)+'px);'"
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
            let vec = this.btnbody.ps[0].clone();
                vec.add(this.btnbody.ps[2]);
                vec.divide(new Victor(2,2));
                vec.subtract(new Victor(this.btnbody.outrad,this.btnbody.outrad));
                vec.divide(new Victor(10,10));
                vec.normalize().multiply(new Victor(4,4));
                // console.log("HOVER: "+JSON.stringify(vec));
                // console.log(event.target.parentElement);
                event.target.parentElement.style.transform = "translate("+vec.x+"px,"+vec.y+"px)";

            let dvec = this.btnbody.center.clone()
                        .subtract(new Victor(165,165))
                        .divide(new Victor(165,165))
                        .multiply(new Victor(30,30));
            event.path[3].style.transform = " rotateX("+dvec.y+"deg) rotateY("+-dvec.x+"deg)";
            event.path[3].style['transition-property'] = 'transform';
            event.path[3].style['transition-duration'] = '0.5s';
        },

        btnOnOut(event){
            event.target.parentElement.style.transform = "translate(0px,0px)";
            event.path[3].style.transform = "";
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
        /* transform: none; */
    }
    .btn-wheel:hover{
        fill: #d341c7;
        stroke: #cc58b9;
        transition-duration: 0.3s;
        /* stroke-width: 20px; */
        position: absolute;
        /* transform: translate(5px,5px); */
    }

    .square{
        fill: #cc15b4;
        stroke: rgba(0, 0, 0, 0.705);
        background-color: rgb(0, 0, 0);
    }
    .btn-wheel:hover .square{
        stroke:rgb(5, 240, 228);
        /* stroke:rgb(255, 176, 255); */
        stroke-width: 3; 
    }

    .wheel-icon { 
        transition-duration: 1s;
        transition-property: fill;
        font: italic 13px sans-serif;
        fill:rgb(0, 0, 0);
        stroke: rgba(0, 0, 0, 0.3);
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
