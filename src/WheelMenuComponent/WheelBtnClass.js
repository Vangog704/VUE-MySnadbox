import Victor from 'victor';

export default class WheelBtn{
    constructor(id, name, angle, points, icon, outrad, inrad, hsize){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.ps = points; //points
        this.ps_r = []; //points rounded
        this.half_size = hsize;
        this.outrad = outrad; // outside radius
        this.inrad = inrad; // inside radius
        this.center;
        this.path_d = "";
        this.gap = 1+this.outrad/300;
        this.angle = angle;

        this.calc_shape(angle,true,true);
    }

    calc_shape(angle, iscircled, isrounded){
        
        if(iscircled){
            this.__calcCenterRot(angle);
            this.__setGap();
            if(isrounded) {
                this.__calcRaund_forCircle(angle);
                this.__doPathRoundedCircle();
            } else this.__doPathCircle();
        }else{
            this.__calcCenterAvg();
            this.__setGap();
            if(isrounded) {
                this.__calcRaund_forSquared();
                this.__doPathRoundedSuared();
            } else this.__doPathSuared();
        }

    }

    __calcCenterAvg() {
        const height = .5;
        const side = .5;

        this.center = this.ps[0].clone().mix(this.ps[3],height)
                .mix(this.ps[1].clone().mix(this.ps[2],height), side);
    }

    __calcCenterRot(angle) {
        const hight = .5;
        const outradvec = new Victor(this.half_size,this.half_size);
        
        this.center = this.ps[0].clone().mix(this.ps[3], hight)
            .subtract(outradvec)
            .rotate(angle/2)
            .add(outradvec);
    }

    __sidePoint(vec1, vec2, shiftvec, part){
        return vec1.clone().subtract(shiftvec)
        .mix(vec2.clone().subtract(shiftvec), part)
        .add(shiftvec);
    }

    __setGap(){
        let insider
        const gapvec = new Victor(this.gap,this.gap);
        const outradvec = new Victor(this.half_size,this.half_size);
        insider = this.ps[0].clone().subtract(outradvec).rotate(Math.PI/2).normalize().multiply(gapvec);
        this.ps[0].subtract(outradvec).add(insider).add(outradvec)
        this.ps[3].subtract(outradvec).add(insider).add(outradvec)
        insider = this.ps[1].clone().subtract(outradvec).rotate(Math.PI/2).normalize().multiply(gapvec);
        this.ps[1].subtract(outradvec).subtract(insider).add(outradvec)
        this.ps[2].subtract(outradvec).subtract(insider).add(outradvec)
    }

    __calcRaund_forSquared(){
        const center = new Victor(this.half_size,this.half_size);
        for(let i = 0, j = 0 ; i < this.ps.length ; i++, j = 3*i){
            this.ps_r[j] = this.__sidePoint(this.ps[i], this.ps[(i!==0 ? i-1 : this.ps.length-1)], center, 0.2);
            this.ps_r[j+2] = this.__sidePoint(this.ps[i], this.ps[(i+1 < this.ps.length ? i+1 : 0)], center, 0.2);
            this.ps_r[j+1] = this.ps[i].clone().mix(this.ps_r[j].clone().mix(this.ps_r[j+2],0.3),0.3);
        }
    }

    __calcRaund_forCircle(angle){
        let ps = this.ps;
        let ps_r = this.ps_r;
        const center = new Victor(this.half_size,this.half_size);
        
        let op1 = ps[0].clone(), op2 = ps[1].clone();
        let ip1 = ps[3].clone(), ip2 = ps[2].clone();
        let angle_r = angle * .1;
        let olc = .8, otc = .8;
        let ilc = .2, itc = .8;
            op1.subtract(center);
            op2.subtract(center);
            ip1.subtract(center);
            ip2.subtract(center);
        let lcl = ip1.clone().mix(op1, .15).subtract(ip1);
        let lcr = ip2.clone().mix(op2, .15).subtract(ip2);
            ps_r[15] = ps[3].clone().add(lcl);
            ps_r[8] = ps[2].clone().add(lcr);
            ps_r[14] = ps[3].clone().mix(ps_r[15], ilc);
            ps_r[9] = ps[2].clone().mix(ps_r[8], ilc);

            ps_r[12] = ip1.rotate(angle_r*2).add(center);
            ps_r[11] = ip2.rotate(-angle_r*2).add(center);
            ps_r[13] = ps_r[12].clone().mix(ps[3], itc);
            ps_r[10] = ps_r[11].clone().mix(ps[2], itc);

            ps_r[0] = ps[0].clone().subtract(lcl);
            ps_r[7] = ps[1].clone().subtract(lcr);
            ps_r[1] = ps_r[0].clone().mix(ps[0], olc);
            ps_r[6] = ps_r[7].clone().mix(ps[1], olc);
            
            ps_r[3] = op1.rotate(angle_r).add(center);
            ps_r[4] = op2.rotate(-angle_r).add(center);
            ps_r[2] = ps_r[3].clone().mix(ps[0], otc);
            ps_r[5] = ps_r[4].clone().mix(ps[1], otc);
    }

