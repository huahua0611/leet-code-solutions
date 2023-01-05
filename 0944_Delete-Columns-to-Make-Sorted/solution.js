"use strict";

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  if (strs.length == 1) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j + 1][i] < strs[j][i]) {
        result = result + 1;
        break;
      }
    }
  }

  return result;
};
