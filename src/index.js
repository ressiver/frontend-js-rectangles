'use strict'

function areIntersected(r1, r2) {
	let rightSideR1 = r1.left + r1.width;
	let bottomSideR1 = r1.top + r1.height;
	let rightSideR2 = r2.left + r2.width;
	let bottomSideR2 = r2.top + r2.height;
	if (r1.left >= rightSideR2 || rightSideR1 <= r2.left ||
		r1.top > bottomSideR2 || bottomSideR1 < r2.top) {
		return false;
	} else {
		return true;
	}
}

function filterVisible(r1, array) {
	return array.filter(function (value) {
		if (value.width !== 0 && value.height !== 0) {
			return areIntersected(r1, value);
		} else {
			return false;
		}
	});
}