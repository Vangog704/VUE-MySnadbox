<template>
    
    <div id="app" @contextmenu.prevent="showMenu($event)" @click="pos = undefined">
        <!-- <canvas :id="title" width="578" height="200"></canvas> -->
        <div class="aaa">AAA</div>

        <!-- <transition name='fade'>
            <wheel-menu v-if='pos' 
                :ratio='ratio*0.9' 
                :size='size*2' 
                :btns="btnarray1" 
                :rotated="rotated"
                :position="pos"
            />
        </transition> -->
        <transition name='fade'>
            <wheel-menu v-if='pos' 
                :ratio='ratio' 
                :size='size' 
                :btns="btnarray" 
                :rotated="rotated"
                :position="pos"
            />
        </transition>
        <!-- <transition name='fade'>
            <wheel-menu v-if='pos' 
                :ratio='ratio' 
                :size='size/1.8' 
                :btns="btnarray1" 
                :rotated="rotated"
                :position="pos"
            />
        </transition> -->

    </div>

</template>

<script>

import Victor from './../node_modules/victor';
import Icons from './assets/icons.json';
import { setTimeout } from 'timers';

export default {
    name: 'app',
    data: function(){

        return {
            // size:120,
            // size:180,
            // size:200,
            // size:240,
            size:360,
            // size:400,
            // size:800,
            // size:1200,
            // size:1600, 
                       
            // ratio:80,  
            // ratio:75,  
            // ratio:70,  
            ratio:60,  
            // ratio:50,  
            // ratio:40,  
            // rotated:false,
            rotated:true,


            pos: undefined,
            title:'myCanvas',
            btnarray:[
            [
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"Bones", icon: Icons.bones},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"Bones", icon: Icons.bones},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
            ],
            ],
            btnarray2:[
            [
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
            ],
            [
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"Bones", icon: Icons.bones},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
                {title:"Head Phones", icon: Icons.headphone},
            ],
            [
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
            ],
            ]
        }

    },
    props:{
        num:Number
    },
    methods:{

        showMenu(e){
            // console.log(e);
            this.pos = undefined;
            setTimeout(()=>{ this.pos = {x: e.pageX, y: e.pageY}; }, 200);
            return false;
        },
        
    },
    mounted: function (){

    }
}


</script>

<style lang='scss' subtract>

@import './colorScheme.scss';
@import './custom.scss';

    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(.1);
    }

.aaa{
    width: 100px; 
    height: 700px; 
}

#app{
    background-color: rgb(53, 53, 53);
    // background-color: rgb(255, 255, 255);

}

</style>
