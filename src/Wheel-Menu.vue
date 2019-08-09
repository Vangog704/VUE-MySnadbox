<template>
    
    <div id="app">
        <canvas :id="title" width="578" height="200"></canvas>
        
        <!-- <wheel-menu :num=5 :srad=60 :lrad=110></wheel-menu> -->
        <wheel-menu :num=6 :srad=60 :lrad=110 :btns="btnarray" />
        <!-- <wheel-menu :num=8 :srad=60 :lrad=110></wheel-menu>
        <wheel-menu :num=12 :srad=60 :lrad=110></wheel-menu> -->
    </div>

</template>

<script>

import Victor from './../node_modules/victor';

export default {
    name: 'app',
    data: function(){
        console.log('data!!!!');

        return {
            title:'myCanvas',
            btnarray: [
                {title:"0", icon:"M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.121 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841v0 0zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0 0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z M8 2h4v2h-4v-2z M12 4h4v2h-4v-2z M8 6h4v2h-4v-2z M12 8h4v2h-4v-2z M8 10h4v2h-4v-2z M12 12h4v2h-4v-2z M8 14h4v2h-4v-2z M12 16h4v2h-4v-2z M8 26.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-5c0-0.825-0.675-1.5-1.5-1.5h-2.5v-2h-4v8.5zM14 24v2h-4v-2h4z"},
                {title:"1", icon:"M10 2h-8v8h8v-8zM12 0v0 12h-12v-12h12zM4 4h4v4h-4zM30 2h-8v8h8v-8zM32 0v0 12h-12v-12h12zM24 4h4v4h-4zM10 22h-8v8h8v-8zM12 20v0 12h-12v-12h12zM4 24h4v4h-4zM14 0h2v2h-2zM16 2h2v2h-2zM14 4h2v2h-2zM16 6h2v2h-2zM14 8h2v2h-2zM16 10h2v2h-2zM14 12h2v2h-2zM14 16h2v2h-2zM16 18h2v2h-2zM14 20h2v2h-2zM16 22h2v2h-2zM14 24h2v2h-2zM16 26h2v2h-2zM14 28h2v2h-2zM16 30h2v2h-2zM30 16h2v2h-2zM2 16h2v2h-2zM4 14h2v2h-2zM0 14h2v2h-2zM8 14h2v2h-2zM10 16h2v2h-2zM12 14h2v2h-2zM18 16h2v2h-2zM20 14h2v2h-2zM22 16h2v2h-2zM24 14h2v2h-2zM26 16h2v2h-2zM28 14h2v2h-2zM30 20h2v2h-2zM18 20h2v2h-2zM20 18h2v2h-2zM22 20h2v2h-2zM26 20h2v2h-2zM28 18h2v2h-2zM30 24h2v2h-2zM18 24h2v2h-2zM20 22h2v2h-2zM24 22h2v2h-2zM26 24h2v2h-2zM28 22h2v2h-2zM30 28h2v2h-2zM20 26h2v2h-2zM22 28h2v2h-2zM24 26h2v2h-2zM26 28h2v2h-2zM20 30h2v2h-2zM24 30h2v2h-2zM28 30h2v2h-2z"},
                {title:"2", icon:"M27 6h-16c-2.75 0-5 2.25-5 5v16c0 2.75 2.25 5 5 5h16c2.75 0 5-2.25 5-5v-16c0-2.75-2.25-5-5-5zM13 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM13 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM19 22c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25.899 4c-0.467-2.275-2.491-4-4.899-4h-16c-2.75 0-5 2.25-5 5v16c0 2.408 1.725 4.432 4 4.899v-19.899c0-1.1 0.9-2 2-2h19.899z"},
                {title:"3", icon:"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"},
                {title:"0", icon:"M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.121 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841v0 0zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0 0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z M8 2h4v2h-4v-2z M12 4h4v2h-4v-2z M8 6h4v2h-4v-2z M12 8h4v2h-4v-2z M8 10h4v2h-4v-2z M12 12h4v2h-4v-2z M8 14h4v2h-4v-2z M12 16h4v2h-4v-2z M8 26.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-5c0-0.825-0.675-1.5-1.5-1.5h-2.5v-2h-4v8.5zM14 24v2h-4v-2h4z"},
                {title:"1", icon:"M10 2h-8v8h8v-8zM12 0v0 12h-12v-12h12zM4 4h4v4h-4zM30 2h-8v8h8v-8zM32 0v0 12h-12v-12h12zM24 4h4v4h-4zM10 22h-8v8h8v-8zM12 20v0 12h-12v-12h12zM4 24h4v4h-4zM14 0h2v2h-2zM16 2h2v2h-2zM14 4h2v2h-2zM16 6h2v2h-2zM14 8h2v2h-2zM16 10h2v2h-2zM14 12h2v2h-2zM14 16h2v2h-2zM16 18h2v2h-2zM14 20h2v2h-2zM16 22h2v2h-2zM14 24h2v2h-2zM16 26h2v2h-2zM14 28h2v2h-2zM16 30h2v2h-2zM30 16h2v2h-2zM2 16h2v2h-2zM4 14h2v2h-2zM0 14h2v2h-2zM8 14h2v2h-2zM10 16h2v2h-2zM12 14h2v2h-2zM18 16h2v2h-2zM20 14h2v2h-2zM22 16h2v2h-2zM24 14h2v2h-2zM26 16h2v2h-2zM28 14h2v2h-2zM30 20h2v2h-2zM18 20h2v2h-2zM20 18h2v2h-2zM22 20h2v2h-2zM26 20h2v2h-2zM28 18h2v2h-2zM30 24h2v2h-2zM18 24h2v2h-2zM20 22h2v2h-2zM24 22h2v2h-2zM26 24h2v2h-2zM28 22h2v2h-2zM30 28h2v2h-2zM20 26h2v2h-2zM22 28h2v2h-2zM24 26h2v2h-2zM26 28h2v2h-2zM20 30h2v2h-2zM24 30h2v2h-2zM28 30h2v2h-2z"},
                {title:"2", icon:"M27 6h-16c-2.75 0-5 2.25-5 5v16c0 2.75 2.25 5 5 5h16c2.75 0 5-2.25 5-5v-16c0-2.75-2.25-5-5-5zM13 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM13 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM19 22c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25.899 4c-0.467-2.275-2.491-4-4.899-4h-16c-2.75 0-5 2.25-5 5v16c0 2.408 1.725 4.432 4 4.899v-19.899c0-1.1 0.9-2 2-2h19.899z"},
                {title:"3", icon:"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"}
            ]
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
