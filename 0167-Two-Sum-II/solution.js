/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// two pointer version
var twoSum = function (numbers, target) {
  if (numbers.length === 2) {
    return [1, 2];
  }

  let min = 0;
  let max = numbers.length - 1;

  while (min < max) {
    let tmpSum = numbers[min] + numbers[max];
    if (tmpSum === target) {
      return [min + 1, max + 1];
    }

    if (tmpSum < target) {
      min++;
    } else {
      max--;
    }
  }

  return [-1, -1];
};

/**
 * Algorithm
 *
 * Precondition
 * 2 <=number[] size <=3 * 104
 * all the element in number[], -1000 <= num[i] <=1000
 * This is the sorted Array
 * the target, -1000 <= target <= 1000
 * there must be exist and only exist one valid answer
 *
 * PostCondition
 * Return two index + 1 of numbers[], which two index element add equal target
 *
 * Loop-Invariant
 * Case of the input Array is sorted , we do not need format input
 *
 * Pick the first one element, nums[i], and the second element nums[j],
 * try nums[i] + nums[j] equal or not equal target
 *
 * Keep pick two diff element and try them, until find the two element add
 * equal target, case of the precondition say there must exist one answer.
 *
 * Case of this is sorted Array, so we can use two pointer to find result
 *
 * Array[min... max] array is sorted from min to max
 *
 * Compare min + max with Target, There will be three solution:
 *
 * 1. min + max = Target
 * 2. min + max < Target
 * 3. min + max > Target
 *
 * if case 1 return min and max index + 1
 * if case 2 try numbers[min + 1] + max with Target until case 1
 * if case 3 try min + numbers[max - 1] with Target until case 1
 *
 *
 * Start
 * Pick nums[min] and nums[max] try nums[min] + nums[max] === target
 *
 * Enter Loop
 * 1. min + max = Target
 * 2. min + max < Target
 * 3. min + max > Target
 *
 * if case 1 return min and max index + 1
 * if case 2 try numbers[min + 1] + max with Target until case 1
 * if case 3 try min + numbers[max - 1] with Target until case 1
 *
 * if not case 1 , both case 2 and 3 will enter the loop
 *
 * Looping
 * By keeping change min or max index through [min + i] and [max - j]
 * until min + max is equal target
 *
 * Exit Loop
 * 1. when case 1, function will exit or
 * 2. min index > max index
 *
 * Case of precondition there must exist and only exist one answer, function
 * will exit looping 1. when case 1, function will exit
 *
 * Result
 * When exit loop, we will find the answer min + max = target, and
 * return [min + 1 , max + 1] as result
 *
 * Time Complexity
 *
 * var twoSum = function (numbers, target) {
 *   if (numbers.length === 2) {                  1
 *     return [1, 2];                             1
 *   }
 *   let min = 0;                                 1
 *   let max = numbers.length - 1;                1
 *
 *   while (min < max) {                          n
 *     let tmpSum = numbers[min] + numbers[max];  1
 *     if (tmpSum === target) {                   1
 *       return [min + 1, max + 1];               1
 *     }
 *
 *     if (tmpSum < target) {                     1
 *       min++;                                   1
 *     } else {
 *       max--;                                   1
 *     }
 *   }
 *
 *   return [-1, -1];                             1
 * };
 *
 * T = 1+1+1+1+n(1+1+1+1) = n
 *
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// binary search
var twoSum = function (numbers, target) {
  if (numbers.length === 2) {
    return [1, 2];
  }

  let end = numbers.length;
  for (let i = 0; i < numbers.length - 1; i++) {
    let tmpTarget = target - numbers[i];
    let tmpResult = findTarget(numbers, tmpTarget, i + 1, end);
    if (tmpResult !== -1) {
      return [i + 1, tmpResult + 1];
    }
  }

  return [-1, -1];
};

function findTarget(numbers, target, start, end) {
  if (end < start) {
    return -1;
  }
  mid = Math.floor((start + end) / 2);
  if (numbers[mid] === target) {
    return mid;
  }
  if (numbers[mid] < target) {
    return findTarget(numbers, target, mid + 1, end);
  } else {
    return findTarget(numbers, target, start, mid - 1);
  }
}

/**
 * Algorithm
 *
 * Precondition
 * 2 <=number[] size <=3 * 104
 * all the element in number[], -1000 <= num[i] <=1000
 * This is the sorted Array
 * the target, -1000 <= target <= 1000
 * there must be exist and only exist one valid answer
 *
 * PostCondition
 * Return two index + 1 of numbers[], which two index element add equal target
 *
 * Loop-Invariant
 * Case of the input Array is sorted , we do not need format input
 *
 * Pick the first one element, nums[i], by target - numbers[i]
 * => tmpTarget, use binary search to find tmpTarget in result of numbers[],
 * case of numbers[] is storted.
 *
 * Useing for loop from 1 ... numbers.length -1, try to find tmpResult in rest
 * numbers[] until find the two element add equal target,
 * case of the precondition say there must exist one answer.
 *
 * Start
 * Pick first element numbers[i] and get tmpTarget = Target - number[i]
 *
 * Enter Loop
 * Loop numbers[1] ... number[n] as number[i]
 *
 * Looping
 * By looping numbers[i] from 1 ...n, and try to find tmpTarget in rest numbers[]
 *
 * Exit Loop
 * 1. when finish looping number[i] from 1 ... n, we find some index equal tmpResult
 * 2. finish looping, we did not find
 *
 * No matter we find or not find result, after looping from 1... n, the looping
 * will stop and exit, case of precondition, exit loop, we must can find result
 *
 * Result
 * When exit loop, we will find the answer numbers[i],
 * and numbers[j] = tmpTarget = Target - numbers[i],
 * return [i + 1 , j + 1] as result
 *
 * Time Complexity
 *
 * var twoSum = function (numbers, target) {
 *   if (numbers.length === 2) {                                    1
 *     return [1, 2];
 *   }
 *
 *   let end = numbers.length;                                      1
 *   for (let i = 0; i < numbers.length - 1; i++) {                 n
 *     let tmpTarget = target - numbers[i];                         1
 *     let tmpResult = findTarget(numbers, tmpTarget, i + 1, end);  logN
 *     if (tmpResult !== -1) {                                      1
 *       return [i + 1, tmpResult + 1];
 *     }
 *   }
 *
 *   return [-1, -1];                                               1
 * };
 *
 * T = 1+1+n(1+logN+1)+1 = nlogN
 *
 */
