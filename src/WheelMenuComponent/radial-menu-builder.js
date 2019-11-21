import ArcButton from "./arc-button-class";

export default class RadialMenuBuilder {

	constructor(conf) {
    	this.__proto__._minAperture = .05;//%
		this._conf = {};
		this._conf.aperture = conf.aperture;
		this._conf.angle = conf.angle;
		this._conf.radius = conf.radius;
		this._conf.btns = conf.btns;
		
		this._res = [];
	}

	build() {
		if (!this._validConfig()) {
			console.log("VALIDATION ERROR");
			//TODO add error message
			return [];
		}
		//TODO consider move somewhere
		for (let i in this._conf.btns) {
			this._res[i] = new ArcButton(this._conf.btns[i]);
			if (this._conf.btns[i].btns) {
				this._res[i].children = new RadialMenuBuilder(this._conf.btns[i]).build();
			}
			this._res[i].id = i;
		}
		return this._res;
	}

	_validConfig() {
		if (this._conf.btns.length < 2) {
			//TODO add error massage
			throw new Error("error: less then 2 buttons in a pack");
		}
		this._copyBtns();
		return this._specifyAperture() && this._specifyAngles() && this._specifyRadius();
	}

	_specifyRadius() {
		let conf = this._conf;
		
		for (let btn of conf.btns) {
			if (btn.height == null) btn.height = conf.height;
			//TODO make height edges

			btn.inrad = conf.radius || 5;
			btn.radius = btn.inrad + btn.height;
		}

		return true;
  	}
  
	_specifyAperture() {
		const btns = this._conf.btns;
		const minAp = this._minAperture;
		
		let sum = 0, // sum of btn apertures
			undefsSum = 0,
			undefs = []; //aperture sum and array of undefined (flex) btns
		
		this._conf.aperture = !this._conf.aperture | this._conf.aperture > 360 ? 360 : this._conf.aperture;
		
		for (let i in btns) {
			//validate apertures
			if (!btns[i].aperture) {
				btns[i].aperture = minAp;
				if (1 - sum < btns[i].aperture) {
					btns.splice(i, btns.length);
					break;
				} else {
					undefsSum += btns[i].aperture;
					undefs.push(btns[i]);
				}
			} else {
				btns[i].aperture =
					btns[i].aperture > 1
						? 1
						: btns[i].aperture < minAp
							? minAp
							: btns[i].aperture;
				if (1 - sum < btns[i].aperture) {
					btns.splice(i, btns.length);
					break;
				}
			}
			sum += btns[i].aperture;
		}
		
		const coef = (1 - (sum - undefsSum)) / undefsSum; //coefficient of flexibility
		for (let btn of undefs) btn.aperture *= coef; // stretch to 100 %
		for (let btn of btns) btn.aperture *= this._conf.aperture; // stretch all to base aperture

		return true;
	}

	_specifyAngles() {
		let conf = this._conf,
			angle = conf.angle - conf.aperture/2;
		for (let btn of conf.btns) {
			btn.angle = angle + btn.aperture/2;
			angle += btn.aperture;
		}
		return true;
	}

	_copyBtns(){
		let n_btns = [],
			btns = this._conf.btns//short
		for(let i in btns){
			n_btns[i] = {
				aperture: btns[i].aperture,
				height: btns[i].height || 50,
				action: btns[i].action,
				path: btns[i].path,
				icon: btns[i].icon,
				title: btns[i].title,
			};
			if(btns[i].btns) n_btns[i].btns = btns[i].btns;
		}
		this._conf.btns = n_btns;
	}
}
