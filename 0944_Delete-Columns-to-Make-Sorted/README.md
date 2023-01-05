# Proving Algorithm Correctness

## problem description

You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

```example
abc
bce
cae
```

You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

Return the number of columns that you will delete.

Example 1:

```example
Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
```

Example 2:

```example
Input: strs = ["a","b"]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.
```

Example 3:

```example
nput: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
```

Constraints:

- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 1000
- strs[i] consists of lowercase English letters.

## Precondition

There are n strings in the Array with the same length. All the strings are lowercase English letters. There one column will be deleted or all columns will be deleted.

## Postcondition

Output the index of columns which not sorted and should be deleted.

## Loop-Invariant

### Define loop invarinat

Loop each column of the string and compare from the first string to the last one. Record the unsorted column index. If all columns should be deleted then return all.

### Initialization

Pick the first chart of the first string and compare the first chart of the second string.

### Maintenance

Compare the first chart of each string in the given Array. Then compare the second chart of each string in the given Array. Then third...

### Termination

Once compare all charts of each string in the given Array. Then end and exit looping because we need to find all columns which unsorted to delete.

## Result

Check the result and return the unsorted column number.

## Time Complexity

Time = O(string.lenghth \* N)
