console.log(calc(8, 9));

/**
 * Function adds two numbers
 *
 * @param {number} num
 * @param {number} num2
 * @returns {number}
 */
function calc(num, num2) {
  return num + num2;
}

Hamburger.prototype = {
  constructor: Hamburger,
  getCallories() {
    return this.getSum(FastFood.CALLORIES_FIELD);
  },
  ...
}