<template>

    <div class="wheel" :style="'left: '+(x-lrad)+'px; top: '+(y-lrad)+'px;'"><!-- x,y are center of circle -->
        <!-- title -->
        <div class="info" :style="'line-height: '+lrad*2+'px'"> 
            <h6 :style="' font-size: '+font+';'">
                {{title}}
            </h6>
        </div>

        <!-- all circle -->
        <svg xmlns="http://www.w3.org/2000/svg"
            :width='lrad*2' 
            :height="lrad*2" 
            :viewBox="-lrad*0.05+' '+-lrad*0.05+' '+ lrad*2.1 +' '+ lrad*2.1" 
            version="1.1"
            class="wheel-svg"
        >
            <!-- buttons -->
            <wheelMenuBtnArc class="weelmenubtn" v-for="(p,id) in btnParams" 
                :btnbody='p' 
                :key='id'
                @rotate3d='rotate'
                @setTitle='setTitle'
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
    name: 'wheel-menu',
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
            res[i] = new WheelBtn(i, (i+1)+'. '+this.btns[i].title, num, points, this.btns[i].icon, this.lrad, this.srad);
        }

        return {
            btnParams: res,
            title:'',
            font:(this.srad/85)+'em',
        }
    },
    props:{
        rotated:Boolean,
        name:String,
        srad:Number, 
        lrad:Number,
        btns:Array,
        x:Number,
        y:Number
    },
    methods:{

        setTitle(text){
            this.title = text;
        },

        rotate(rvec,mvec,pers){
            if(!rvec || !mvec || !pers){ 
                this.$el.getElementsByTagName('svg')[0].style.transform = "";  
                return;
            }
            if(!this.rotated) return;
            this.$el.getElementsByTagName('svg')[0].style.transform = " rotateX("+rvec.y+"deg) rotateY("+-rvec.x+"deg) translate("+-mvec.x+"px,"+-mvec.y+"px)";
            this.$el.getElementsByClassName('info')[0].style.transform = " translate("+-mvec.x+"px,"+-mvec.y+"px)";
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

<style lang="scss" subtract>

@import './../colorScheme.scss';

    .wheel {
        visibility: hidden;
        border-radius: 90%;
 
        position:absolute;


        &:hover{
            stroke: black;
            border-color: black;
        }
    }

    .wheel-svg{
        filter: drop-shadow(3px 3px 6px $dark-shadow);
        visibility: hidden;
        
        // transition-timing-function: ease-in;
        transition-duration: 1s, .4s;
        transition-property: filter, transform;
    
        &:hover {
            filter: drop-shadow(0 0 .30rem $light-shadow);
            
            transition-timing-function: ease-out;
            transition-duration: .2s, .3s;
            transition-property: filter, transform;
        }

    }

    .info {
        font: 100%;
        visibility: visible;
        
        transition-duration: .5s;
        transition-property: transform;

        height: 100%;
        width: 46%;
        
        overflow: hidden;
        text-overflow: ellipsis;

        left:28%;
        top:0%;
        position:absolute;

        h6{
            color: rgb(255, 255, 255);
            filter: drop-shadow(0 0 0.20rem $light-shadow);
            
            width: 100%;
            margin: 0;
            
            font: serif;
            // font-size: .8em;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
        }
    }

    /* .bee{
        background-color: #ce9200;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    } */

</style>
