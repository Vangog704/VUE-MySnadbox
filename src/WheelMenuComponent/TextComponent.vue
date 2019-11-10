<template>
    
    <div class="text-wraper">
        <defs>
            <filter id="glitch">
            <feTurbulence type="fractalNoise" baseFrequency="0 .17" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic" in2="warp" />
            </filter>
        </defs>
        <transition name='textframe' >
            <div class="text" v-if='isVisible'>
                <div :style="textWrapperStyle()">
                    <p>{{titleText || ''}}</p>
                </div>
            </div>
        </transition>
    </div>

</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";
import CircularMenuBuilder from "./circular-menu-builder";
import ButtonsGroup from "./RadialMenuComponentButtonGroup.vue";

export default {
    name: "radial-menu-text",

    props: {
        titleText:String,
        size:Number,
    },
    data() {

        return {       
            titleVisible:false,
        };
    },
    methods: {

        lag(){
            //TODO fix this
            this.titleVisible = false;

            setTimeout(()=>{
                this.titleVisible = true;
                setTimeout(()=>{ this.lag(); }, Math.floor(Math.random() * 10)*1000);
            }, 150);
        },

        textWrapperStyle(){
            return `
                width: ${this.size}px;
                height: ${this.size}px;
            `;
        },
    },
    computed: {
        isVisible(){
            return this.titleVisible && this.titleText;
        },
    },
    mounted: function() {
        this.lag();
    },
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

    .text-wraper{
        position: absolute;
        visibility: visible;
        width: 100%;
        height: 100%;
    }

    .text{
        text-shadow: 0 0 1em $light-shadow;
        color: mix($light-shadow,white);
        font-weight: bold;
        font-size: 1.2em;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0;
            border-radius: 50%;
            border: 6px solid $light-shadow;
            box-shadow: 0 0 4em $light-shadow;
            background-color: rgba($light-shadow, .4);
            // opacity: 1;
            p{
                margin: 0;
            }
        }
    }

    .textframe-leave-active {
        transition: all .2s ease-in;
    }
    .textframe-leave-to {
        filter: url('#glitch');
        opacity: 0;
    }

</style>
