# Correctness Proof

## Problem description

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

Example 1:
  
```example
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

Example 2:

```example
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

Example 3:

```example
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

Constraints:

- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

## Precondition

Given an integer array nums with random order. Sort the array before applying the loop invariant.

## Postcondition

Find all results that meet the criteria. Remove duplicate entries from the results.

## Loop invariant

### Define loop invariant

By using the loop invariant, pick the first number in the array as nums[i], and try the second number in the array as nums[j] and the last number in the array as nums[k]. Try nums[i] + nums[j] + nums[k] === 0. Loop i from 0 to nums.length - 2, j from 1 to j < k, and k from nums.length to k > j. After the loop invariant, find the deduplicated results.

### Initialization

Start i = 0, j = 1, and  k = nums.length, and try nums[i] + nums[j] + nums[k] === 0.

### Maintenance

Let i from  0 to nums.length - 2, j from 1 to j < k, and k from nums.length to k > j. j++ form 2 , and k-- from nums.length. Once k > j, i++. If nums[i] === nums[i+1], nums[j] === nums[j+1] or bnums [k] === nums[k-1], skip the index, and contiune.

### Termination

Once i loop from 0 to nums.length - 2, exit loop invariant. Ensure to find all results that meet the criteria.

## Result

Sorted the nums array to ensure finding deduplicated results. Loop i,j, and k, try and if num[i] + nums[j] + nums[k] === 0. Push i,j and k to result.

## Time complexity

```Time
O(nlogN + n*n/2) = O(n^2)
```
