<template>
    
    <div id="app"
        @click="visible = false"
        @contextmenu="visible = false"
    >
        <div class="redsquare"
            @contextmenu.prevent="showMenu($event)" 
        />   

        <radial-menu
            :conf="conf"
            :pos="pos"
            :visible="visible"
        />
        <div class="aaa">AAA</div>

    </div>

</template>
<script>

import Victor from './../node_modules/victor';
import Icons from './assets/icons.json';
import { setTimeout } from 'timers';

import menuConfig from './menuConfig';
import menuConfig2 from './menuConfig2';

export default {
    name: 'app',
    data: function(){

        return {
            conf: menuConfig2,
            pos: {x:0, y:0},
            visible:false,
        }

    },
    props:{
        num:Number
    },
    methods:{

        showMenu(e){
            // this.pos = undefined;
            // this.pos = {x:0, y:0};
            this.visible = false;
            // console.log(e);
            // console.log(e.pageX);
            // console.log(e.layerX);
            setTimeout(()=>{ 
                this.pos = {x: e.pageX, y: e.pageY};  
                this.visible = true;
                // console.log(this.pos,``);
            }, 200);
            return false;
        },
        
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

.redsquare{
    overflow: hidden;
    position: absolute;
    top: 120px;
    left: 120px;
    width: 400px;
    height: 400px;
    background-color: rgb(59, 0, 61);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

}

.aaa{
    width: 100px; 
    height: 3000px; 
}

#app{
    // background-color: rgb(53, 53, 53);
        
    // background-color: #690092;
    background-color: #ce9200;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

</style>
