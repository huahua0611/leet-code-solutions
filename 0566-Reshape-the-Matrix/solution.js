/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

//v1
var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;

  if (m * n !== r * c) {
    return mat;
  }

  let result = [];

  for (let i = 0; i < r; i++) {
    result.push([]);
    for (let j = 0; j < c; j++) {
      let index = i * c + j;
      result[i][j] = mat[Math.floor(index / n)][index % n];
    }
  }

  return result;
};

//v2 looks running time not Good
var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;

  if (m * n !== r * c) {
    return mat;
  }

  let result = [];

  for (let i = 0; i < r * c; i++) {
    if (i % c === 0) {
      result.push([]);
    }
    result[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }

  return result;
};

/**
 * Algorithm
 *
 * Precondition
 * m == mat.length;
 * 1 <= m, n <= 100 - 1000 <= mat[i][j] <= 1000;
 * 1 <= r, c <= 300;
 *
 * PostCondition
 * If m * n not equal r * c, function return mat without any change
 * Otherwise return new 2-D Array with new Row and Column
 *
 * Loop-Invariant
 * All 2-D Array can transfer to 1-D Array, like mat[m][n] = tmpMat[m * n + n]
 * By this way, keep looping the mat[1..m][1..n], and transfer the value to
 * tmpMat[m * n +n].
 * Let index = m * n + n, then tmpMat[m * n + n] => tmpMat[index]
 * Then transfer tmpMat[index] to result[c][r], by (int) c = index / c,
 * and (int) r = index % r
 * Using one for-loop to change index from 1...r * c, will get result
 *
 * Start
 * There no special case before enter loop
 *
 * Enter Loop
 * Get the first element, result[r][c] = mat[m][n]
 * The relationship between r,c and m,n is
 * r*c+c = index =  m*n+n
 *
 * Looping
 * To save memory, directly push the value to result
 * let result[r][c] = mat[(int) index / m][index % m]
 * from 1...r and 1...c
 *
 * Exit Loop
 * After loop 1...r and 1...c, this Looping end and exit
 *
 * Result
 * Hence transfer one 2-D Array to 1-D Array (in mind) to 2-D Array
 * the value will be correct. Case of JS language, in 1...r loop,
 * we need add push([]) by ourselves
 *
 * Time Complexity
 *
 * For main parts are two for-loop, one is  1...r and the other is 1...c
 * so it is (r * c)
 *
 * T = (r * C)
 *
 */
