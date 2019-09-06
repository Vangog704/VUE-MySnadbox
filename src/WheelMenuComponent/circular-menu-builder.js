import Victor from "victor";
import calc from "./circular-menu-config";

export default class CircularMenuBuilder {

	constructor(conf) {

		this._conf = conf;
		this._res = [];
		this._defAperture = 10;

		let maxBtnCount = conf.aperture / this._defAperture;
		let btns = (conf.btns === undefined ? {} : conf.btns);
		this._btnCount = (btns.length > maxBtnCount ? maxBtnCount : btns.length);

	}

	build() {

		if (!this._valid_config()) {
			return [];
		}
		//TODO move
		for (let i = 0; i < this._btnCount; i++) {
			this._res[i] = calc.calc_arc_shape(this._conf.btns[i]);
			if (this._conf.btns[i].btns != null) {
				this._res[i].children = new CircularMenuBuilder(this._conf.btns[i]).build();
			}
			this._res[i].id = i;
		}
		return this._res;
	}

	_valid_config() {
		if (this._conf.btns.length < 2) {
			//TODO add log massage
			return false;
		}
		return this._specify_aperture() && this._specify_angles() && this._specify_radius();
	}

	_specify_radius() {
		let conf = this._conf;
		let btns = conf.btns;
		for (let i = 0; i < this._btnCount; i++) {
			if (btns[i].height == null) btns[i].height = conf.height;
			//TODO make height edges
		}
		for (let i = 0; i < this._btnCount; i++) {
			btns[i].inrad = (conf.radius != null ? conf.radius : 30);
			btns[i].radius = btns[i].inrad + btns[i].height;
		}

		return true;
	}

	_specify_aperture() {
		let conf = this._conf;
		let btns = conf.btns;
		let defAperture = this._defAperture;

		conf.aperture = (conf.aperture > 360 ? 360 : conf.aperture);

		let customAperturaSum = 0;
		let withNoApertureNumber = this._btnCount;
		for (let i = 0; i < this._btnCount; i++) {
			if (btns[i].aperture != null && btns[i].aperture > defAperture) {
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

	_specify_angles() {
		let conf = this._conf;
		let btns = (conf.btns === undefined ? {} : conf.btns);
		let angle = (conf.angle == null ? 0 : conf.angle);
		angle -= conf.aperture/2;
		for (let i = 0; i < this._btnCount; i++) {
			angle += btns[i].aperture/2;
			btns[i].angle = angle;
			angle += btns[i].aperture/2;
		}
		return true;
	}
}
