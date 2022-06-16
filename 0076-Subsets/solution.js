/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length == 1) {
    return [[], [nums[0]]];
  }

  let lastOne = nums[nums.length - 1];

  nums.pop();
  let preResult = subsets(nums);

  console.log(preResult);

  let result = [];

  for (let i = 0; i < preResult.length; i++) {
    let tmp = preResult[i];
    tmp.push(lastOne);
    console.log("last one is " + lastOne);
    console.log("here is" + tmp);
    // result.push(preResult[i]);
  }

  return result;
};

console.log(subsets([1, 2, 3]));

// let a = [];
// a.push(2);

// console.log(2);
