import Victor from "victor";

export default class ArcButton{
	
	constructor(conf) {
		this.__proto__.gap = 2;
		//TODO add validation
		this.title = conf.title;
		this.icon = conf.icon;
		this.path = conf.path || '';
		this.action = conf.action;
		
		this.aperture = conf.aperture;
		this.height = conf.height;
		this.outrad = conf.radius;
		this.inrad = conf.inrad;
		this.angle = conf.angle;

		this.ps = [];

		const self = this;
		this.__proto__._util = {up:'0 0 1', down : '1 0 0'};
		this.__proto__._proxy = {
			get(target, prop){
				return prop.split('_').reduce((accum,n)=>{
					return accum +' '+ (self[n] ? self[n] : self._util[n] ? self._util[n] : target[n].x+','+target[n].y);
				});
			}
		};

		this._build();
	}

	_build(){
		//Init radius-vectors
		let irvec = new Victor(0, -this.inrad);
		let orvec = new Victor(0, -this.outrad);

		this._calcIconParams(irvec, orvec);
		this._calcPointsParams(irvec, orvec);
		
		// Set gap between arcs
		this._addGapsToArcs();

		// Points to svg-path string
		// TODO switch by config
 		this.path_n = this._pointsToArcPathStr();
		this.path_r = this._pointsToRoundedArcPathStr(this._roundedEdgesToArcShape());
	}

	_calcIconParams(irvec, orvec){
		this.iconpos = orvec.clone().mix(irvec, 0.5); //TODO make custom height
		this.iconpos.rotateDeg(this.angle);

		this.iconsize = this._calcIconSize();
	}

	_calcPointsParams(irvec, orvec){
		const half_aperture = this.aperture / 2;
		this.ps[0] = orvec.clone().rotateDeg(-half_aperture).rotateDeg(this.angle);
		this.ps[3] = irvec.clone().rotateDeg(-half_aperture).rotateDeg(this.angle);
		this.ps[1] = orvec.clone().rotateDeg(half_aperture).rotateDeg(this.angle);
		this.ps[2] = irvec.clone().rotateDeg(half_aperture).rotateDeg(this.angle);
	}

	//TODO rework
	_addGapsToArcs() {
		const gapvec = new Victor(this.gap, this.gap);
		
		// Horizontal gap vectors
		const hor_gap_0_3 = this.ps[0].clone().normalize().multiply(gapvec);
		const hor_gap_1_2 = this.ps[1].clone().normalize().multiply(gapvec);
		// Vertical gap vector
		let ver_gap;
		// Set gaps
		ver_gap = this.ps[0].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
		this.ps[0].add(ver_gap).subtract(hor_gap_0_3);
		this.ps[3].add(ver_gap).add(hor_gap_0_3);
		ver_gap = this.ps[1].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
		this.ps[1].subtract(ver_gap).subtract(hor_gap_1_2);
		this.ps[2].subtract(ver_gap).add(hor_gap_1_2);
		this.outrad -= this.gap;
		this.inrad += this.gap;
	}
	
	_roundedEdgesToArcShape() {
		let ps_r = [],
			ps = this.ps;
	
		const d_apert = this.aperture * .05; //delta aperture to short top/down sides
		// o - out; i - in; p - point;  
		let op1 = ps[0].clone(),
			op2 = ps[1].clone(),
			ip1 = ps[3].clone(),
			ip2 = ps[2].clone();
		
		// path[cube curve] vectors coefficients 
		let olc = .8,
			otc = .8, //TODO make customized
			ilc = .2,
			itc = .8;
		
		//vector to short left side 
		let lcl = ip1.clone().mix(op1, .15).subtract(ip1);
		//vector to short right side  
		let lcr = ip2.clone().mix(op2, .15).subtract(ip2);
	
		ps_r[15] = ps[3].clone().add(lcl);
		ps_r[8] = ps[2].clone().add(lcr);
		ps_r[14] = ps[3].clone().mix(ps_r[15], ilc);
		ps_r[9] = ps[2].clone().mix(ps_r[8], ilc);
	
		ps_r[12] = ip1.rotateDeg(d_apert * 2);
		ps_r[11] = ip2.rotateDeg(-d_apert * 2);
		ps_r[13] = ps_r[12].clone().mix(ps[3], itc);
		ps_r[10] = ps_r[11].clone().mix(ps[2], itc);
	
		ps_r[0] = ps[0].clone().subtract(lcl);
		ps_r[7] = ps[1].clone().subtract(lcr);
		ps_r[1] = ps_r[0].clone().mix(ps[0], olc);
		ps_r[6] = ps_r[7].clone().mix(ps[1], olc);
	
		ps_r[3] = op1.rotateDeg(d_apert);
		ps_r[4] = op2.rotateDeg(-d_apert);
		ps_r[2] = ps_r[3].clone().mix(ps[0], otc);
		ps_r[5] = ps_r[4].clone().mix(ps[1], otc);
	
		return ps_r;
	}
	
	_calcIconSize() {
		let w = this.iconpos.clone().rotateDeg(this.aperture).subtract(this.iconpos).length(), 
			h = this.height;
		return (w > h ? h : w) * .85; // TODO make customized maybe
	}

	_pointsToRoundedArcPathStr(ps_r) { 
		let pps = new Proxy(ps_r, this._proxy);
		return pps.M_0 + pps.C_1_2_3 + pps.A_outrad_outrad_up_4 + pps.C_5_6_7 + pps.L_8 + pps.C_9_10_11 + pps.A_inrad_inrad_down_12 + pps.C_13_14_15 + 'z';
	}

	_pointsToArcPathStr() {
		let pps = new Proxy(this.ps, this._proxy);
		return pps.M_0 + pps.A_outrad_outrad_up_1 + pps.L_2 + pps.A_inrad_inrad_down_3 + 'z'; 
	}
};
