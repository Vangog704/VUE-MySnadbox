<template>

    <div class="wheel" :style="'left: '+(x-lrad)+'px; top: '+(y-lrad)+'px;'">
        <svg xmlns="http://www.w3.org/2000/svg"
            :width='lrad*2' 
            :height="lrad*2" 
            :viewBox="-lrad*0.05+' '+-lrad*0.05+' '+ lrad*2.1 +' '+ lrad*2.1" 
            version="1.1"
            class="wheel-svg"
        >
            <wheelMenuBtnArc class="weelmenubtn" v-for="(p,id) in btnParams" 
                :btnbody='p' 
                :key='id'
                @rotate3d='rotate'
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
        rotated:Boolean,
        srad:Number, 
        lrad:Number,
        btns:Array,
        x:Number,
        y:Number
    },
    methods:{

        rotate(rvec,mvec,pers){
            if(!rvec || !mvec || !pers){ 
                this.$el.childNodes[0].style.transform = "";  
                return;
            }
            if(!this.rotated) return;
            this.$el.childNodes[0].style.transform = " rotateX("+rvec.y+"deg) rotateY("+-rvec.x+"deg) translate("+-mvec.x+"px,"+-mvec.y+"px)";
            this.$el.style['perspective'] = pers+'cm';
        },

        updateCanvas: function(){    

        } 
    },
    mounted: function (){
        this.updateCanvas();
    }
};

</script>

<!--=================================================================================================-->

<style>

    .wheel{
        position:absolute;
        border-radius: 50%;
        visibility: hidden;
        background-color: rgba(54, 54, 54, 0);
        /* background-color: #dfa81e; */
    }

    .wheel:hover{
        stroke: black;
        border-color: black;
    }

    .wheel-svg{
        visibility: hidden;
        transition-duration: 1s, 0.4s;
        transition-property: filter, transform;
        filter: drop-shadow(3px 3px 6px #3f003f);
        /* filter: drop-shadow(0 0 0.40rem rgb(99, 0, 58)); */
    }
    .wheel-svg:hover {
        transition-duration: 0s, 0.4s;
        transition-property: filter, transform;
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

    /* .bee{
        background-color: #ce9200;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    } */

</style>
