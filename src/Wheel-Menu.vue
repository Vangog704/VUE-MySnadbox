<template>
    
    <div id="app"
        @click="m1.visible = false; m2.visible = false, m3.visible = false; m4.visible = false"
        @contextmenu="m1.visible = false; m2.visible = false; m3.visible = false; m4.visible = false"
    >
        <div class="square a-square"
            @contextmenu.prevent="showMenu($event, m1)" 
        ><h3 v-if="!m1.visible" >Right click here...</h3></div>   
        <div class="square b-square"
            @contextmenu.prevent="showMenu($event, m2)" 
        ><h3 v-if="!m2.visible" >...or here...</h3></div>
        <div class="square c-square"
            @contextmenu.prevent="showMenu($event, m3)" 
        ><h3 v-if="!m3.visible" >...</h3></div>
        <div class="square d-square"
            @contextmenu.prevent="showMenu($event, m4)" 
        ><h3 v-if="!m4.visible" >...same.</h3></div>

        <radial-menu
            :conf="m1.conf"
            :pos="m1.pos"
            :visible="m1.visible"
        />
    <span class="pink">
        <radial-menu
            :conf="m2.conf"
            :pos="m2.pos"
            :visible="m2.visible"
        />
    </span>
        <radial-menu
            :conf="m3.conf"
            :pos="m3.pos"
            :visible="m3.visible"
        />

        <radial-menu
            :conf="m4.conf"
            :pos="m4.pos"
            :visible="m4.visible"
        />

    </div>

</template>
<script>

import Victor from './../node_modules/victor';
import Icons from './assets/icons.json';
import { setTimeout } from 'timers';

import menuConfig1 from './menuConfig';
import menuConfig2 from './menuConfig2';
import menuConfig3 from './menuConfig3';
import menuConfig4 from './menuConfig4';

export default {
    name: 'app',
    data: function(){

        return {
            m1:{
                conf: menuConfig1,
                pos: {x:0, y:0},
                visible:false,
            },
            m2:{
                conf: menuConfig2,
                pos: {x:0, y:0},
                visible:false, 
            },
            m3:{
                conf: menuConfig3,
                pos: {x:0, y:0},
                visible:false, 
            },
            m4:{
                conf: menuConfig4,
                pos: {x:0, y:0},
                visible:false, 
            },
        }

    },
    props:{
        num:Number
    },
    methods:{
        showMenu(e, instance){
            instance.visible = false;
            setTimeout(()=>{ 
                instance.pos = {x: e.pageX, y: e.pageY};  
                instance.visible = true;
            }, 200);
            return false;
        }
    },
    mounted: function (){
        // setTimeout(()=>{ 
        //     this.conf.btns[0].aperture = 40;
        // }, 5000);
    }
}


</script>

<style lang='scss' subtract>
@import './colorScheme.scss';

.pink{
    
    .radial-menu-main{
        --btn-color: rgb(255, 123, 123);
        --btn-stroke-color: var(--btn-color);
        --sel--btn-color: rgba(40, 255, 244, .8);
        --sel--btn-stroke-color: rgb(40, 255, 244);
        --act--btn-color: var(--text-bg-color);
        --act--btn-stroke-color: var(--btn-color);
        
        --text-color: rgb(147, 255, 250);
        --text-bg-color: rgba(40, 255, 244, .5);
        --text-bg-stroke-color: var(--sel--btn-stroke-color);
        
        --icon-color: var(--sel--btn-stroke-color);
        --sel--icon-color: var(--sel--btn-stroke-color);
        --act--icon-color: var(--sel--btn-stroke-color);
        --icon-circle-color: var(--btn-color);
        --icon-circle-stroke-color: var(--btn-color);
        --sel--icon-circle-color: var(--btn-color);
        --sel--icon-circle-stroke-color: var(--sel--btn-stroke-color);
    }
}

.square{
    color: white;
    overflow: hidden;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: purple;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.a-square{
    top: 200px;
    left: 200px;
}
.b-square{
    top: 200px;
    left: 450px;
}
.c-square{
    top: 450px;
    left: 200px;
}
.d-square{
    top: 450px;
    left: 450px;
}

#app{
    // background-color: rgb(53, 53, 53);
        
    // background-color: #690092;
    width: 2000px;
    height: 2000px;
    background-color: #ce9200;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

</style>
