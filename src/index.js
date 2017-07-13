'use strict'

function areIntersected(r1, r2) {
	if (r1.left >= (r2.left + r2.width) || (r1.left + r1.width) <= r2.left || r1.top > (r2.top + r2.height) || (r1.top + r1.height) < r2.top) {
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