    __doPathCircle(){
        this.path_d = 
            ` M ${this.ps[0].x} ${this.ps[0].y} `+
            ` A ${this.outrad} ${this.outrad} 0 0 1 ${this.ps[1].x} ${this.ps[1].y} `+ 
            ` L ${this.ps[2].x} ${this.ps[2].y} `+
            ` A ${this.inrad} ${this.inrad} 1 0 0  ${this.ps[3].x} ${this.ps[3].y} `+
            ` z `
    }

    __doPathRoundedCircle(){
        this.path_d = 
            ` M ${this.ps_r[0].x},  ${this.ps_r[0].y}`+
            ` C ${this.ps_r[1].x},  ${this.ps_r[1].y}  ${this.ps_r[2].x},  ${this.ps_r[2].y} ${this.ps_r[3].x},  ${this.ps_r[3].y}`+
            ` A ${this.outrad} ${this.outrad} 0 0 1 ${this.ps_r[4].x},  ${this.ps_r[4].y}`+ 
            ` C ${this.ps_r[5].x},  ${this.ps_r[5].y}  ${this.ps_r[6].x},  ${this.ps_r[6].y} ${this.ps_r[7].x},  ${this.ps_r[7].y}`+
            ` L ${this.ps_r[8].x},  ${this.ps_r[8].y}`+ 
            ` C ${this.ps_r[9].x},  ${this.ps_r[9].y}  ${this.ps_r[10].x},  ${this.ps_r[10].y} ${this.ps_r[11].x},  ${this.ps_r[11].y}`+
            ` A ${this.inrad} ${this.inrad} 1 0 0 ${this.ps_r[12].x},  ${this.ps_r[12].y}`+ 
            ` C ${this.ps_r[13].x},  ${this.ps_r[13].y}  ${this.ps_r[14].x},  ${this.ps_r[14].y} ${this.ps_r[15].x},  ${this.ps_r[15].y}`+
            ` z `;
    }

    __doPathRoundedSuared(){
        this.path_d = 
            ` M ${this.ps_r[0].x},  ${this.ps_r[0].y}`+
            ` Q ${this.ps_r[1].x},  ${this.ps_r[1].y}  ${this.ps_r[2].x},  ${this.ps_r[2].y} `+
            ` L ${this.ps_r[3].x},  ${this.ps_r[3].y}`+ 
            ` Q ${this.ps_r[4].x},  ${this.ps_r[4].y}  ${this.ps_r[5].x},  ${this.ps_r[5].y} `+
            ` L ${this.ps_r[6].x},  ${this.ps_r[6].y}`+ 
            ` Q ${this.ps_r[7].x},  ${this.ps_r[7].y}  ${this.ps_r[8].x},  ${this.ps_r[8].y} `+
            ` L ${this.ps_r[9].x},  ${this.ps_r[9].y}`+ 
            ` Q ${this.ps_r[10].x},  ${this.ps_r[10].y}  ${this.ps_r[11].x},  ${this.ps_r[11].y} `+
            ` z `;
    } 

    __doPathSuared(){
        this.path_d = 
            ` M ${this.ps[0].x} ${this.ps[0].y} `+
            ` L ${this.ps[1].x} ${this.ps[1].y} `+ 
            ` L ${this.ps[2].x} ${this.ps[2].y} `+
            ` L ${this.ps[3].x} ${this.ps[3].y} `+
            ` z `
    } 

}