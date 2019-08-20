import Victor from './../../node_modules/victor';

export default class WheelBtn{
    constructor(id, name, num, points, icon, outrad, inrad){
        this.id = id;
        this.name = name;
        this.icon = icon; 
        this.ps = points; //points
        this.ps_r = []; //points rounded
        this.outrad = outrad; // outside radius
        this.inrad = inrad; // inside radius
        this.center = new Victor(0,0);
        this.scale = 1;
        this.path_d;

        // this.__calcCenterAvg(num);
        this.__calcCenterRot(num);

        // this.__setGap();
        this.__calcRaund();

        this.__doPathCircle();
        // this.__doPathRoundedSuared();
        // this.__doPathRoundedCircle();
    }

    __calcCenterAvg(num) {
        const hight = .5;
        const side = .5;

        this.center = this.ps[0].clone().mix(this.ps[3],hight)
                .mix(this.ps[1].clone().mix(this.ps[2],hight), side);
    }

    __calcCenterRot(num) {
        const hight = .5;
        const outradvec = new Victor(this.outrad,this.outrad);
        
        this.center = this.ps[0].clone().mix(this.ps[3], hight)
            .subtract(outradvec)
            .rotate(Math.PI/num)
            .add(outradvec);
    }

    __sidePoint(vec1, vec2, shiftvec, part){
        return vec1.clone().subtract(shiftvec)
        .mix(vec2.clone().subtract(shiftvec), part)
        .add(shiftvec);
    }

    __setGap(){
        let insider
        const gap = 2;
        const gapvec = new Victor(gap,gap);
        const outradvec = new Victor(this.outrad,this.outrad);
        insider = this.ps[0].clone().subtract(outradvec).rotate(Math.PI/2).normalize().multiply(gapvec);
        this.ps[0].subtract(outradvec).add(insider).add(outradvec)
        this.ps[3].subtract(outradvec).add(insider).add(outradvec)
        insider = this.ps[1].clone().subtract(outradvec).rotate(Math.PI/2).normalize().multiply(gapvec);
        this.ps[1].subtract(outradvec).subtract(insider).add(outradvec)
        this.ps[2].subtract(outradvec).subtract(insider).add(outradvec)
    }

    __calcRaund(){
        const outradvec = new Victor(this.outrad,this.outrad);
        for(let i = 0, j = 0 ; i < this.ps.length ; i++, j = 3*i){
            this.ps_r[j] = this.__sidePoint(this.ps[i], this.ps[(i!==0 ? i-1 : this.ps.length-1)], outradvec, 0.2);
            this.ps_r[j+2] = this.__sidePoint(this.ps[i], this.ps[(i+1 < this.ps.length ? i+1 : 0)], outradvec, 0.2);
            this.ps_r[j+1] = this.ps[i].clone().mix(this.ps_r[j].clone().mix(this.ps_r[j+2],0.3),0.3);
        }
    }

    __doPathCircle(){
        this.path_d = 
            ' M '+this.ps[0].x+' '+this.ps[0].y+
            ' A '+this.outrad*0.94+' '+this.outrad*0.94+' 0 0 1 '+this.ps[1].x+' '+this.ps[1].y+ 
            ' L '+this.ps[2].x+' '+this.ps[2].y+
            ' A '+this.inrad*0.94+' '+this.inrad*0.94+' 1 0 0 '+this.ps[3].x+' '+this.ps[3].y+
            ' z '
    }

    __doPathRoundedSuared(){
        this.path_d = 
            ' M '+this.ps_r[0].x+' '+this.ps_r[0].y+
            ' Q '+this.ps_r[1].x+' '+this.ps_r[1].y+' , '+this.ps_r[2].x+' '+this.ps_r[2].y+
            ' L '+this.ps_r[3].x+' '+this.ps_r[3].y+ 
            ' Q '+this.ps_r[4].x+' '+this.ps_r[4].y+' , '+this.ps_r[5].x+' '+this.ps_r[5].y+
            ' L '+this.ps_r[6].x+' '+this.ps_r[6].y+
            ' Q '+this.ps_r[7].x+' '+this.ps_r[7].y+' , '+this.ps_r[8].x+' '+this.ps_r[8].y+
            ' L '+this.ps_r[9].x+' '+this.ps_r[9].y+
            ' Q '+this.ps_r[10].x+' '+this.ps_r[10].y+' , '+this.ps_r[11].x+' '+this.ps_r[11].y+
            ' z ';
    }

    __doPathRoundedCircle(){
        this.path_d = 
            ' M '+this.ps_r[0].x+' '+this.ps_r[0].y+
            ' Q '+this.ps_r[1].x+' '+this.ps_r[1].y+' , '+this.ps_r[2].x+' '+this.ps_r[2].y+
            ' A '+this.outrad*0.94+' '+this.outrad*0.94+' 0 0 1 '+this.ps_r[3].x+' '+this.ps_r[3].y+ 
            ' Q '+this.ps_r[4].x+' '+this.ps_r[4].y+' , '+this.ps_r[5].x+' '+this.ps_r[5].y+
            ' L '+this.ps_r[6].x+' '+this.ps_r[6].y+
            ' C '+this.ps_r[7].x+' '+this.ps_r[7].y+' ,'+this.ps_r[7].x+' '+this.ps_r[7].y+' , '+this.ps_r[8].x+' '+this.ps_r[8].y+
            ' Q '+this.ps_r[7].x+' '+this.ps_r[7].y+' , '+this.ps_r[8].x+' '+this.ps_r[8].y+
            ' A '+this.inrad*0.94+' '+this.inrad*0.94+' 1 0 0 '+this.ps_r[9].x+' '+this.ps_r[9].y+
            ' Q '+this.ps_r[10].x+' '+this.ps_r[10].y+' , '+this.ps_r[11].x+' '+this.ps_r[11].y+
            ' z ';
    } 

}