exports.merge = function(left, right){
	var leftI = 0;
		var rightI = 0;
		var res = [];
		while (leftI<left.length || rightI<right.length) {
			if (leftI === left.length){
				res.push(right[rightI]);
				rightI++;
			}
			else if (rightI === right.length || left[leftI] <= right[rightI]){
				res.push(left[leftI]);
				leftI++;
			}
			else if (left[leftI] > right[rightI]) {
				res.push(right[rightI]);
				rightI++;
			}
		}
		return res;
	}

exports.mergeSort = function(arr) {
		if (arr.length < 2){
			return arr;
		}
		var mid = Math.floor(arr.length/2);
		var left = arr.slice(0, mid);
		var right = arr.slice(mid, arr.length);
		var sortedL = exports.mergeSort(left);
		var sortedR = exports.mergeSort(right);
		return exports.merge(sortedL, sortedR);
	}


/*First version of merge:

module.exports = {
	merge: function(left, right) {
		var leftI = 0;
		var rightI = 0;
		var res = [];
		while (leftI<left.length || rightI<right.length) {
			if(left[leftI] <= right[rightI]){
				res.push(left[leftI]);
				leftI++;
			}
			else if(left[leftI] > right[rightI]) {
				res.push(right[rightI]);
				rightI++;
			}
			else if (leftI === left.length){
				res.push(right[rightI]);
				rightI++;
			}
			else if (rightI === right.length){
				res.push(left[leftI]);
				leftI++;
			}
		}
		return res;
	}
}
*/

//Could refactor as:
/*module.exports = {
	merge: function(left, right) {
		var leftI = 0;
		var rightI = 0;
		var res = [];
		while (leftI<left.length || rightI<right.length) {
			if (leftI === left.length){
				res.push(right[rightI]);
				rightI++;
			}
			else if (rightI === right.length || left[leftI] <= right[rightI]){
				res.push(left[leftI]);
				leftI++;
			}
			else if(left[leftI] > right[rightI]) {
				res.push(right[rightI]);
				rightI++;
			}
		}
		return res;
	}
*/
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers

