/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumOperations = function (nums) {
  if (nums.length == 2) {
    if (nums[0] == nums[1]) {
      return 1;
    } else {
      return 0;
    }
  }

  let oddArray = [];
  let evenArray = [];

  for (let i = 0; i <= 100000; i++) {
    oddArray.push(0);
    evenArray.push(0);
  }

  for (let i = 0; i < nums.length; i = i + 2) {
    oddArray[nums[i]] = oddArray[nums[i]] + 1;
  }

  for (let i = 1; i < nums.length; i = i + 2) {
    evenArray[nums[i]] = evenArray[nums[i]] + 1;
  }

  let oddArrayMax1 = 0;
  let oddArrayMax1Count = 0;
  let oddArrayMax2 = 0;
  let oddArrayMax2Count = 0;

  for (let i = 0; i < oddArray.length; i++) {
    if (oddArray[i] > oddArrayMax1Count) {
      oddArrayMax2Count = oddArrayMax1Count;
      oddArrayMax1Count = oddArray[i];
      oddArrayMax2 = oddArrayMax1;
      oddArrayMax1 = i;
    } else if (oddArray[i] > oddArrayMax2Count) {
      oddArrayMax2Count = oddArray[i];
      oddArrayMax2 = i;
    }
  }

  let evenArrayMax1 = 0;
  let evenArrayMax1Count = 0;
  let evenArrayMax2 = 0;
  let evenArrayMax2Count = 0;

  for (let i = 0; i < evenArray.length; i++) {
    if (evenArray[i] > evenArrayMax1Count) {
      evenArrayMax2Count = evenArrayMax1Count;
      evenArrayMax1Count = evenArray[i];
      evenArrayMax2 = evenArrayMax1;
      evenArrayMax1 = i;
    } else if (evenArray[i] > evenArrayMax2Count) {
      evenArrayMax2Count = evenArray[i];
      evenArrayMax2 = i;
    }
  }

  if (oddArrayMax1 !== evenArrayMax1) {
    return nums.length - oddArrayMax1Count - evenArrayMax1Count;
  } else {
    return (
      nums.length -
      Math.max(
        oddArrayMax1Count + evenArrayMax2Count,
        oddArrayMax2Count + evenArrayMax1Count
      )
    );
  }
};
