import Victor from './../../node_modules/victor';

export default class WheelBtn{
    constructor(id, num, points, icon, outrad, inrad){
        this.id = id,  
        this.icon = icon, 
        this.ps = points, //points
        this.outrad = outrad, // outside radius
        this.inrad = inrad // inside radius
        this.center = new Victor(0,0);
        console.log(points[0].toString());
        this.centerCalc(num);
    }

    centerCalc(num) {
        let outradvec = new Victor(this.outrad,this.outrad);

        this.center = this.ps[0].clone().mix(this.ps[1],0.5)
        this.center.subtract(outradvec);
        this.center.rotate((Math.PI)/num);
        this.center.add(outradvec);
    }
}