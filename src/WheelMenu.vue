<template>

    <div id="wheel">
        <svg xmlns="http://www.w3.org/2000/svg"
            :width='2.2*lrad' 
            :height="2.2*lrad" 
            :viewBox="-lrad*0.1+' '+-lrad*0.1+' '+ lrad*2.2 +' '+ lrad*2.2" 
            version="1.1">
            <filter id="blurMe">
                <feGaussianBlur stdDeviation="0.5"/>
            </filter>
            <g class="btn-wheel" v-for="(p,id) in btnParams.btns" :key="id" 
                @mouseover="btnOnhover($event, id)" 
                @mouseout="btnOnOut($event, id)">
                <path :d="
                    ' M '+p.M.x+' '+p.M.y+
                    ' A '+lrad+' '+lrad+' 0 0 1 '+p.A1.x+' '+p.A1.y+ 
                    ' L '+p.L.x+' '+p.L.y+
                    ' A '+srad+' '+srad+' 1 0 0 '+p.A2.x+' '+p.A2.y+
                    ' z '"
                filter="url(#blurMe)"
                />
                <circle 
                    cx=0 cy=0 r=15 
                    :style="'transform: translate('+(p.center.x)+'px,'+(p.center.y)+'px);'" 
                    filter="url(#blurMe)"
                    class="square" 
                />
                <path
                    :style="'transform: translate('+(p.center.x-12)+'px,'+(p.center.y-12)+'px);'"
                    d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"
                    filter="url(#blurMe)"
                />
            </g>
        </svg>
    </div>

</template>

<!--============================================================-->

<script>
import Victor from '../node_modules/victor';

class WheelBtn{
    constructor(){
        this.M = new Victor(0,0);
        this.A1 = new Victor(0,0);
        this.A2 = new Victor(0,0);
        this.L = new Victor(0,0);
        this.center = new Victor(0,0);
    }

    set(propname, vec) {
        this[propname].x = vec.x;
        this[propname].y = vec.y;
    }
}

export default {
    name: 'wheel',
    data: function(){
        // console.log('Data init:');
        
        var res = { btns:[] };
        
        var lvec = new Victor(0, this.lrad);
        var svec = new Victor(0, this.srad);
        let lradvec = new Victor(this.lrad,this.lrad);

        lvec.rotate((Math.PI)/this.num);
        svec.rotate((Math.PI)/this.num);

        for(var i = 0; i < this.num; i++){
            res.btns[i] = new WheelBtn();
            lvec.add(lradvec);
            svec.add(lradvec);
            res.btns[i].set('M',lvec);
            res.btns[i].set('A2',svec);
            lvec.subtract(lradvec); 
            svec.subtract(lradvec);
            lvec.rotate((Math.PI*2)/this.num); 
            svec.rotate((Math.PI*2)/this.num);
            lvec.add(lradvec);
            svec.add(lradvec);
            res.btns[i].set('A1',lvec);
            res.btns[i].set('L',svec);
            lvec.subtract(lradvec);
            svec.subtract(lradvec);

            res.btns[i].center = res.btns[i].M.clone().mix(res.btns[i].A2,0.5)
            res.btns[i].center.subtract(lradvec);
            res.btns[i].center.rotate((Math.PI)/this.num);
            res.btns[i].center.add(lradvec);
        }
        
        // console.log(JSON.stringify(res));

        return {
            btnParams: res,
            title:'myCanvas'
        }
    },
    props:{
        num:Number,
        srad:Number, 
        lrad:Number
    },
    methods:{
        btnOnhover(event,id){
            var vec = new Victor(this.btnParams.btns[id].L.x,this.btnParams.btns[id].L.y);
                vec.add(new Victor(this.btnParams.btns[id].A2.x,this.btnParams.btns[id].A2.y));
                vec.divide(new Victor(2,2));
                vec.subtract(new Victor(this.lrad,this.lrad));
                vec.divide(new Victor(10,10));
                vec.normalize().multiply(new Victor(2.2,2.2));
                // console.log("HOVER: "+JSON.stringify(vec));
                // console.log(event.target.parentElement);
                event.target.parentElement.style.transform = "translate("+vec.x+"px,"+vec.y+"px)";
        },
        btnOnOut(event,id){
            event.target.parentElement.style.transform = "translate(0px,0px)";
        },
        updateCanvas: function(){    
            
        } 
    },
    mounted: function (){
        this.updateCanvas();
    }
}


</script>

<style>

    #wheel{
        position: relative;
        width: 300px;
        background-color: rgb(63, 63, 63);
        margin: 10px;
        margin-left: 10px;
    }
    #wheel:hover{

    }

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

    .wheel-icon { 
        /* position: absolute; */
        width: 100px;
        height: 100px;
        font: italic 13px sans-serif;
        align-content: center;
        color:black;
    }

    .square{
        fill: black;
        stroke: black;
        background-color: black;
        height: 10px;
        width: 10px;
    }

    .bee{
        background-color: #ce9200;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
</style>
