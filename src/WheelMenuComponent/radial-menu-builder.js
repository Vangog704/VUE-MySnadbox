import ArcButton from "./arc-button-class";

export default class RadialMenuBuilder {

	constructor(conf) {
    this._minAperture = .05;//%

		this._conf = {};
		this._conf.aperture = conf.aperture;
		this._conf.angle = conf.angle;
		this._conf.radius = conf.radius;
		this._conf.btns = conf.btns;
		
		// this._conf = conf;
		this._res = [];
		this._defAperture = 5;

		// let maxBtnCount = this._conf.aperture / this._defAperture;
		// let btns = this._conf.btns || [];
		// this._btnCount = (btns.length > maxBtnCount ? maxBtnCount : btns.length);
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
			return false;
		}
		this._copyBtns();
		return this._specifyAperture() && this._specifyAngles() && this._specifyRadius();
	}

	_specifyRadius() {
		let conf = this._conf;
		let btns = conf.btns;
		for (let i in btns) {
			if (btns[i].height == null) btns[i].height = conf.height;
			//TODO make height edges
		}
		for (let i in btns) {
			btns[i].inrad = conf.radius || 5;
			btns[i].radius = btns[i].inrad + btns[i].height;
		}

		return true;
  	}
  
	_specifyAperture() {
		//defines
		const btns = this._conf.btns;
		const minAp = this._minAperture;
		this._conf.aperture = !this._conf.aperture | this._conf.aperture > 360 ? 360 : this._conf.aperture;

		let sum = 0, // sum of btn apertures
		undefsSum = 0,
		undefs = [], //aperture sum and array of undefined (flex) btns
		defsSum, // sum of defined buttons apertures
		coef; //coefficient of flexibility

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
		defsSum = sum - undefsSum;
		coef = (1 - defsSum) / undefsSum;
		for (let btn of undefs) btn.aperture *= coef; // stretch to 100 %
		for (let btn of btns) btn.aperture *= this._conf.aperture; // stretch all to base aperture

		return true;
	}

	_specifyAperture3() {
		//defines
		const btns = this._conf.btns;
		const minAp = this._minAperture;
		this._conf.aperture = !this._conf.aperture | this._conf.aperture > 360 ? 360 : this._conf.aperture;

		let sum = 0, // sum of btn apertures
		undefsSum = 0,
		undefs = [], //aperture sum and array of undefined (flex) btns
		defsSum, // sum of defined buttons apertures
		coef; //coefficient of flexibility

		for (let i in btns) {
		//validate apertures
		if (!btns[i].aperture) {
			btns[i].aperture = minAp;
			if (100 - sum < btns[i].aperture) {
			btns.splice(i, btns.length);
			break;
			} else {
			undefsSum += btns[i].aperture;
			undefs.push(btns[i]);
			}
		} else {
			btns[i].aperture =
			btns[i].aperture > 100
				? 100
				: btns[i].aperture < minAp
				? minAp
				: btns[i].aperture;
			if (100 - sum < btns[i].aperture) {
			btns.splice(i, btns.length);
			break;
			}
		}
		sum += btns[i].aperture;
		} 
		defsSum = sum - undefsSum;
		coef = (100 - defsSum) / undefsSum;
		for (let btn of undefs) btn.aperture *= coef; // stretch to 100 %
		coef = this._conf.aperture / 100;
		for (let btn of btns) btn.aperture *= coef; // stretch all to base aperture 

		return true;
	}

  	//@deprecated
	_specifyAperture1() {
		let conf = this._conf;
		let btns = conf.btns;
		let defAperture = this._defAperture;

		conf.aperture = conf.aperture > 360 ? 360 : conf.aperture;

		let customAperturaSum = 0;
		let withNoApertureNumber = this._btnCount;
		for (let i = 0; i < this._btnCount; i++) {
			if (btns[i].aperture && btns[i].aperture > defAperture) {
				customAperturaSum += btns[i].aperture;
				withNoApertureNumber--;
			} else {
				btns[i].aperture = defAperture;
			}
		}

		let imagineAperture = customAperturaSum + defAperture * withNoApertureNumber;
		let customApertureCoef = (conf.aperture < imagineAperture ? (conf.aperture - defAperture * withNoApertureNumber) / customAperturaSum : 1);
		let defaultApertureCoef = (conf.aperture >= imagineAperture ? (conf.aperture - customAperturaSum) / (defAperture * withNoApertureNumber) : 1);
		for (let i = 0; i < this._btnCount; i++) {
			btns[i].aperture = (btns[i].aperture === defAperture ? defAperture * defaultApertureCoef : btns[i].aperture * customApertureCoef);
		}
		return true;
	}
  	//@deprecated
	_specifyAperture2() {
		this._conf.aperture = this._conf.aperture > 360 ? 360 : this._conf.aperture;
		let n_btns = this._conf.btns; //?

		let baseAperture = this._conf.aperture;

		let minDeg = 36;
		let minAp = 100/360 * minDeg;
		let sum;
		for (let i in n_btns){
			n_btns[i].aperture = n_btns[i].aperture || minAp;
			if (n_btns[i].aperture > 50) n_btns[i].aperture = 50;
		}	
		sum = 0;
		for (let i in n_btns){
			sum += n_btns[i].aperture;
			if(sum > 100){
				sum -= n_btns[i].aperture;
				n_btns.splice(i, n_btns.length);
				break;
			}
		}
		let coef = baseAperture/sum;
		for (let i in n_btns){
			n_btns[i].aperture *= coef;
			if(n_btns[i].aperture > 180) n_btns[i].aperture = 180;
		}
		return true;
	}

	_specifyAngles() {
		let conf = this._conf;
		let btns = conf.btns || [];
		let angle = conf.angle || 0;
		angle -= conf.aperture/2;
		for (let i in btns) {
			angle += btns[i].aperture/2;
			btns[i].angle = angle;
			angle += btns[i].aperture/2;
		}
		return true;
	}

	_copyBtns(){
		let n_btns = [];
		let btns = this._conf.btns//short
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
