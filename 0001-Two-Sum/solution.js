/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length == 2) {
    return [0, 1];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

/**
 * Algorithm
 *
 * Precondition
 * 2 <=number[] size <=104
 * all the element in number[], -109 <= num[i] <=109
 * the target, -109 <= target <= 109
 * there must be exist and only exist one valid answer
 *
 * PostCondition
 * return two index of numbers[], which two index element add equal target
 *
 * Loop-Invariant
 * If try all two pair possible solution from Array, we do not need format input
 *
 * Pick the first one element, nums[i], and the second element nums[j],
 * try nums[i] == or !== taget  - nums[j]
 *
 * Keep pick two diff element and try them, until find the two element add
 * equal target, case of the precondition say there must exist one answer.
 *
 * Start
 * Pick nums[i] and nums[j] try nums[i] == target - nums[j]
 *
 * Enter Loop
 * By looping nums[] from 1 to nums[] size - 1, to pick nums[i]
 * By looping nums[] from 2 to nums[] size, to pick nums[j]
 *
 * Looping
 * Keep Looping the adding, nums[i] == target - nums[j]
 *
 * Exit Loop
 * For nums[i] is nums[size - 1] and nums[j] is nums[size]
 * or we find one nums[i] == target - nums[j] at some index.
 * case of precondition, there must exist one and only one answer.
 *
 * Result
 * When exit loop, we will find the answer index i and j which
 * nums[i] == target - nums[j]
 *
 * Time Complexity
 *
 * var twoSum = function (nums, target) {
 *   if (nums.length == 2) {                            1
 *     return [0, 1];                                   1
 *   }
 *   for (let i = 0; i < nums.length - 1; i++) {        n-1
 *     for (let j = i + 1; j < nums.length; j++) {      n
 *       if (nums[i] === target - nums[j]) {            1
 *         return [i, j];                               1
 *       }
 *     }
 *   }
 * };
 *
 * T = 1+1+(n-1)((n)(1)) = n^2
 *
 */
