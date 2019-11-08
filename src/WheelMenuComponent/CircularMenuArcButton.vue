<template>

    <div class="main">
            <!-- :href="`/a?id=${shape.id}`"  -->
        <a class="svg-pack" 
            @mouseover="mouseoverhandle($event)"
            @mouseout="mouseouthandle($event)"
        >

            <svg class="circular-menu-arc"
                :style="`left:${-shape.box.w/2-16}; top:${-shape.box.h-16};`"
                :viewBox="`${shape.box.x} ${shape.box.y-16} ${shape.box.w} ${shape.box.h+32}`"
                :width="`${shape.box.w+32}`"
                :height="`${shape.box.h+32}`"
                xmlns="http://www.w3.org/2000/svg" version="1.1"
            >
                <g class="btn-arc-group"> 
                    <path :d="arc_path"/>
                </g>
            </svg>

            <svg class="circular-menu-icon" 
                :style="`left:${-shape.box.w/2}; top:${-shape.box.h-16};`"
                :viewBox="`${shape.box.x} ${shape.box.y-16} ${shape.box.w} ${shape.box.h+32}`"
                :width="`${shape.box.w}`"
                :height="`${shape.box.h+32}`"
                xmlns="http://www.w3.org/2000/svg" version="1.1"
            >
                <circle class="icon-circle"
                    :cx="`0`"
                    :cy="`${shape.iconpos.y}`"
                    :r="`${shape.iconsize/2}`"
                />
            </svg>
            <div class="icon-container"
                :style="`
                    top: ${-shape.box.h-16}px;
                    left: ${-shape.box.w/2}px;
                    height: ${shape.box.h+32}px;
                    width: ${shape.box.w}px;`"
            >
                <div 
                    :style="`
                        position: absolute;
                        left: 50%;
                        bottom: ${-shape.iconpos.y}px;
                        transform: translate(${-shape.iconsize/2}px,${shape.iconsize/2-16}px) rotateZ(${-shape.angle}deg);
                        width:${shape.iconsize}px;
                        height:${shape.iconsize}px;`"
                >
                    <svg 
                        :viewBox="`${-10} ${-10} ${shape.icon.size.w+20} ${shape.icon.size.h+20}`"
                        xmlns="http://www.w3.org/2000/svg" version="1.1"
                    >
                        <path class="icon"
                            :d="shape.icon.d"
                        />
                    </svg>
                </div>
            </div>
        </a>
        <circular-menu-arc-button class="child-btns"
            v-for="(btn, id) in shape.children"
            :style="`transform: rotateZ(${-shape.angle+btn.angle}deg);`"
            :key="id"
            :shape="btn"
            @hover="childvmouseoverhandle"
            @out="childmouseouthandle"
        />
    </div>

</template>

<!--=================================================================================================-->

<script>
import Victor from 'victor';

export default {
    name: 'circular-menu-arc-button',
    components:{
        
    },
    props:{
        shape:Object,
    },
    data(){
        return {

        }
    },
    computed:{
        arc_path(){
            return this.shape.path_r;
        },
    },
    methods:{

        mouseoverhandle(event){
            let vec = this.shape.iconpos.clone().rotateDeg(-this.shape.angle).normalize();
            let movvec = vec.multiply(new Victor(10,10));
            let rotvec = vec.clone();
            this.$emit('hover', this.shape.id, rotvec, movvec);
        },
        mouseouthandle(event){
            this.$emit('out');
        },

        childvmouseoverhandle(btnid, rotvec, movvec) {
            movvec.divide(new Victor(1.2,1.2));
            rotvec.divide(new Victor(1.2,1.2));
            this.$emit('hover', this.shape.id, rotvec, movvec);
        },
        childmouseouthandle() {
            this.$emit('out'); 
        },

    },
    mounted: function (){
        
    }
};

</script>

<!--=================================================================================================-->

<style lang="scss" subtract>

@import './../colorScheme.scss';

    .visible{
        visibility: visible;
    }

    .main{
        position: absolute;
        z-index: 5;
        &:hover{
            z-index: 10;
        }
    }

    a{
        cursor: crosshair;
        // cursor: wait;
        position: absolute;
    }
    
    .icon-container{
        position: absolute;
        transform-origin: center;
        pointer-events: none;
    }

    .icon{
        visibility: visible;
        position: relative;
        stroke: $main-color;
        stroke-width: 0px;
        fill: $icon-color;
        transform-origin: center;
    }

    .circular-menu-icon{
        pointer-events: none;
        position: absolute;
        visibility: hidden;
    }

    .svg-pack{
        filter: blur(.5px); 

        transition-duration: .4s, .4s, .3s;
        transition-property: transform, stroke, fill;
        &:hover{
            z-index: 10;
            // transform: scale(1.02);  
            .icon{
                fill: $selected-shodow;
                stroke: $light-shadow;
            }
        }
    }

    .circular-menu-arc{
        transform-origin: center;
        position: absolute;
        visibility: hidden;
        background-color: aqua;
        // transform: scale(1);
        fill: rgba($main-color, 1);
        stroke: $main-color;
        stroke-width: 1px;
        &:hover{
            stroke-width: 2px;
            fill: rgba($main-color, .3);
            stroke: $light-shadow;
            filter: drop-shadow(0 0 2rem $selected-shodow);
        }
    }

    .btn-arc-group{
        visibility: visible;
    }

    .icon-circle{
        visibility: visible;
        pointer-events: none;
        fill: rgba($main-color, .9);
        stroke: $light-shadow;
        stroke-width: 1px;
    }

    .child-btns{
        transition-duration: .6s;
        transition-property: opacity;
    }

</style>
