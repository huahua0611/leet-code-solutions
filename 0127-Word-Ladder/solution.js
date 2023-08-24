/**
 * 知识点：
 * String.substring() vs slice()
 * String.fromCharCode(c) -- read the charactor from integer.
 * Array push() -- add new element to the last index of the Array.
 * pop() -- remove the last index element of the Array.
 * shift() -- remove the first index element of the Array.
 * inclides() -- check if the element exsits in the Array with True/False.
 * splice() -- remove/add elements from the Array.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  const queue = [];
  queue.push(beginWord);

  let depth = 0;

  while (queue.length > 0) {
    depth = depth + 1;
    let breadth = queue.length;

    while (breadth > 0) {
      breadth = breadth - 1;
      let currentWord = queue[0];
      queue.shift();

      for (let i = 0; i < currentWord.length; i++) {
        let tmpWord = currentWord;

        for (let c = 97; c <= 122; c++) {
          tmpWord =
            tmpWord.slice(0, i) + String.fromCharCode(c) + tmpWord.slice(i + 1);

          if (tmpWord == endWord) {
            return depth + 1;
          }

          if (tmpWord == currentWord) {
            continue;
          }

          if (wordSet.has(tmpWord)) {
            queue.push(tmpWord);
            wordSet.delete(tmpWord);
          }
        }
      }
    }
  }

  return 0;
};
