const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split("");
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    const tempDigits = digits.slice();
    tempDigits.splice(i, 1);
    result.push(parseInt(tempDigits.join("")));
  }
  return Math.max.apply(null, result);
}

module.exports = {
  deleteDigit,
};
