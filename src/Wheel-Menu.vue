<template>
    
    <div id="app">
        <canvas :id="title" width="578" height="200"></canvas>
        
        <wheel-menu :num=5 :srad=40 :lrad=80></wheel-menu>
        <wheel-menu :num=6 :srad=45 :lrad=80></wheel-menu>
        <wheel-menu :num=8 :srad=60 :lrad=100></wheel-menu>
        <wheel-menu :num=10 :srad=60 :lrad=100></wheel-menu>
    </div>

</template>

<script>

import Victor from './../node_modules/victor';

export default {
    name: 'app',
    data: function(){
        console.log('data!!!!');

        return {
            title:'myCanvas'
        }
    },
    props:{
        num:Number
    },
    methods:{
        updateCanvas: function(){    
            var pos= {x: 80,y: 80};
            console.log('created');
            var canvas = document.getElementById(this.title);
            var ctx = canvas.getContext('2d');
            
            ctx.beginPath();
            ctx.arc(100, 100, 100, Math.PI, 0);
            ctx.fillStyle = "red";  
            ctx.fill();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.globalCompositeOperation = 'destination-out';
            ctx.arc(100, 100, 50, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            console.log(ctx.isPointInPath(pos.x, pos.y));
            
            ctx.beginPath();
            ctx.arc(100, 100, 20, 0, Math.PI * 2);
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();
            
            ctx.fillStyle = 'green';
            ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
            ctx.fill();
        } 
    },
    mounted: function (){
        this.updateCanvas();
    }
}


</script>

<style>

#app{

}

</style>
