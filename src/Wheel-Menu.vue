<template>
    
    <div id="app" @contextmenu.prevent="showMenu($event)" @click="pos = undefined">
        <!-- <canvas :id="title" width="578" height="200"></canvas> -->
        <div class="aaa" >AAA</div>
        <transition name='fade'>
            <wheel-menu v-if='pos' 
                :rotated='rotated' 
                :inrad='inrad' 
                :outrad='outrad' 
                :btns="btnarray" 
                :position="pos"
            />
        </transition>
    </div>

</template>

<script>

import Victor from './../node_modules/victor';
import Icons from './assets/icons.json';

export default {
    name: 'app',
    data: function(){

        return {
            // inrad:78, outrad:130, rotated:true,
            // inrad:60, outrad:120, rotated:true,
            // inrad:80, outrad:150, rotated:true,
            // inrad:60, outrad:150, rotated:true,
            // inrad:216, outrad:360, rotated:true,
            // inrad:270, outrad:450, rotated:true,
            inrad:200, outrad:450, rotated:true,
            // inrad:600, outrad:1000, rotated:true,
            // inrad:78, outrad:130, rotated:false,
            // inrad:80, outrad:150, rotated:false,
            // inrad:216, outrad:360, rotated:false,
            // inrad:270, outrad:450, rotated:false,
            // inrad:600, outrad:1000, rotated:false,
            pos: undefined,
            title:'myCanvas',
            btnarray: [
                {title:"ZIP", icon: Icons.zip},
                {title:"DATA", icon: Icons.data},
                {title:"Pen", icon: Icons.pen},
                {title:"QR", icon: Icons.qr},
                {title:"Bones", icon: Icons.bones},
                {title:"Head Phones", icon: Icons.headphone},
                {title:"Sword",icon: Icons.sword},
                {title:"Fire", icon: Icons.fire},
            ]
        }

    },
    props:{
        num:Number
    },
    methods:{

        showMenu(e){
            // console.log(e);
            this.pos = {x: e.pageX, y: e.pageY};
            return false;
        },

        updateCanvas: function(){  
            
            // document.oncontextmenu = ()=>false;
            // let self = this;
            // // console.log(this);
            // document.oncontextmenu = function() {return false;}
            // document.addEventListener( "contextmenu", function(e) {
            //     console.log(e.clientX);
            //     self.x = e.clientX;
            //     self.y = e.clientY;
            // });

            // document.onmousedown = (e) => {
            //     console.log(e);
                
            //     // self.x = -9999;
            //     // self.y = -9999;
            // };

            // var pos= {x: 80,y: 80};
            // console.log('created');
            // var canvas = document.getElementById(this.title);
            // var ctx = canvas.getContext('2d');
            
            // ctx.beginPath();
            // ctx.arc(100, 100, 100, Math.PI, 0);
            // ctx.fillStyle = "red";  
            // ctx.fill();
            // ctx.closePath();
            
            // ctx.beginPath();
            // ctx.globalCompositeOperation = 'destination-out';
            // ctx.arc(100, 100, 50, 0, Math.PI * 2);
            // ctx.fill();
            // ctx.closePath();
            // console.log(ctx.isPointInPath(pos.x, pos.y));
            
            // ctx.beginPath();
            // ctx.arc(100, 100, 20, 0, Math.PI * 2);
            // ctx.globalCompositeOperation = 'source-over';
            // ctx.fillStyle = "green";
            // ctx.fill();
            // ctx.closePath();
            
            // ctx.fillStyle = 'green';
            // ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
            // ctx.fill();
        } 
    },
    mounted: function (){

        this.updateCanvas();
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
    background-color: rgb(50, 50, 50);
    // background-color: rgb(255, 255, 255);

}

</style>
