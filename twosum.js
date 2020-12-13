/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//  两数之和
var twoSum = function(nums, target) {
    let arr = nums,
        num = 0;
    for (var i = 0; i < arr.length; i++) {
        num = target - arr[i]
        for (var j = i + 1; j < arr.length; j++) {
            if (num == arr[j]) {
                return [i, j]
            }
        }
        if (arr[1] == target) {
            return [i]
        }
    }
};
console.log(twoSum([-1, -2, -3, -4, -5], -8));