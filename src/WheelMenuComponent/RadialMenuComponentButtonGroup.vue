<template>
    <g class="main">

        <g :class="`button-group ${strokeClass}`"
            v-for="(btn,id) in shape()"
            :key="id"
        >
            <g class="button"
                @mouseover="buttonOverHandler($event, btn)"
                @mouseout="emitDefault($event, btn)"
                @contextmenu="emitDefault($event, btn)"
            >
                <a class="link"
                    :href="`${btn.path}`" 
                    @click="redirect($event,btn)"
                    @contextmenu.prevent="contextMenu($event,btn)"
                >
                    <!-- arc  -->
                    <svg class="arc-svg">
                        <path class="arc-path"
                            :d="btn.path_r"
                        />
                    </svg>
                    <!-- circle -->
                    <circle class="circle"
                        :cx="`${btn.iconpos.x}`"
                        :cy="`${btn.iconpos.y}`"
                        :r="`${btn.iconsize/2}`"
                    />
                    <!-- icon  -->
                    <svg class="icon"
                        :viewBox="iconViewBox(btn)"
                        :x="`${btn.iconpos.x}`"
                        :y="`${btn.iconpos.y}`"
                    >
                        <path
                            :d="btn.icon.d"
                        />
                    </svg>
                </a>
            </g>
            <button-group 
                @setText="emitText"
                @rotate="transferRotation($event)"
                :buttons="btn.children"
                :box="box"
            />
        </g>
    </g>
</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";

export default {
    name: "button-group",

    props: {
        buttons: Array,
        box: Object,
    },
    data() {
        return {
            strokeClass: '',
        };
    },
    methods: {

        //TODO rework method
        redirect(e,btn){
            if(btn.action && typeof btn.action === 'function') {
                e.stopPropagation(); // menu don't hide
                if(!btn.action()) {
                    e.preventDefault(); // redirect off
                    return;
                }
            }
            if(!btn.path) {
                e.preventDefault();
                e.stopPropagation();    
            }else console.log("redirect", btn.path);
        },

        contextMenu(e, btn){
            //TODO add action callbacks
            e.stopPropagation(); // menu don't hide
        },

        shape(){
            return this.buttons;
        },

        iconViewBox(btn){
            return `
                ${btn.icon.size.w/2} 
                ${btn.icon.size.h/2} 
                ${this.box.w/btn.iconsize*btn.icon.size.w*1.6} 
                ${this.box.h/btn.iconsize*btn.icon.size.h*1.6}
            `;
        },

        buttonOverHandler(event, btn){
            this.emitRotation(event, btn);
            this.emitText(btn.title);
            this.strokeClass = "active-menu";
        },

        emitText(text){
            this.$emit('setText', text);
        },

        emitRotation(event, btn){
            this.$emit('rotate', btn.iconpos.clone().normalize().multiply(new Victor(12,12)));
        },

        emitDefault(event, btn){
            this.$emit('rotate');
            this.$emit('setText');
            this.strokeClass = "";
        },

        transferRotation(vector){
            this.$emit('rotate', vector);
        },
    },
    computed: {

    },
    mounted: function() {

    }
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

    .active-menu{
        .arc-svg{
            stroke: var(--act--btn-stroke-color); 
        }
    }

    .arc-svg{
        overflow: visible;
        fill: var(--btn-color);
        stroke: var(--btn-stroke-color);
        stroke-width: 1px;

        transition-duration: 0s, .3s;
        transition-property: stroke, fill;
    }

    .icon{
        pointer-events: none;
        overflow: visible;
        stroke-width: 0px;
        fill: var(--icon-color);
        stroke: var(--icon-color); 
    }
    .circle{
        pointer-events: none;
        stroke-width: 1px;
        fill: var(--icon-circle-color);
        stroke: var(--icon-circle-stroke-color);    
    }

    .button-group{
        visibility: visible;
    }

    .button{
        // transition-duration: .5s, .1s;
        // transition-property: stroke, fill;   
        &:hover>.link:active{
            .arc-svg{
                transition-duration: 0s, 0s;
                transition-property: stroke, fill;
                fill: var(--sel--btn-stroke-color);
                stroke: var(--sel--btn-stroke-color);
            } 
            .icon{
                fill: limegreen;
            }
        }  
        &:hover{
            &:hover + g{
                .arc-svg{
                    stroke-width: 3px;
                    fill: var(--act--btn-color);
                    stroke: var(--act--btn-stroke-color);
                }
                .icon{
                    fill: var(--act--icon-color);
                    stroke: var(--act--icon-color); 
                }
            }
            .arc-svg{
                stroke-width: 6px;
                fill: var(--sel--btn-color);
                stroke: var(--sel--btn-stroke-color);
            }
            .icon{
                fill: var(--sel--icon-color);
                stroke: var(--sel--icon-color); 
            }
            .circle{
                stroke-width: 2px;
                fill: var(--sel--icon-circle-color);
                stroke: var(--sel--icon-circle-stroke-color);
            }
        }
    }

</style>
