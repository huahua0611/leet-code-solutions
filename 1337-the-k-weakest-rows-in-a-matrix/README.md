# Correctness Proof

## Problem description

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

1. The number of soldiers in row i is less than the number of soldiers in row j.
2. Both rows have the same number of soldiers and i < j.

Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

Constraints:

`m == mat.length`
`n == mat[i].length`
`2 <= n, m <= 100`
`1 <= k <= m`
`matrix[i][j] is either 0 or 1.`

## Precondition

Ensure all elements in the matrix have a value of either 0 or 1. Additionally, k should be greater than 0 and less than or equal to `mat.length`.

## Postcondition

The output is an array containing the indices of the k weakest rows in the matrix, ordered from weakest to strongest.

## Loop invariant

### Define loop invariant

For each row i in the matrix that has been processed so far, `matSum` contains the sum of all elements in row i along with the row index i.

### Initialization

The loop invariant is trivially satisfied before the loop starts as `matSum`is empty, indicating that no rows have been processed.

### Maintenance

In each iteration of the loop, we calculate the sum of all elements in the current row and store this sum along with the current row index in `matSum`. This maintains the loop invariant because matSum is updated to include the new row that has been processed.

### Termination

The loop terminates after all rows have been processed, at which point matSum contains the sum of all elements for each row along with the corresponding row index, satisfying our postcondition.

## Result

After the loop terminates, we sort `matSum` in ascending order based on the number of soldiers and row indices. We then pick the first k row indices from the sorted array as the result, which satisfies the postcondition.

## Time complexity

1. Looping through and summing all elements in the matrix: `O(m×n)`
2. Sorting the sums: `O(mlogm)`
3. Picking the first k values: `O(k)`

Total time complexity: `O(m×n)+O(mlog⁡m)+O(k)=O(m(n+log⁡m)+k)`

## Note

Divide the problem into two parts: First, find the sum of each row and store the sum results along with their respective row indices. Second, sort the sum results from weakest to strongest, and return the first k row indices from the stored results.
