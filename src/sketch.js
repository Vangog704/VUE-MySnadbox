import App from './App.vue';

export default function sketch (p) {
    let rotation = 0;
    let airboat;
    let gg, zd = 0;
    let wheeldelta = 0; 

    p.preload = () => {
        airboat = p.loadModel('/public/assets/airboat.obj', true,
        (obj)=>{console.log('loaded!!')},
        (evnt)=>{console.log('loading error!!');});
    };

    p.setup = () => {
        p.createCanvas(600, 600, p.WEBGL);
        p.frameRate(60);
        gg = p.createGraphics(200,200);
        gg.fill(255);
        gg.textAlign(p.CENTER);
        gg.textSize(14);
    };
  
    p.draw = () => {
        p.background(100);
        p.noStroke();
        
        p.push();
        p.fill(255);
        gg.background(200);
        gg.text(Math.floor(p.frameRate())+' '+zd,20,20);
        p.translate(0, 0, -100);
        p.texture(gg);
        p.plane(700);
        p.pop();

        p.push();
        p.normalMaterial();
        zd+=wheeldelta; 
        wheeldelta = 0;
        p.translate(0,0,-zd);
        p.rotateZ(p.PI);
        p.rotateX(p.map(p.mouseY,0,600,-p.PI/2,p.PI/2,true));
        p.rotateY(-p.map(p.mouseX,0,600,0,p.PI,true));
        p.model(airboat);
        p.pop();
    };

    p.mouseWheel = (e) => {
        wheeldelta = e._mouseWheelDeltaY;
    };
};