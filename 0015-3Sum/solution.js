"use strict";

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) {
      return [[nums[0], nums[1], nums[2]]];
    }
    return [];
  }

  nums.sort(function (a, b) {
    return a - b;
  });

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }

    let target = -nums[i];
    let lower = i + 1;
    let upper = nums.length - 1;

    while (lower < upper) {
      if (nums[lower] + nums[upper] === target) {
        result.push([nums[i], nums[lower], nums[upper]]);

        while (nums[lower] === nums[lower + 1]) {
          lower++;
        }

        while (nums[upper] === nums[upper - 1]) {
          upper--;
        }

        lower++;
        upper--;
      } else if (nums[lower] + nums[upper] < target) {
        lower++;
      } else {
        upper--;
      }
    }

    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return result;
};
