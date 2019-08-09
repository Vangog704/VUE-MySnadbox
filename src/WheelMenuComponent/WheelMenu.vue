<template>

    <div id="wheel">
        <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="2" dy="2" result="offsetblur"/> <!-- how much to offset -->
        <feComponentTransfer>
            <feFuncA type="linear" slope="0.6"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge> 
            <feMergeNode/> <!-- this contains the offset blurred image -->
            <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
        </filter>
        <svg xmlns="http://www.w3.org/2000/svg"
            :width='lrad*2.2' 
            :height="lrad*2.2" 
            :viewBox="-lrad*0.1+' '+-lrad*0.1+' '+ lrad*2.2 +' '+ lrad*2.2" 
            version="1.1"
            filter="url(#dropshadow)"
        >
            <wheelMenuBtnArc v-for="(p,id) in btnParams" 
                :btnbody='p' 
                :key='id'/>
        </svg>
    </div>

</template>

<!--=================================================================================================-->

<script>
import Victor from './../../node_modules/victor';
import WheelMenuBtn from './WheelMenuBtnArcSVGComponent.vue'
import WheelBtn from './WheelBtnClass.js';

export default {
    name: 'wheel',
    components:{
        'wheelMenuBtnArc':WheelMenuBtn,
    },
    data(){ 
        let res = [];
        const num = this.btns.length;
        let points = [];
        let lvec = new Victor(0, this.lrad);
        let svec = new Victor(0, this.srad);
        let lradvec = new Victor(this.lrad,this.lrad);
        const angle = (Math.PI*2)/num
        
        lvec.rotate(angle/2);
        svec.rotate(angle/2);

        for(let i = 0; i < num; i++){
            points = [];
            lvec.add(lradvec);
            svec.add(lradvec);
            points[0] = lvec.clone();
            points[1] = svec.clone();
            lvec.subtract(lradvec); 
            svec.subtract(lradvec);
            lvec.rotate(angle); 
            svec.rotate(angle);
            lvec.add(lradvec);
            svec.add(lradvec);
            points[2] = lvec.clone();
            points[3] = svec.clone();
            lvec.subtract(lradvec);
            svec.subtract(lradvec);

            res[i] = new WheelBtn(i, num, points, this.btns[i].icon, this.lrad, this.srad);
        }

        return {
            btnParams: res,
            title:'myCanvas'
        }
    },
    props:{
        srad:Number, 
        lrad:Number,
        btns:Array
    },
    methods:{

        updateCanvas: function(){    
            
        } 
    },
    mounted: function (){
        this.updateCanvas();
    }
}


</script>

<!--=================================================================================================-->

<style>

    #wheel{
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0);
    }

    #wheel:hover{
        stroke: black;
        border-color: black;
    }

    .bee{
        background-color: #ce9200;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

</style>
