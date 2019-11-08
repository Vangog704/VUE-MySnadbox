<template>
    
    <div id="app"
        @click="visible = false"
        @contextmenu.prevent="visible = false" 
    >
        <!-- <canvas :id="title" width="578" height="200"></canvas> -->
                <div class="redsquare"
            @contextmenu.prevent="showMenu($event)" 
        >   

        </div>
            <radial-menu
                :conf="conf"
                :pos="pos"
                :visible="visible"
            />
        <div class="aaa">AAA</div>

        <!-- <transition name='fade'>
            <circular-menu v-if='pos' 
                    :conf="conf"
                    :pos="pos"
            >
            </circular-menu>
        </transition> -->

        

        <!-- <transition name='fade'>
            <wheel-menu v-if='pos' 
                :ratio='ratio*0.9' 
                :size='size*2' 
                :btns="btnarray1" 
                :rotated="rotated"
                :position="pos"
            />
        </transition>
        <transition name='fade'>
            <wheel-menu v-if='pos' 
                :ratio='ratio' 
                :size='size' 
                :btns="btnarray" 
                :rotated="false"
                :position="pos"
            />
        </transition> -->
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
            conf:{
                angle: 180,
                aperture: 360,
                radius: 110,
                height: 100,
                btns:[
                    {height: 75, title:"QR", icon: Icons.qr,
                        btns:[
                            {height: 50, title:"Pen", icon: Icons.pen},
                            {height: 50, title:"DATA", icon: Icons.data},
                            {height: 50, title:"Bones", icon: Icons.bones},
                            {height: 50, title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {aperture: 20, height: 75, title:"Pen", icon: Icons.pen},
                    {height: 125, title:"Sword",icon: Icons.sword,
                        btns:[
                            {aperture: 20, height: 50, title:"Pen", icon: Icons.pen},
                            {height: 50, title:"DATA", icon: Icons.data},
                            {height: 50, title:"QR", icon: Icons.qr},
                            {height: 50, title:"Bones", icon: Icons.bones},
                            {height: 50, title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {aperture: 20, height: 75, title:"Bones", icon: Icons.bones,
                        btns:[
                            {height: 50, title:"Pen", icon: Icons.pen},
                            {height: 50, title:"DATA", icon: Icons.data,},
                        ]
                    },
                    {height: 75, title:"DATA", icon: Icons.data,
                        btns:[
                            {height: 50, title:"Pen", icon: Icons.pen,
                                btns:[
                                    {height: 50, title:"Pen", icon: Icons.pen},
                                    {height: 50, title:"Sword",icon: Icons.sword},
                                ]   
                            },
                            {height: 100, title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {aperture: 20, height: 75, title:"Head Phones", icon: Icons.headphone,
                        btns:[
                            {height: 50, title:"Pen", icon: Icons.pen},
                            {aperture: 20, height: 50, title:"DATA", icon: Icons.data,
                                btns:[
                                    {height: 50, title:"DATA", icon: Icons.data},
                                    {height: 50, title:"QR", icon: Icons.qr},
                                    {height: 50, title:"Bones", icon: Icons.bones},
                                    {aperture: 20, height: 50, title:"ZIP", icon: Icons.zip,
                                        btns:[
                                            {height: 50, title:"Pen", icon: Icons.pen},
                                            {height: 50, title:"Sword",icon: Icons.sword},
                                        ]  
                                    },
                                ]
                            },
                        ]
                    },
                    {height: 50, title:"ZIP", icon: Icons.zip},
                    // {height: 70, title:"Hex", icon: Icons.hex},
                    // {height: 100, title:"Fire", icon: Icons.fire},
                    // {height: 60, title:"Hex", icon: Icons.hex},
                    // {height: 50, title:"Fire", icon: Icons.fire},
                    // {height: 30, title:"Hex", icon: Icons.hex},
                    // {height: 50, title:"Fire", icon: Icons.fire},
                ]
            },
            conf1:{
                angle: 180,
                aperture: 360,
                radius: 110,
                height: 75,
                btns:[
                    {title:"QR", icon: Icons.qr,
                        btns:[
                            {title:"Pen", icon: Icons.pen},
                            {title:"DATA", icon: Icons.data},
                            {title:"Bones", icon: Icons.bones},
                            {title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {title:"Pen", icon: Icons.pen},
                    {title:"Sword",icon: Icons.sword,
                        btns:[
                            {title:"Pen", icon: Icons.pen},
                            {title:"DATA", icon: Icons.data},
                            {title:"QR", icon: Icons.qr},
                            {title:"Bones", icon: Icons.bones},
                            {title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {title:"Bones", icon: Icons.bones,
                        btns:[
                            {title:"Pen", icon: Icons.pen},
                            {title:"DATA", icon: Icons.data,},
                        ]
                    },
                    {title:"DATA", icon: Icons.data,
                        btns:[
                            {title:"Pen", icon: Icons.pen,
                                btns:[
                                    {title:"Pen", icon: Icons.pen},
                                    {title:"Sword",icon: Icons.sword},
                                ]   
                            },
                            {title:"Sword",icon: Icons.sword},
                        ]
                    },
                    {title:"Head Phones", icon: Icons.headphone,
                        btns:[
                            {title:"Pen", icon: Icons.pen},
                            {title:"DATA", icon: Icons.data,
                                btns:[
                                    {title:"ZIP", icon: Icons.zip,
                                        btns:[
                                            {title:"Pen", icon: Icons.pen},
                                            {title:"Sword",icon: Icons.sword},
                                        ]  
                                    },
                                    {title:"DATA", icon: Icons.data},
                                    {title:"QR", icon: Icons.qr},
                                    {title:"Bones", icon: Icons.bones},
                                ]
                            },
                        ]
                    },
                    {title:"ZIP", icon: Icons.zip},
                ]
            },

            // size:120,
            // size:180,
            // size:200,
            // size:240,
            // size:360,
            size:400,
            // size:800,
            // size:1200,
            // size:1600, 
                       
            // ratio:5,  
            // ratio:80,  
            // ratio:75,  
            // ratio:70,  
            // ratio:60,  
            // ratio:50,  
            ratio:40,  
            // rotated:false,
            rotated:true,

            pos: {x:0, y:0},
            visible:false,
            title:'myCanvas',
            btnarray:[
            [
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"Bones", icon: Icons.bones},
                {title:"Sword",icon: Icons.sword},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"ZIP", icon: Icons.zip},
                {title:"Hex", icon: Icons.hex},
                {title:"Fire", icon: Icons.fire},
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
                {title:"Hex", icon: Icons.hex},
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
            // this.pos = undefined;
            // this.pos = {x:0, y:0};
            this.visible = false;
            console.log(e);
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
@import './custom.scss';

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
