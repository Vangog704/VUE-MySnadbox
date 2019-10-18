import Victor from "victor";

function calc_arc_shape(btnconfig) {
	let outrad = btnconfig.radius;
	let inrad = btnconfig.inrad;

	let orvec = new Victor(0, -outrad);
	let irvec = new Victor(0, -inrad);

	let ps = [];
	let half_aperture = btnconfig.aperture / 2;
	let center = orvec.clone().mix(irvec, 0.5); //TODO make custom height
	ps[0] = orvec.clone().rotateDeg(-half_aperture);
	ps[3] = irvec.clone().rotateDeg(-half_aperture);
	ps[1] = orvec.clone().rotateDeg(half_aperture);
	ps[2] = irvec.clone().rotateDeg(half_aperture);

	__setGap(ps);

	let ps_r = calcRaund_forCircle(ps, btnconfig.aperture);

	let path = calc_arc_path(ps, inrad, outrad);
	let path_r = calc_arc_path_rounded(ps_r, inrad, outrad);

	return {
		path: path,
		path_r: path_r,
		iconpos: center,
		icon: btnconfig.icon,
		angle: btnconfig.angle,
		box: {
			x: ps[0].x,
			y: orvec.y,
			w: ps[1].x * 2,
			h: -orvec.y
		},
		iconsize: calc_iconsize(center.clone(), btnconfig.aperture, btnconfig.height)
	};
}

function __setGap(ps) {
	const gap = 2;
	const gapvec = new Victor(gap, gap);
	
	const hor_gap_0_3 = ps[0].clone().normalize().multiply(gapvec);
	const hor_gap_1_2 = ps[1].clone().normalize().multiply(gapvec);
	let ver_gap;
	
	ver_gap = ps[0].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
	ps[0].add(ver_gap).subtract(hor_gap_0_3);
	ps[3].add(ver_gap).add(hor_gap_0_3);
	
	ver_gap = ps[1].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
	ps[1].subtract(ver_gap).subtract(hor_gap_1_2);
	ps[2].subtract(ver_gap).add(hor_gap_1_2);

}

function calc_iconsize(center, aperture, height) {
	let n_center = center.clone().rotateDeg(aperture).subtract(center).length();
	let w = n_center;
	let h = height;
	return (w > h ? h : w) * 0.8;
}

function calc_arc_path(ps, inrad, outrad) {
	return (
		` M ${ps[0].x} ${ps[0].y} ` +
		` A ${outrad} ${outrad} 0 0 1 ${ps[1].x} ${ps[1].y} ` +
		` L ${ps[2].x} ${ps[2].y} ` +
		` A ${inrad} ${inrad} 1 0 0  ${ps[3].x} ${ps[3].y} ` +
		` z `
	);
}

function calc_arc_path_rounded(ps_r, inrad, outrad) {
	return (
		` M ${ps_r[0].x},  ${ps_r[0].y}` +
		` C ${ps_r[1].x},  ${ps_r[1].y}  ${ps_r[2].x},  ${ps_r[2].y} ${ps_r[3].x},  ${ps_r[3].y}` +
		` A ${outrad} ${outrad} 0 0 1 ${ps_r[4].x},  ${ps_r[4].y}` +
		` C ${ps_r[5].x},  ${ps_r[5].y}  ${ps_r[6].x},  ${ps_r[6].y} ${ps_r[7].x},  ${ps_r[7].y}` +
		` L ${ps_r[8].x},  ${ps_r[8].y}` +
		` C ${ps_r[9].x},  ${ps_r[9].y}  ${ps_r[10].x},  ${ps_r[10].y} ${ps_r[11].x},  ${ps_r[11].y}` +
		` A ${inrad} ${inrad} 1 0 0 ${ps_r[12].x},  ${ps_r[12].y}` +
		` C ${ps_r[13].x},  ${ps_r[13].y}  ${ps_r[14].x},  ${ps_r[14].y} ${ps_r[15].x},  ${ps_r[15].y}` +
		` z `
	);
}

function calcRaund_forCircle(ps, aperture) {
	let ps_r = [];

	let op1 = ps[0].clone(),
		op2 = ps[1].clone(),
		ip1 = ps[3].clone(),
		ip2 = ps[2].clone();
	let d_apert = aperture * 0.05;
	let olc = 0.8,
		otc = 0.8, //TODO make customised
		ilc = 0.2,
		itc = 0.8;
	let lcl = ip1
		.clone()
		.mix(op1, 0.15)
		.subtract(ip1);
	let lcr = ip2
		.clone()
		.mix(op2, 0.15)
		.subtract(ip2);
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

export default {
	calc_arc_shape
};
