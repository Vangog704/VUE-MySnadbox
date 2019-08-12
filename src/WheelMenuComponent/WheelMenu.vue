<template>

    <div id="wheel">
        <svg xmlns="http://www.w3.org/2000/svg"
            @mousemove="onhover($event)"
            :width='lrad*2.6' 
            :height="lrad*2.6" 
            :viewBox="-lrad*0.1+' '+-lrad*0.1+' '+ lrad*2.2 +' '+ lrad*2.2" 
            version="1.1"
            id="wheel-svg"
        >
            <wheelMenuBtnArc class="weelmenubtn" v-for="(p,id) in btnParams" 
                :btnbody='p' 
                :key='id'
            />
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

        onhover(event){
            let x = event.offsetX;
            let y = event.offsetY;

            let w, h,dx,dy; 
            // console.log('x: '+x+' y: '+y);
            // console.log(event);
            // if(event.target.attributes.width !== undefined|null){
            //     w = event.target.attributes.width;
            //     h = event.target.attributes.height;
            //     // console.log(event.target.attributes.width);
            // }
            // else if(event.fromElement.nearestViewportElement !== null){
            //     w = event.fromElement.nearestViewportElement.attributes.width;
            //     h = event.fromElement.nearestViewportElement.attributes.height;
            //     // console.log(event.fromElement.nearestViewportElement.attributes.width);
            // }

            // if(event.path[3].tagName == 'svg'){
            //     w = event.path[3].clientWidth;
            //     h = event.path[3].clientHeight;
            //     // console.log(event.fromElement.nearestViewportElement.attributes.width);
            //     // console.log(w,h,x,y);
            //     if(w && h && y && x){
            //         w=w/2; h=h/2;
            //         let dx = (x - w)/w*25;
            //         let dy = (y - h)/h*25;
            //         // console.log('dx: '+dx+' - dy: '+dy); 
            //         // event.fromElement.nearestViewportElement.style['transform-style'] = "preserve-3d";
            //         event.path[3].style.transform = "rotateX("+dy+"deg) rotateY("+-dx+"deg)";
            //     }
            // }
        },

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
        transform: translate(100px, 100px) ;
        /* border-radius: 50%; */
        background-color: rgba(54, 54, 54, 255);
        backface-visibility: hidden;
        /* background-color: #dfa81e; */
        perspective: 15cm;
    }

    #wheel:hover{
        stroke: black;
        border-color: black;
    }

    #wheel-svg{
        transition-duration: 1s 1s;
        transition-property: filter transform;
        backface-visibility: hidden;
        /* filter: drop-shadow(3px 3px 4px #3f003f); */
        /* filter: drop-shadow(0 0 0.40rem rgb(99, 0, 58)); */
    }
    #wheel-svg:hover {
        transition-duration: 0.5s;
        transition-property: filter;
        /* filter: drop-shadow(3px 3px 4px #ff41ff); */
        /* filter: drop-shadow(0 0 0.30rem rgb(255, 62, 174)); */
        filter: drop-shadow(0 0 0.30rem rgb(83, 249, 255));
        /* transform: rotateX(10deg) rotateY(10deg); */
    }

    .info{
        font: 20px sans-serif; 
        inline-size: 200px;
        position:inherit;
        text-align: center;
    }

    .bee{
        background-color: #ce9200;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

</style>
