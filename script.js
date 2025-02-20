// let javascriptISFun = true;
// console.log(javascriptISFun);

// console.log(typeof 23);
// console.log(typeof javascriptISFun);
// console.log(typeof true);

// 2 ** 3 MEANS 2 to the power of 3 = 2*2*2
// console.log(2**3);

// Data 1

// var m_weight = 78;
// var m_height = 1.69;

// var j_weight = 92;
// var j_height = 1.95;

// mark_BMI = m_weight / m_height ** 2;
// console.log(mark_BMI);

// john_BMI = j_weight / j_height ** 2;
// console.log(john_BMI);

// markHighrBMI = mark_BMI > john_BMI;
// console.log(markHighrBMI);

//  Data 2

// var m_weight = 95;
// var m_height = 1.88;

// var j_weight = 85;
// var j_height = 1.76;

// mark_BMI = m_weight / m_height ** 2;
// console.log(mark_BMI);

// john_BMI = j_weight / j_height ** 2;
// console.log(john_BMI);

// markHighrBMI = mark_BMI > john_BMI;
// console.log(markHighrBMI);

// function two() {
// 	var isValid;
//     console.log("In two fn")
// }

// function one() {
//     console.log("one function")
// 	var inValid = true;
// 	two();
//     console.log("running two functions")
// }

// console.log("first")
// var inValid = false;
// console.log("invalid false");
// one();
// console.log("End");

function findPeakElement(a) {
	const nums = a.map((num) => Number(num));
	console.log(nums);

	if (a.some((num) => isNaN(Number(num)))) {
		// console.log("Wrong input: contains non-numeric value");
		return false;
	}
	for (let num of nums) {
		let left = 0;
		let right = nums.length - 1;

		while (left < right) {
			let mid = Math.floor((left + right) / 2);

			if (nums[mid] > nums[mid + 1]) {
				right = mid; // left side
			} else if (
				nums[mid] === nums[mid + 1] ||
				nums[mid] === nums[mid - 1]
			) {
				left = "Not proper array given";
				break;
			} else {
				left = [nums[mid + 1], mid + 1];
			}
		}

		return left;
	}
}

// console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 1, 1, 6, 6, 6, 4]))
// console.log(findPeakElement([1, "1", 3, 6, "2", 4]));
