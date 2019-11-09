<template>
    <g>

        <g class="button-group"
            v-for="(btn,id) in shape()"
            :key="id"
        >
                <g class="button"
                    @mouseover="buttonOverHandler($event, btn)"
                    @mouseout="emitDefault($event, btn)"
                    @contextmenu="emitDefault($event, btn)"
                >
                <a :href="`/${id}`">
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
                @rotate="transferRotatation($event)"
                :buttons="btn.children"
                :box="box"
            />
        </g>
    </g>
</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";
import CircularMenuBuilder from "./circular-menu-builder";

export default {
    name: "button-group",

    props: {
        buttons: Array,
        box: Object,
    },
    data() {
        return {

        };
    },
    methods: {
        
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
            this.emitRotatation(event, btn);
            this.emitText(btn.title);
        },

        emitText(text){
            this.$emit('setText', text);
        },

        emitRotatation(event, btn){
            this.$emit('rotate', btn.iconpos.clone().normalize().multiply(new Victor(12,12)));
        },

        emitDefault(event, btn){
            this.$emit('rotate');
            this.$emit('setText');
        },

        transferRotatation(vector){
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

    .arc-svg{
        overflow: visible;
        fill: rgba($main-color, 1);
        stroke: $light-shadow;
        stroke-width: 1px;

        transition-duration: 0s, .3s;
        transition-property: stroke, fill;
    }

    .icon{
        pointer-events: none;
        overflow: visible;
        stroke: $main-color;
        stroke-width: 0px;
        fill: $icon-color;
    }
    .circle{
        pointer-events: none;
        fill: rgba($main-color, 1);
        stroke: $main-color;
        stroke-width: 1px;
    }

    .button-group{
        visibility: visible;
    }

    .button{
        // transition-duration: .5s, .1s;
        // transition-property: stroke, fill;
        &:hover{
            &:hover + g{
                .arc-svg{
                    fill: rgba($light-shadow, .5);
                    stroke-width: 3px;
                    stroke: $main-color;
                }
                .icon{
                    fill: $selected-shodow;
                    stroke: $light-shadow; 
                }
            }
            .arc-svg{
                fill: rgba($light-shadow, .8);
                stroke-width: 6px;
                stroke: $light-shadow;
            }
            .icon{
                fill: $selected-shodow;
                stroke: $light-shadow; 
            }
            .circle{
                stroke-width: 2px;
                stroke: $light-shadow;
            }
        }
    }

</style>
