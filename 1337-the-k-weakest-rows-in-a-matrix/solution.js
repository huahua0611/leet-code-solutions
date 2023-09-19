"use strict";

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let matSum = [];

  for (let i = 0; i < mat.length; i++) {
    const rowSum = mat[i].reduce(function (x, y) {
      return x + y;
    }, 0);
    matSum.push([rowSum, i]);
  }

  matSum.sort(function (a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const result = matSum.slice(0, k).map(function (number) {
    return number[1];
  });

  return result;
};
