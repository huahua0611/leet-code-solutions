/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  const matSum = [];

  for (let i = 0; i < mat.length; i += 1) {
    const rowSum = mat[i].reduce((x, y) => x + y, 0);
    matSum.push([rowSum, i]);
  }

  matSum.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const result = matSum.slice(0, k).map((number) => number[1]);

  return result;
};
