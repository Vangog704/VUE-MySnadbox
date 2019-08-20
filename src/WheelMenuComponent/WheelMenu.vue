<template>

    <div class="wheel" :style="'left: '+(position.x-outrad)+'px; top: '+(position.y-outrad)+'px;'"><!-- x,y are center of circle -->

        <div class="rotable">
            <!-- title -->
            <div class="info" :style="'line-height: '+size+'px'"> 
                <h6 :style="' font-size: '+font+';'">
                    {{title}}
                </h6>
            </div>
            <!-- all circle -->
            <div class="wheel-svg-wraper" :style="' width: '+size+'px; height: '+size+'px; '">
                <!-- buttons -->
                <wheelMenuBtnArc class="weelmenubtn" 
                    v-for="(p,id) in btnParams" 
                    :key='id'
                    :btnbody='p' 
                    @rotate3d='rotate'
                    @setTitle='setTitle'
                />
            </div>
        </div>
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
        // TODO add h & w 
        let lvec = new Victor(0, this.outrad*0.94);
        let svec = new Victor(0, this.inrad*0.94);
        let outradvec = new Victor(this.outrad, this.outrad);
        const angle = (Math.PI*2)/num
        lvec.rotate(angle/2);
        svec.rotate(angle/2);
        for(let i = 0; i < num; i++){
            points = [];
            lvec.add(outradvec);
            svec.add(outradvec);
            points[0] = lvec.clone();
            points[3] = svec.clone();
            lvec.subtract(outradvec); 
            svec.subtract(outradvec);
            lvec.rotate(angle); 
            svec.rotate(angle);
            lvec.add(outradvec);
            svec.add(outradvec);
            points[1] = lvec.clone();
            points[2] = svec.clone();
            lvec.subtract(outradvec);
            svec.subtract(outradvec);

            res[i] = new WheelBtn(i, this.btns[i].title, num, points, this.btns[i].icon, this.outrad, this.inrad);
        }

        return {
            btnParams: res,
            title:'',
            font:(this.inrad/85)+'em',
            size: (this.outrad*2),
        }
    },
    computed:{

    },
    props:{
        rotated:{type: Boolean, default: true},
        outrad:Number,
        inrad:Number, 
        name:String,
        btns:Array,
        position:Object
    },
    methods:{

        setTitle(text){
            this.title = text;
        },

        rotate(rvec,mvec,pers){
            if(!rvec || !mvec || !pers){ 
                this.$el.getElementsByClassName('rotable')[0].style.transform = "";  
                return;
            }
            if(!this.rotated) return;
            this.$el.getElementsByClassName('rotable')[0].style.transform = " rotateX("+rvec.y+"deg) rotateY("+-rvec.x+"deg) translate("+-mvec.x+"px,"+-mvec.y+"px)";
            // this.$el.getElementsByClassName('rotable')[0].style['transform-origin'] = " "+this.outrad+"px, "+this.outrad+"px ";
            // this.$el.getElementsByClassName('info')[0].style.transform = " translate("+-mvec.x+"px,"+-mvec.y+"px)";
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
        transform-origin: center;

        &:hover{ 
            stroke: black;
            border-color: black;
        }
    }

    .rotable{
        transition-duration: .4s;
        transition-property: transform;
        &:hover{
            transition-duration: .4s;
            transition-property: transform;
        }
    }

    .wheel-svg-wraper{
        position: relative;
        visibility: hidden;

        transition-duration: 0s;
        transition-property: filter;
        // filter: drop-shadow(0 0 .10rem $light-shadow);

        &:hover{
            transition-duration: 0s;
            transition-property: filter;
            filter: drop-shadow(0 0 .30rem $light-shadow);
        }
    }

    .info {
        
        font: 100%;
        visibility: visible;

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
