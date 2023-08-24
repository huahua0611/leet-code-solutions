# Correctness Proof

## Problem description

Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```example
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```example
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```example
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

## Precondition

Ensure there is one and only one valid answer in the unms[].

## Postcondition

After the loop-invariant find one valid answer.

## Loop invariant

### Define loop invariant

By using the loop invariant, loop two indices in the Array nums at the same time. After the loop-invariant, there will be one valid answer in which two indices and their element add equal to the target.

### Initialization

Start with i = 0, and j = i + 1 (1), and try nums[i] = target - nums[j]. If nums[i] = target - nums[j] return [i,j].

### Maintenance

Let i start from 0 to nums.length -1, and j start from 1 to nums.length. Try nums[i] = target - nums[j].

### Termination

If nums[i] = target - nums[j], exit the loop invariant and return [i,j].

Or i = nums.length, exit the loop invariant and return [-1,-1] throw the err.

## Result

In case there is one and only one valid answer, after looping the whole array nums, we will find the result [i,j].

## Time complexity

 `O(n^2)`
