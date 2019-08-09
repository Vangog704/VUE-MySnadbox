<template>

    <g class="btn-wheel"
        @mouseover="btnOnhover($event)" 
        @mouseout="btnOnOut($event)"
    >    
        <filter id="blurMe">
            <feGaussianBlur stdDeviation="0.5"/>
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
            cx=0 cy=0 r=15 
            :style="'transform: translate('+(btnbody.center.x)+'px,'+(btnbody.center.y)+'px);'" 
            class="square"
            filter="url(#blurMe)" 
        />
        <path
            :style="'transform: translate('+(btnbody.center.x-12)+'px,'+(btnbody.center.y-12)+'px);'"
            d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"
            filter="url(#blurMe)"
        />
    </g>

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
            var vec = new Victor(this.btnbody.ps[2].x,this.btnbody.ps[2].y);
                vec.add(new Victor(this.btnbody.ps[3].x,this.btnbody.ps[3].y));
                vec.divide(new Victor(2,2));
                vec.subtract(new Victor(this.btnbody.outrad,this.btnbody.outrad));
                vec.divide(new Victor(10,10));
                vec.normalize().multiply(new Victor(2.2,2.2));
                // console.log("HOVER: "+JSON.stringify(vec));
                // console.log(event.target.parentElement);
                event.target.parentElement.style.transform = "translate("+vec.x+"px,"+vec.y+"px)";
        },
        btnOnOut(event){
            event.target.parentElement.style.transform = "translate(0px,0px)";
        },
    }
}

</script>

<!--=================================================================================================-->

<style>

    .btn-wheel{
        fill: #ffbe5d;
        stroke: #ffc46b;
        position: absolute;
        transition-duration: 1s, 2s, 0s;
        transition-property: transform, stroke, fill;
        /* transform: none; */
    }
    .btn-wheel:hover{
        fill: #ff9c07;
        stroke: #d18800;
        transition-duration: 0.3s;
        /* stroke-width: 20px; */
        position: absolute;
        /* transform: translate(5px,5px); */
    }

    .square{
        fill: black;
        stroke: black;
        background-color: black;
        height: 10px;
        width: 10px;
    }

    .wheel-icon { 
        /* position: absolute; */
        width: 100px;
        height: 100px;
        font: italic 13px sans-serif;
        align-content: center;
        color:black;
    }

</style>
