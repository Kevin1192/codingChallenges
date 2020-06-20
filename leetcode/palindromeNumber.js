/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0) return false;
  if (x % 10 === 0) return false;

  // revert x and compare reverted with x;
  // 12 => Math.floor(132 / 10)
  let reverted = 0;
  x > reverted;
  while (x > reverted) {
    let lastDigit = x % 10;
    x = Math.floor(x / 10);
    reverted = reverted * 10 + lastDigit;
  }
  reverted;
  if (x === reverted || Math.floor(reverted / 10) === x) {
    return true;
  } else {
    return false;
  }
};
